package com.app.DAO;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entity.Task;

public interface TaskRepository extends JpaRepository<Task, Long> {

}
