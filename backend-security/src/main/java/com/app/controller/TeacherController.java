package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.DTO.StudentReqDTO;
import com.app.DTO.TeacherReqDTO;
import com.app.DTO.UserReqDTO;
import com.app.custom_exceptions.InvalidCredentialsException;
import com.app.entity.Student;
import com.app.entity.Teacher;
import com.app.service.StudentService;
import com.app.service.TeacherService;

@RestController
@CrossOrigin
@RequestMapping("/teacher")
public class TeacherController {
	    @Autowired
	    private TeacherService teacherService;
        
	    @GetMapping
	    public List<Teacher> getAllStudents() {
	        return teacherService.getAllTeachers();
	    }

	    @GetMapping("/{id}")
	    public Teacher getStudentById(@PathVariable Long id) {
	        return teacherService.getTeacherById(id);
	    }
	    
	    @PostMapping
	    public ResponseEntity<?> loginTeacher(@RequestBody UserReqDTO user) {
	    	 try {
	    		 Teacher teacher = teacherService.loginTeacher(user);
	             return new ResponseEntity<>(teacher, HttpStatus.OK);
	         } catch (InvalidCredentialsException e) {
	             return new ResponseEntity<>(e.getMessage(), HttpStatus.UNAUTHORIZED);
	         } catch (Exception e) {
	             return new ResponseEntity<>("Login failed", HttpStatus.INTERNAL_SERVER_ERROR);
	         }	        
	    }

	    @PostMapping("/register")
	    public Teacher createTeacher(@RequestBody TeacherReqDTO teacher) {
	        return teacherService.createTeacher(teacher);
	    }
	    
	    

	    @DeleteMapping("/{id}")
	    public void deleteStudent(@PathVariable Long id) {
	    	teacherService.deleteTeacher(id);
	    }
}
