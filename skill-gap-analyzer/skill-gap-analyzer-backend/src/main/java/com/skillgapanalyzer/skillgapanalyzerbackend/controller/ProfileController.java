package com.skillgapanalyzer.skillgapanalyzerbackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skillgapanalyzer.skillgapanalyzerbackend.dto.ProfileRequest;
import com.skillgapanalyzer.skillgapanalyzerbackend.dto.ProfileResponse;
import com.skillgapanalyzer.skillgapanalyzerbackend.service.ProfileService;

@RestController
@RequestMapping("/api/profile")
@CrossOrigin(origins = "http://localhost:5173")
public class ProfileController {

    @Autowired
    private ProfileService profileService;

    // Save or Update Profile
    @PutMapping
    public ProfileResponse saveProfile(@RequestBody ProfileRequest request) {

        System.out.println("SAVE PROFILE API CALLED");

        return profileService.saveProfile(request);
    }

    // Get Profile by User ID
    @GetMapping("/{userId}")
    public ProfileResponse getProfile(@PathVariable Long userId) {

        System.out.println("GET PROFILE API CALLED");

        return profileService.getProfile(userId);
    }

}