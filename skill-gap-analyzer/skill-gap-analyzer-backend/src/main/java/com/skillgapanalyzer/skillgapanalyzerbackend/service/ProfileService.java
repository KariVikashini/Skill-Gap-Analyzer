package com.skillgapanalyzer.skillgapanalyzerbackend.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skillgapanalyzer.skillgapanalyzerbackend.dto.ProfileRequest;
import com.skillgapanalyzer.skillgapanalyzerbackend.dto.ProfileResponse;
import com.skillgapanalyzer.skillgapanalyzerbackend.model.StudentProfile;
import com.skillgapanalyzer.skillgapanalyzerbackend.model.User;
import com.skillgapanalyzer.skillgapanalyzerbackend.repository.StudentProfileRepository;
import com.skillgapanalyzer.skillgapanalyzerbackend.repository.UserRepository;

@Service
public class ProfileService {

    @Autowired
    private StudentProfileRepository profileRepository;

    @Autowired
    private UserRepository userRepository;

    // ================= SAVE OR UPDATE PROFILE =================

    public ProfileResponse saveProfile(ProfileRequest request) {

        ProfileResponse response = new ProfileResponse();

        Optional<User> optionalUser = userRepository.findById(request.getId());

        if (optionalUser.isEmpty()) {
            response.setSuccess(false);
            response.setMessage("User not found");
            return response;
        }

        User user = optionalUser.get();

        StudentProfile profile;

        Optional<StudentProfile> existing =
                profileRepository.findByUser(user);

        if (existing.isPresent()) {
            profile = existing.get();
        } else {
            profile = new StudentProfile();
            profile.setUser(user);
        }

        profile.setPhone(request.getPhone());
        profile.setDob(request.getDob());
        profile.setGender(request.getGender());

        profile.setCollege(request.getCollege());
        profile.setDegree(request.getDegree());
        profile.setDepartment(request.getDepartment());
        profile.setYear(request.getYear());

        profile.setCgpa(request.getCgpa());

        profile.setDomain(request.getDomain());
        profile.setJobRole(request.getJobRole());

        profile.setSkills(request.getSkills());

        profile.setBio(request.getBio());

        profileRepository.save(profile);

        response.setSuccess(true);
        response.setMessage("Profile Saved Successfully");

        return response;
    }

    // ================= LOAD PROFILE =================

    public ProfileResponse getProfile(Long userId) {
        
        ProfileResponse response = new ProfileResponse();

        Optional<User> optionalUser =
                userRepository.findById(userId);

        if (optionalUser.isEmpty()) {

            response.setSuccess(false);
            response.setMessage("User not found");
            return response;
        }

        User user = optionalUser.get();

        Optional<StudentProfile> optionalProfile =
                profileRepository.findByUser(user);

        StudentProfile profile;

        if (optionalProfile.isPresent()) {

            profile = optionalProfile.get();

        } else {

            // Automatically create profile if it doesn't exist
            profile = new StudentProfile();
            profile.setUser(user);

            profileRepository.save(profile);
        }

        response.setSuccess(true);

        // User table fields
        response.setName(user.getName());
        response.setEmail(user.getEmail());
        response.setRole(user.getRole().name());

        // Profile table fields
        response.setPhone(profile.getPhone());
        response.setDob(profile.getDob());
        response.setGender(profile.getGender());

        response.setCollege(profile.getCollege());
        response.setDegree(profile.getDegree());
        response.setDepartment(profile.getDepartment());
        response.setYear(profile.getYear());

        response.setCgpa(profile.getCgpa());

        response.setDomain(profile.getDomain());
        response.setJobRole(profile.getJobRole());

        response.setSkills(profile.getSkills());
        response.setBio(profile.getBio());
        response.setResume(profile.getResume());

        return response;
    }

}