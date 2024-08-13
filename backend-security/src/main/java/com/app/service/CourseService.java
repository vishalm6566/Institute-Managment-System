package com.app.service;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.DAO.CourseRepository;
import com.app.DTO.CourseReqDTO;
import com.app.entity.Course;

@Service
public class CourseService {
    @Autowired
    private CourseRepository courseRepository;

    @Autowired
    private ModelMapper mapper;
    
    public List<Course> getAllCourses() {
        return courseRepository.findAll();
    }

    public Course getCourseById(Long id) {
        return courseRepository.findById(id).orElse(null);
    }

    public Course createCourse(CourseReqDTO course) {
    	Course c = mapper.map(course, Course.class);
        return courseRepository.save(c);
    }

    public void deleteCourse(Long id) {
        courseRepository.deleteById(id);
    }
}