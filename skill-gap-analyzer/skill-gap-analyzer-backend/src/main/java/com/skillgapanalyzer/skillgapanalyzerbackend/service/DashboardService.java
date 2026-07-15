package com.skillgapanalyzer.skillgapanalyzerbackend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skillgapanalyzer.skillgapanalyzerbackend.dto.DashboardStats;
import com.skillgapanalyzer.skillgapanalyzerbackend.model.Role;
import com.skillgapanalyzer.skillgapanalyzerbackend.repository.StudentRepository;

@Service
public class DashboardService {

    @Autowired
    private StudentRepository studentRepository;

    public DashboardStats getDashboardStats() {

        long students = studentRepository.findByRole(Role.STUDENT).size();

        return new DashboardStats(
                students,
                0,
                0
        );
    }
}