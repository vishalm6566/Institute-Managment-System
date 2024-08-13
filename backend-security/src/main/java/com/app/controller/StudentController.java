package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.DTO.StudentReqDTO;
import com.app.DTO.UserReqDTO;
import com.app.custom_exceptions.InvalidCredentialsException;
import com.app.entity.Admin;
import com.app.entity.Student;
import com.app.entity.Teacher;
import com.app.service.StudentService;

@RestController
@CrossOrigin
@RequestMapping("/student")
public class StudentController {
    @Autowired
    private StudentService studentService;

    @GetMapping
    public List<Student> getAllStudents() {
        return studentService.getAllStudents();
    }

    @GetMapping("/{id}")
    public Student getStudentById(@PathVariable Long id) {
        return studentService.getStudentById(id);
    }
    @PostMapping
    public ResponseEntity<?> loginStudent(@RequestBody UserReqDTO user) {
        try {
   		 Student std = studentService.loginStudent(user);
            return new ResponseEntity<>(std, HttpStatus.OK);
        } catch (InvalidCredentialsException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.UNAUTHORIZED);
        } catch (Exception e) {
            return new ResponseEntity<>("Login failed", HttpStatus.INTERNAL_SERVER_ERROR);
        }	 
    }

    @PostMapping("/register")
    public Student createStudent(@RequestBody StudentReqDTO student) {
        return studentService.createStudent(student);
    }
    
    @PatchMapping("/update")
    public Student updateStudent(@RequestBody StudentReqDTO student) {
        return studentService.updateStudent(student);
    }
    
    @DeleteMapping("/{id}")
    public void deleteStudent(@PathVariable Long id) {
        studentService.deleteStudent(id);
    }
}