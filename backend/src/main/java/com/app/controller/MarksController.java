package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.app.DTO.MarksReqDTO;
import com.app.entity.Marks;
import com.app.service.MarksService;

@CrossOrigin
@RestController
@RequestMapping("/mark")
public class MarksController {
    @Autowired
    private MarksService marksService;

    @GetMapping
    public List<Marks> getAllMarks() {
        return marksService.getAllMarks();
    }

//    @GetMapping("/{id}")
//    public Marks getMarksById(@PathVariable Long id) {
//        return marksService.getMarksById(id);
//    }

    @GetMapping("/{id}")
    public List<Marks> getMarksByStudentId(@PathVariable Long id) {
        return marksService.getMarkByStudentId(id);
    }
    
    @PatchMapping
    public Marks createMarks(@RequestBody MarksReqDTO marks) {
        return marksService.createMarks(marks);
    }

    @DeleteMapping("/{id}")
    public void deleteMarks(@PathVariable Long id) {
        marksService.deleteMarks(id);
    }
}