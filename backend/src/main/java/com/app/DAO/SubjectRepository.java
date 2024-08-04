package com.app.DAO;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entity.Subject;

public interface SubjectRepository extends JpaRepository<Subject, Long> {

}
