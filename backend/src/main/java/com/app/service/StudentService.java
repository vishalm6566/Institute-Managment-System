package com.app.service;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.DAO.CourseRepository;
import com.app.DAO.StudentRepository;
import com.app.DTO.StudentReqDTO;
import com.app.DTO.UserReqDTO;
import com.app.custom_exceptions.InvalidCredentialsException;
import com.app.entity.Admin;
import com.app.entity.Course;
import com.app.entity.Student;

@Service
public class StudentService {
    @Autowired
    private StudentRepository studentRepository;
    
    @Autowired
    private  CourseRepository courseRepository;

    @Autowired
    private ModelMapper mapper;

    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    public Student getStudentById(Long id) {
        return studentRepository.findById(id).orElse(null);
    }
    public Student loginStudent(UserReqDTO user) throws InvalidCredentialsException{
		return studentRepository.findByEmailAndPassword(user.getEmail(), user.getPassword()).orElseThrow( () -> new InvalidCredentialsException("Invalid Email or Password"));
    }

    public Student createStudent(StudentReqDTO student) {
    	Course course = courseRepository.findById(student.getCourseId()).orElseThrow();
    	Student std = mapper.map(student, Student.class);
    	std.setCourse(course);
        return studentRepository.save(std);
    }

    public void deleteStudent(Long id) {
        studentRepository.deleteById(id);
    }
}