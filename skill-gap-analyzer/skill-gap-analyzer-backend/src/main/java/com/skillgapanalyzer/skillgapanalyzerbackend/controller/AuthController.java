package com.skillgapanalyzer.skillgapanalyzerbackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skillgapanalyzer.skillgapanalyzerbackend.dto.AuthResponse;
import com.skillgapanalyzer.skillgapanalyzerbackend.dto.LoginRequest;
import com.skillgapanalyzer.skillgapanalyzerbackend.dto.RegisterRequest;
import com.skillgapanalyzer.skillgapanalyzerbackend.service.AuthService;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = {
    "http://localhost:5173",
    "http://localhost:5174"
})public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/register")
public AuthResponse register(@RequestBody RegisterRequest request) {
    System.out.println("REGISTER API CALLED");
    return authService.register(request);
}

@PostMapping("/login")
public AuthResponse login(@RequestBody LoginRequest request) {
    System.out.println("LOGIN API CALLED");
    return authService.login(request);
}
}