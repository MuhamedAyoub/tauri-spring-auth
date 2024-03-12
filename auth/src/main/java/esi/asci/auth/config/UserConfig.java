package esi.asci.auth.config;

import esi.asci.auth.interfaces.ERoles;
import esi.asci.auth.models.Roles;
import esi.asci.auth.models.UserModel;
import esi.asci.auth.repositories.RolesRepository;
import esi.asci.auth.repositories.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class UserConfig {

 @Bean
CommandLineRunner commandLineRunner(RolesRepository repository) {
    return args -> {
        Roles user = new Roles(1, ERoles.ROLE_USER);
        Roles admin = new Roles(2, ERoles.ROLE_ADMIN);
        Roles moderator = new Roles(3, ERoles.ROLE_MODERATOR);

        repository.saveAll(List.of(user, admin, moderator));

    };
}
}
