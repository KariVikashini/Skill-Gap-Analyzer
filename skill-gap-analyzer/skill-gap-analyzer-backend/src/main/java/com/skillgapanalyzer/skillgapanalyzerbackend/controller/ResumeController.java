package com.skillgapanalyzer.skillgapanalyzerbackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.skillgapanalyzer.skillgapanalyzerbackend.service.ResumeService;

@RestController
@RequestMapping("/api/resume")
@CrossOrigin(origins = {
        "http://localhost:5173",
        "http://localhost:5174"
})
public class ResumeController {

    @Autowired
    private ResumeService resumeService;

    @PostMapping("/upload")
    public ResponseEntity<String> uploadResume(
            @RequestParam Long userId,
            @RequestParam MultipartFile file) {

        System.out.println("UPLOAD API CALLED");

        try {
            String message = resumeService.uploadResume(userId, file);
            return ResponseEntity.ok(message);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.badRequest()
                    .body("Upload failed: " + e.getMessage());
        }
    }

    @GetMapping("/view/{userId}")
    public ResponseEntity<Resource> viewResume(
            @PathVariable Long userId) {

        try {
            Resource resource = resumeService.getResume(userId);

            return ResponseEntity.ok()
                    .contentType(MediaType.APPLICATION_PDF)
                    .body(resource);

        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/download/{userId}")
    public ResponseEntity<Resource> downloadResume(
            @PathVariable Long userId) {

        try {

            Resource resource = resumeService.getResume(userId);

            return ResponseEntity.ok()
                    .header(HttpHeaders.CONTENT_DISPOSITION,
                            "attachment; filename=resume.pdf")
                    .contentType(MediaType.APPLICATION_PDF)
                    .body(resource);

        } catch (Exception e) {

            return ResponseEntity.notFound().build();

        }
    }
}