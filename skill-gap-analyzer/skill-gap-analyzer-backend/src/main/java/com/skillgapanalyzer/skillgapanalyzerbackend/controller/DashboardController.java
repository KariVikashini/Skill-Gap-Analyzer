package com.skillgapanalyzer.skillgapanalyzerbackend.controller;

import com.skillgapanalyzer.skillgapanalyzerbackend.dto.DashboardStats;
import com.skillgapanalyzer.skillgapanalyzerbackend.service.DashboardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admin/dashboard")
@CrossOrigin(origins = "http://localhost:5173")
public class DashboardController {

    @Autowired
    private DashboardService dashboardService;

    @GetMapping
    public DashboardStats getDashboard() {
        return dashboardService.getDashboardStats();
    }

}