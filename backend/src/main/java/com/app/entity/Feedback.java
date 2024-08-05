package com.app.entity;
import javax.persistence.*;

import lombok.Data;
@Data
@Entity
public class Feedback extends BaseEntity{
	    @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;

	    @ManyToOne
	    @JoinColumn(name = "student_id")
	    private Student student;
	    
	    private String message;
}
