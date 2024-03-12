package esi.asci.auth.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import esi.asci.auth.services.UserService;

@RestController
@RequestMapping(path = "/user")
public class UserController {
    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PreAuthorize("hasRole('ROLE_USER')")
    @GetMapping(path = "/profile")
    ResponseEntity<?> getProfile(@RequestAttribute RequestAttribute req) {
        System.out.println(req);
        return ResponseEntity.ok("Allowed");
    }

    @GetMapping(path = "/admin")
    ResponseEntity<?> getAdmin() {
        return ResponseEntity.ok("Allowed Admin");
    }
}
