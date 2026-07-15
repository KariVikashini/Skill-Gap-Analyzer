package com.skillgapanalyzer.skillgapanalyzerbackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skillgapanalyzer.skillgapanalyzerbackend.dto.StudentDTO;
import com.skillgapanalyzer.skillgapanalyzerbackend.service.StudentService;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin(origins = "http://localhost:5173")
public class StudentController {

    @Autowired
    private StudentService studentService;

    @GetMapping("/students")
    public List<StudentDTO> getStudents() {
        return studentService.getAllStudents();
    }
}