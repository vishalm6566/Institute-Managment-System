package com.app.entity;
import java.time.LocalDate;
import java.time.LocalDateTime;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Data;

@Data
@Entity
public class Task extends BaseEntity {


//    @ManyToOne
//    @JoinColumn(name = "admin_id")
//    private Admin admin;

    @ManyToOne
    @JoinColumn(name = "teacher_id")
    private Teacher teacher;

    private String description;
//    private LocalDateTime assignedDate;
    private LocalDate dueDate;

    @Enumerated(EnumType.STRING)
    private Status status;

    public enum Status {
        PENDING,
        COMPLETED
    }

}
