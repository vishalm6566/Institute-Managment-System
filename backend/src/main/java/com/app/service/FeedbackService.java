package com.app.service;
import org.springframework.stereotype.Service;

import com.app.DAO.FeedbackRepository;
import com.app.DAO.StudentRepository;
import com.app.DTO.FeedbackReqDTO;
import com.app.custom_exceptions.InvalidCredentialsException;
import com.app.entity.Feedback;
import com.app.entity.Student;

import org.apache.catalina.mapper.Mapper;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;

@Service
public class FeedbackService {
    @Autowired
    private FeedbackRepository feedbackRepository;
    @Autowired
    private StudentRepository studentrepository;
    @Autowired
    private ModelMapper mapper;

    public List<Feedback> getAllFeedback() {
        return feedbackRepository.findAll();
    }

    public Feedback getFeedbackById(Long id) {
        return feedbackRepository.findById(id).orElse(null);
    }

    
    public void deleteFeedback(Long id) {
        feedbackRepository.deleteById(id);
    }

	public Feedback getFeedbackByStudentId(Long id) {
		// TODO Auto-generated method stub
		Student student=studentrepository.findById(id).orElseThrow();
	    return feedbackRepository.findByStudent(student).orElseThrow( () -> new InvalidCredentialsException("invalid student id"));
	}
    
	
	public Feedback createFeedback(Long id, FeedbackReqDTO feedback) {
		// TODO Auto-generated method stub
		Student student=studentrepository.findById(id).orElseThrow();
		Feedback feedback1=mapper.map(feedback,Feedback.class);
		feedback1.setStudent(student);
		
		return feedbackRepository.save(feedback1);
	}
			
}
