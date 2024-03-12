package esi.asci.auth.controllers;

import esi.asci.auth.dtos.AuthRequest;
import esi.asci.auth.dtos.AuthResponse;
import esi.asci.auth.dtos.RegisterRequest;
import esi.asci.auth.interfaces.Error;
import esi.asci.auth.services.AuthenticationService;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.annotation.*;

import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(path = "/auth")
public class AuthController {
    private AuthenticationService authService ;
    public AuthController() {
    }
    @Autowired
    public AuthController(AuthenticationService authService) {
        this.authService = authService;
    }
    @ResponseBody
    @PostMapping("/register")
    public ResponseEntity<?> register(
            @RequestBody @Valid  RegisterRequest request, HttpServletResponse response, BindingResult bindingResult
            ) {
        if(bindingResult.hasErrors()) {
            String errorMessage = bindingResult.getAllErrors().stream().map(ObjectError::getDefaultMessage).collect(Collectors.joining(", "));
            String errorResponse = String.format("{\"error\": \"%s\"}", errorMessage);
            return ResponseEntity.badRequest().body(errorResponse);

        }
        try {
            return ResponseEntity.accepted().body(this.authService.register(request,response));
        }catch (
                RuntimeException e) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body(new Error(e.getMessage(), HttpStatus.CONFLICT.value()));
        }


    }

    @ResponseBody
    @PostMapping("/authenticate")
    public ResponseEntity<?> authenticate(
            @Valid @RequestBody AuthRequest request, HttpServletResponse response, BindingResult bindingResult
    ) {
        if(bindingResult.hasErrors()) {
            String errorMessage = bindingResult.getAllErrors().stream().map(ObjectError::getDefaultMessage).collect(Collectors.joining(", "));
            // Put the error inside a json object with shape {error: "error message"}
            String errorResponse = String.format("{\"error\": \"%s\"}", errorMessage);

            return ResponseEntity.badRequest().body(errorResponse);
        }
        return ResponseEntity.accepted().body(this.authService.authenticate(request,response));
    }

}
