package esi.asci.auth.services;
import esi.asci.auth.dtos.AuthRequest;
import esi.asci.auth.dtos.AuthResponse;
import esi.asci.auth.dtos.RegisterRequest;
import esi.asci.auth.interfaces.ERoles;
import esi.asci.auth.interfaces.TokenType;
import esi.asci.auth.models.Roles;
import esi.asci.auth.models.Token;
import esi.asci.auth.models.UserModel;
import esi.asci.auth.repositories.RolesRepository;
import esi.asci.auth.repositories.TokenRepository;
import esi.asci.auth.repositories.UserRepository;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
    private final UserRepository repository;
    private final TokenRepository tokenRepository;
    private  final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final  AuthenticationManager authenticationManager;
    private final RolesRepository rolesRepository;

    public AuthResponse register(RegisterRequest request, HttpServletResponse response) {

        if(this.repository.findByEmail(request.getEmail()).isPresent()) {
            throw new RuntimeException("Email already exists");
        }
        String hashedPassword = passwordEncoder.encode(request.getPassword());
        System.out.println(hashedPassword);


        var user = UserModel.builder()
                .name(request.getName())
                .email(request.getEmail())
                .password(hashedPassword)
                .build();
        Set<Roles> roles = new HashSet<Roles>();
        Roles userRole = this.rolesRepository.findByName(ERoles.ROLE_USER)
                .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
        roles.add(userRole);
        user.setRoles(roles);
        var savedUser = repository.save(user);
        var jwtToken = jwtService.generateToken(user);
        var refreshToken = jwtService.generateRefreshToken(user);
        saveUserToken(savedUser, jwtToken);

        response.setHeader("Authorization", "Bearer " + jwtToken);
        return AuthResponse.builder()
                .accessToken(jwtToken)
                .refreshToken(refreshToken)
                .name(savedUser.getName())
                .email(savedUser.getEmail())
                .build();

    }

    public AuthResponse authenticate(AuthRequest request, HttpServletResponse response) {
        if(this.repository.findByEmail(request.getEmail()).isEmpty()) {
            throw new RuntimeException("User not found");
        }
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),request.getPassword()
                )
        );

        var user = repository.findByEmail(request.getEmail())
                .orElseThrow();
        System.out.println(user);
        var jwtToken = jwtService.generateToken(user);
        var refreshToken = jwtService.generateRefreshToken(user);
        revokeAllUserTokens(user);
        saveUserToken(user, jwtToken);
        response.setHeader("Authorization", "Bearer " + jwtToken);

        return   AuthResponse.builder()
                .accessToken(jwtToken)
                .refreshToken(refreshToken)
                .email(user.getEmail())
                .name(user.getName())
                .build();

    }

    private void revokeAllUserTokens(UserModel user) {
        var validUserTokens = tokenRepository.findAllValidTokenByUser(user.getId());
        if (validUserTokens.isEmpty())
            return;
        validUserTokens.forEach(token -> {
            token.setExpired(true);
            token.setRevoked(true);
        });
        tokenRepository.saveAll(validUserTokens);
    }

    private void saveUserToken(UserModel user, String jwtToken) {
        var token = Token.builder()
                .user(user)
                .token(jwtToken)
                .tokenType(TokenType.BEARER)
                .expired(false)
                .revoked(false)
                .build();
        tokenRepository.save(token);
    }




}

/*
*
$2a$10$F2FbIVTCXEnGV5YsQxfDJugHd2iz.DCGkeP.oIXYSKgL3fIR4iwQC
$2a$10$3ycA/7TmDDwS38Doo/UTne86j.RorUcuk.CmKeFDB4gNjyu.BYa02
$2a$10$34.H3suBThHD4/LsWfY0gO7Aoen4nGDxVebAGNuhmpgUWTWQN6H/q

* */