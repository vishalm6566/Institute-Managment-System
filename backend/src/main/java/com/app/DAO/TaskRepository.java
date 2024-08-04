package com.app.DAO;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entity.Task;
import com.app.entity.Teacher;


public interface TaskRepository extends JpaRepository<Task, Long> {
    public List<Task> findByTeacher(Teacher teacher);
}
