package com.skillgapanalyzer.skillgapanalyzerbackend.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skillgapanalyzer.skillgapanalyzerbackend.model.StudentProfile;
import com.skillgapanalyzer.skillgapanalyzerbackend.model.User;

public interface StudentProfileRepository
        extends JpaRepository<StudentProfile,Long> {

    Optional<StudentProfile> findByUser(User user);

}