package com.app.DAO;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entity.Course;
import com.app.entity.Subject;

public interface SubjectRepository extends JpaRepository<Subject, Long> {
	public List<Subject> findByCourse(Course course);
}
