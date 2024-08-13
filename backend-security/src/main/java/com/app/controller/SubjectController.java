package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.DTO.SubjectReqDTO;
import com.app.entity.Subject;
import com.app.service.SubjectService;

@CrossOrigin
@RestController
@RequestMapping("/subject")
public class SubjectController {
    @Autowired
    private SubjectService subjectService;

    @GetMapping
    public List<Subject> getAllSubjects() {
        return subjectService.getAllSubjects();
    }

    @GetMapping("/{id}")
    public List<Subject> getAllSubjectsByCourse(@PathVariable Long id) {
        return subjectService.getAllSubjectsByCourse(id);
    }
    
//    @GetMapping("/{id}")
//    public Subject getSubjectById(@PathVariable Long id) {
//        return subjectService.getSubjectById(id);
//    }

    @PostMapping
    public Subject createSubject(@RequestBody SubjectReqDTO subject) {
        return subjectService.createSubject(subject);
    }

    @DeleteMapping("/{id}")
    public void deleteSubject(@PathVariable Long id) {
        subjectService.deleteSubject(id);
    }
}