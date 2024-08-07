package com.app.service;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.DAO.CourseRepository;
import com.app.DAO.StudentRepository;
import com.app.DAO.SubjectRepository;
import com.app.DAO.TeacherRepository;
import com.app.DTO.StudentReqDTO;
import com.app.DTO.TeacherReqDTO;
import com.app.DTO.UserReqDTO;
import com.app.custom_exceptions.InvalidCredentialsException;
import com.app.entity.Course;
import com.app.entity.Student;
import com.app.entity.Subject;
import com.app.entity.Teacher;

@Service
public class TeacherService {
	@Autowired
	private TeacherRepository teacherRepository;

	@Autowired
	private CourseRepository courseRepository;

	
	@Autowired
	private SubjectRepository subjectRepository;

	@Autowired
	private ModelMapper mapper;

	public List<Teacher> getAllTeachers() {
		return teacherRepository.findAll();
	}

	public Teacher getTeacherById(Long id) {
		return teacherRepository.findById(id).orElse(null);
	}

	public Teacher loginTeacher(UserReqDTO user)  throws InvalidCredentialsException {
		
		return teacherRepository.findByEmailAndPassword(user.getEmail(), user.getPassword()).orElseThrow( () -> new InvalidCredentialsException("Invalid Email or Password"));
	
	}

	public Teacher createTeacher(TeacherReqDTO teacher) {
		Subject sub = null;
		if(teacher.getSubjectId() != null) {
			sub = subjectRepository.findById(teacher.getSubjectId()).orElseThrow();
		}
		Teacher teac = mapper.map(teacher, Teacher.class);
		teac.setSubject(sub);
		return teacherRepository.save(teac);
	}

	public void deleteTeacher(Long id) {
		teacherRepository.deleteById(id);
	}

}
