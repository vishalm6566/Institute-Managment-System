package com.app.service;

import org.springframework.stereotype.Service;

import com.app.DAO.TaskRepository;
import com.app.DAO.TeacherRepository;
import com.app.DTO.TaskReqDTO;
import com.app.entity.Task;
import com.app.entity.Task.Status;
import com.app.entity.Teacher;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;

@Service
public class TaskService {
    @Autowired
    private TaskRepository taskRepository;
    
    @Autowired 
    private TeacherRepository teacherRepository;
    
    @Autowired
    private ModelMapper mapper;

    public List<Task> getAllTasks() {
        return taskRepository.findAll();
    }

    public Task getTaskById(Long id) {
        return taskRepository.findById(id).orElse(null);
    }

    public Task createTask(TaskReqDTO task) {
    	Teacher teacher = teacherRepository.findById(task.getTeacherId()).orElseThrow();
    	Task t = mapper.map(task, Task.class);
        t.setStatus(Task.Status.PENDING);
        t.setTeacher(teacher);
//        task.setAssignedDate(LocalDateTim.now());
        return taskRepository.save(t);
    }

    public Task updateTaskStatus(Long taskId) {
        Task task = taskRepository.findById(taskId).orElse(null);
        if (task.getStatus() == Status.PENDING) {
        	task.setStatus(Status.COMPLETED);
            taskRepository.save(task);
        }
        return task;
    }

//    public void deleteTask(Long id) {
//    	Teacher teacher = teacherRepository.findById(task.getTeacherId()).orElseThrow();
//    }

	public List<Task> getTaskByTeacherId(TaskReqDTO task) {
    	Teacher teacher = teacherRepository.findById(task.getTeacherId()).orElseThrow();
		List<Task> tasklist=taskRepository.findByTeacher(teacher);
		return tasklist;
		
	}
}
