package com.app.DTO;

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

public class TeacherReqDTO {
	    private Long id;
	    private String name;
	    private String lastName;
	    private String email;
	    private String password;
	    private String address;
	    private String phone;
    
}