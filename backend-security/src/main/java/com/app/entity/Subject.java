package com.app.entity;

import javax.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Entity
public class Subject extends BaseEntity {

    private String name;

    @ManyToOne
    @JoinColumn(name = "course_id")
    private Course course;
   
}