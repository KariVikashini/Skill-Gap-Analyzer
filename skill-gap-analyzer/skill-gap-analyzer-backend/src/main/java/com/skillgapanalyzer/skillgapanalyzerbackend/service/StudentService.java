package com.skillgapanalyzer.skillgapanalyzerbackend.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skillgapanalyzer.skillgapanalyzerbackend.dto.StudentDTO;
import com.skillgapanalyzer.skillgapanalyzerbackend.model.Role;
import com.skillgapanalyzer.skillgapanalyzerbackend.model.User;
import com.skillgapanalyzer.skillgapanalyzerbackend.repository.StudentRepository;

@Service
public class StudentService {

    @Autowired
    private StudentRepository studentRepository;

    public List<StudentDTO> getAllStudents() {

        List<User> students = studentRepository.findByRole(Role.STUDENT);

        return students.stream()
                .map(student -> new StudentDTO(
                        student.getId(),
                        student.getName(),
                        student.getEmail(),
                        student.getRole().name()
                ))
                .collect(Collectors.toList());
    }
}