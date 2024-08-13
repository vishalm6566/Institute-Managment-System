package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.app.DTO.TaskReqDTO;
import com.app.entity.Task;
import com.app.service.TaskService;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/task")
public class TaskController {
    @Autowired
    private TaskService taskService;

    @GetMapping
    public List<Task> getAllTasks() {
        return taskService.getAllTasks();
    }

    @GetMapping("/{id}")
    public Task getTaskById(@PathVariable Long id) {
        return taskService.getTaskById(id);
    }

    @PostMapping("/register")
    public Task createTask(@RequestBody TaskReqDTO task) {
        return taskService.createTask(task);
    }
    
    @PostMapping("/teacher")
    public List<Task> getTaskByTeacherId(@RequestBody TaskReqDTO task) {
        return taskService.getTaskByTeacherId(task);
    }
    @PatchMapping("/{id}")
    public Task updateTaskStatus(@PathVariable Long id) {
        return taskService.updateTaskStatus(id);
    }

//    @DeleteMapping("/{id}")
//    public void deleteTask(@PathVariable Long id) {
//        taskService.deleteTask(id);
//    }
}
