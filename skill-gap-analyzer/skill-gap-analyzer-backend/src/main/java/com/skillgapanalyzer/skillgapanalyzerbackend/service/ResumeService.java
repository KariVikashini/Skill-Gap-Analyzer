package com.skillgapanalyzer.skillgapanalyzerbackend.service;

import java.io.File;
import java.io.IOException;
import java.nio.file.Path;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.skillgapanalyzer.skillgapanalyzerbackend.model.StudentProfile;
import com.skillgapanalyzer.skillgapanalyzerbackend.model.User;
import com.skillgapanalyzer.skillgapanalyzerbackend.repository.StudentProfileRepository;
import com.skillgapanalyzer.skillgapanalyzerbackend.repository.UserRepository;

@Service
public class ResumeService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private StudentProfileRepository profileRepository;

    // Upload folder inside project
    private final String UPLOAD_DIR =
            System.getProperty("user.dir") + File.separator + "uploads";

    // ===================== UPLOAD RESUME =====================

    public String uploadResume(Long userId, MultipartFile file) throws IOException {

        Optional<User> optionalUser = userRepository.findById(userId);

        if (optionalUser.isEmpty()) {
            return "User not found";
        }

        User user = optionalUser.get();

        Optional<StudentProfile> optionalProfile =
                profileRepository.findByUser(user);

        if (optionalProfile.isEmpty()) {
            return "Profile not found";
        }

        StudentProfile profile = optionalProfile.get();

        // Create uploads folder if it doesn't exist
        File directory = new File(UPLOAD_DIR);

        if (!directory.exists()) {
            directory.mkdirs();
        }

        // Save as resume_<userId>.pdf
        String fileName = "resume_" + userId + ".pdf";

        File destination = new File(directory, fileName);

        System.out.println("Saving Resume To : " + destination.getAbsolutePath());

        file.transferTo(destination);

        profile.setResume(fileName);

        profileRepository.save(profile);

        return "Resume uploaded successfully";
    }

    // ===================== GET RESUME =====================

    public Resource getResume(Long userId) throws IOException {

        Optional<User> optionalUser = userRepository.findById(userId);

        if (optionalUser.isEmpty()) {
            throw new RuntimeException("User not found");
        }

        User user = optionalUser.get();

        Optional<StudentProfile> optionalProfile =
                profileRepository.findByUser(user);

        if (optionalProfile.isEmpty()) {
            throw new RuntimeException("Profile not found");
        }

        StudentProfile profile = optionalProfile.get();

        if (profile.getResume() == null || profile.getResume().isEmpty()) {
            throw new RuntimeException("Resume not uploaded");
        }

        Path path = new File(UPLOAD_DIR, profile.getResume()).toPath();

        Resource resource = new UrlResource(path.toUri());

        if (!resource.exists()) {
            throw new RuntimeException("Resume file not found");
        }

        return resource;
    }

}