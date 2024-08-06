package com.app.entity;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

import lombok.Data;

@Data
@MappedSuperclass
public class BasePersonEntity extends BaseEntity{
   
    private String name;
    private String lastName;
    private String email;
    private String password;
    private String address;
    private String phone;
}
