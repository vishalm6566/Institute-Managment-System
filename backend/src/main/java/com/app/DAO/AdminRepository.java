package com.app.DAO;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entity.Admin;

public interface AdminRepository extends JpaRepository<Admin, Long> {
	public Optional<Admin> findByEmailAndPassword(String email, String password);
}

