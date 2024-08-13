package com.app.DAO;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entity.Feedback;
import com.app.entity.Student;
public interface FeedbackRepository extends JpaRepository<Feedback, Long> {
	public Optional<Feedback> findByStudent(Student student);
}
