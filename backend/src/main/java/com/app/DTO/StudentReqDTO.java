package com.app.DTO;

import java.util.Set;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.app.entity.BasePersonEntity;
import com.app.entity.Course;
import com.app.entity.Marks;
import com.app.entity.Subject;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class StudentReqDTO {
	
    private Long id;
    private String name;
    private String lastName;
    private String email;
    private String password;
    private String address;
    private String phone;
    private Long courseId;
    private int marks10th;
    private int marks12th;
    private int graduationMarks;
}
