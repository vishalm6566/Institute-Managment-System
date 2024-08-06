package com.app.entity;

import java.util.Set;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

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
public class Course extends BaseEntity{

    private String name;
    private String description;

    @OneToMany(mappedBy = "course", fetch = FetchType.EAGER)
    @JsonBackReference
    private Set<Subject> subjects;

    @OneToMany(mappedBy = "course", fetch = FetchType.EAGER)
    @JsonBackReference
    private Set<Marks> marks;
}