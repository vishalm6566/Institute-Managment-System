package com.app.service;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.DAO.CourseRepository;
import com.app.DAO.MarksRepository;
import com.app.DAO.StudentRepository;
import com.app.DAO.SubjectRepository;
import com.app.DTO.MarksReqDTO;
import com.app.entity.Course;
import com.app.entity.Marks;
import com.app.entity.Student;
import com.app.entity.Subject;

@Service
public class MarksService {
    @Autowired
    private MarksRepository marksRepository;
        
    @Autowired
    private StudentRepository studentRepository;
    
    @Autowired
    private SubjectRepository subjectRepository;
    
    @Autowired
    private CourseRepository courseRepository;
    
    @Autowired
    private ModelMapper mapper;

    public List<Marks> getAllMarks() {
        return marksRepository.findAll();
    }

//    public Marks getMarksById(Long id) {
//        return marksRepository.findById(id).orElse(null);
//    }
    
    public List<Marks> getMarkByStudentId(Long studentId){
    	Student std = studentRepository.findById(studentId).orElseThrow();
    	return marksRepository.findByStudent(std);
    }


    public Marks createMarks(MarksReqDTO marks) {
    	Subject sub = subjectRepository.findById(marks.getSubjectId()).orElseThrow();
    	Student std = studentRepository.findById(marks.getStudentId()).orElseThrow();
    	Course cur = courseRepository.findById(marks.getCourseId()).orElseThrow();
//    	Marks mks = mapper.map(marks, Marks.class);
    	Marks mark = marksRepository.findByStudentAndCourseAndSubject(std, cur, sub);
    	if(mark!= null) {
    		mark.setMarks(marks.getMarks());
    		return marksRepository.save(mark);
    	}
    	else {
    		
        	Marks mks = new Marks();
        	mks.setStudent(std);
        	mks.setSubject(sub);
        	mks.setCourse(cur);
        	mks.setMarks(marks.getMarks());
            return marksRepository.save(mks);

    	}
    }

    public void deleteMarks(Long id) {
        marksRepository.deleteById(id);
    }
}