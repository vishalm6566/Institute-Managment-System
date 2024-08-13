package com.app.DAO;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entity.Admin;
import com.app.entity.Student;
import com.app.entity.Teacher;

public interface TeacherRepository extends JpaRepository<Teacher, Long> {
	public Optional<Teacher> findByEmailAndPassword(String email, String password);

	public Optional<Teacher> findByEmail(String email);
}
