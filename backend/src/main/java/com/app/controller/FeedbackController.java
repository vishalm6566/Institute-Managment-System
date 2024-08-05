package com.app.controller;

import org.apache.catalina.mapper.Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.app.DTO.FeedbackReqDTO;
import com.app.entity.Feedback;
import com.app.service.FeedbackService;

import java.util.List;


@RestController
@CrossOrigin
@RequestMapping("/feedback")
public class FeedbackController {
    @Autowired
    private FeedbackService feedbackService;

    @GetMapping
    public List<Feedback> getAllFeedback() {
        return feedbackService.getAllFeedback();
    }

    @GetMapping("/{id}")
    public Feedback getFeedbackByStudentId(@PathVariable Long id) {
        return feedbackService.getFeedbackByStudentId(id);
    }

    @PostMapping("/{id}")
    public Feedback createFeedback(@PathVariable Long id, @RequestBody FeedbackReqDTO feedback ) {
        return feedbackService.createFeedback(id ,feedback );
        
    }

    @DeleteMapping("/{id}")
    public void deleteFeedback(@PathVariable Long id) {
        feedbackService.deleteFeedback(id);
    }
}