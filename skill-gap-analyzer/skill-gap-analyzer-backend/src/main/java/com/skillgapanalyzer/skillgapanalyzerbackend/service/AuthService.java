package com.skillgapanalyzer.skillgapanalyzerbackend.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.skillgapanalyzer.skillgapanalyzerbackend.dto.AuthResponse;
import com.skillgapanalyzer.skillgapanalyzerbackend.dto.LoginRequest;
import com.skillgapanalyzer.skillgapanalyzerbackend.dto.RegisterRequest;
import com.skillgapanalyzer.skillgapanalyzerbackend.model.Role;
import com.skillgapanalyzer.skillgapanalyzerbackend.model.StudentProfile;
import com.skillgapanalyzer.skillgapanalyzerbackend.model.User;
import com.skillgapanalyzer.skillgapanalyzerbackend.repository.StudentProfileRepository;
import com.skillgapanalyzer.skillgapanalyzerbackend.repository.UserRepository;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private StudentProfileRepository profileRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    // ================= REGISTER =================

    public AuthResponse register(RegisterRequest request) {

        if (userRepository.existsByEmail(request.getEmail())) {
            return new AuthResponse("Email already exists", false);
        }

        User user = new User();

        user.setName(request.getName());
        user.setEmail(request.getEmail());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setRole(Role.STUDENT);

        // Save User
        User savedUser = userRepository.save(user);

        // Create an empty profile for the new user
        StudentProfile profile = new StudentProfile();
        profile.setUser(savedUser);

        profileRepository.save(profile);

        return new AuthResponse("Registration Successful", true);
    }

    // ================= LOGIN =================

    public AuthResponse login(LoginRequest request) {

        Optional<User> optionalUser =
                userRepository.findByEmail(request.getEmail());

        if (optionalUser.isEmpty()) {
            return new AuthResponse("User not found", false);
        }

        User user = optionalUser.get();

        if (!passwordEncoder.matches(
                request.getPassword(),
                user.getPassword())) {

            return new AuthResponse("Invalid Password", false);
        }

        AuthResponse response = new AuthResponse();

        response.setSuccess(true);
        response.setMessage("Login Successful");

        response.setId(user.getId());
        response.setName(user.getName());
        response.setEmail(user.getEmail());
        response.setRole(user.getRole().name());

        return response;
    }
}