package com.app.DAO;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entity.Course;
import com.app.entity.Marks;
import com.app.entity.Student;
import com.app.entity.Subject;

public interface MarksRepository extends JpaRepository<Marks, Long> {

//	@Query("SELECT new com.app.DTO.MarkResDTO(m.id, m.marks, s.name, s.id) FROM Marks m JOIN m.student s WHERE m.student.id = :studentId")
//	public List<MarkResDTO> findMarkByStudentId(@Param("studentId") Long studentId);
	
	public List<Marks> findByStudent(Student std);
	
	public Marks findByStudentAndCourseAndSubject(Student std, Course crs, Subject sub);
	
}
