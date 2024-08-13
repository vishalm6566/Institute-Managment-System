package com.app.service;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.DAO.CourseRepository;
import com.app.DAO.SubjectRepository;
import com.app.DTO.SubjectReqDTO;
import com.app.entity.Course;
import com.app.entity.Subject;

@Service
public class SubjectService {
    @Autowired
    private SubjectRepository subjectRepository;
    
    @Autowired 
    private CourseRepository courseRepository;
    
    @Autowired
    private ModelMapper mapper;

    public List<Subject> getAllSubjects() {
        return subjectRepository.findAll();
    }
    
    public List<Subject> getAllSubjectsByCourse(Long id) {
    	Course course = courseRepository.findById(id).orElseThrow();
        return subjectRepository.findByCourse(course);
    }
    

    public Subject getSubjectById(Long id) {
        return subjectRepository.findById(id).orElse(null);
    }

    public Subject createSubject(SubjectReqDTO subject) {
    	Course course = courseRepository.findById(subject.getCourseId()).orElseThrow();
    	Subject sub = mapper.map(subject, Subject.class);
    	sub.setCourse(course);
        return subjectRepository.save(sub);
    }

    public void deleteSubject(Long id) {
        subjectRepository.deleteById(id);
    }
}
