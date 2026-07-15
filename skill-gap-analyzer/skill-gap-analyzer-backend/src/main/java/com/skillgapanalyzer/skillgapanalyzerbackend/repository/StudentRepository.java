package com.skillgapanalyzer.skillgapanalyzerbackend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skillgapanalyzer.skillgapanalyzerbackend.model.Role;
import com.skillgapanalyzer.skillgapanalyzerbackend.model.User;

public interface StudentRepository extends JpaRepository<User, Long> {

    List<User> findByRole(Role role);

}