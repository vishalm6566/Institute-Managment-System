package com.app.DAO;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entity.Admin;
import com.app.entity.Student;

public interface StudentRepository extends JpaRepository<Student, Long> {
	public Optional<Student> findByEmailAndPassword(String email, String password);


}
