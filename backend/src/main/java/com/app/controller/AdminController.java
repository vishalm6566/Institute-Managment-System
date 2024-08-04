package com.app.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.app.DTO.UserReqDTO;
import com.app.custom_exceptions.InvalidCredentialsException;
import com.app.entity.Admin;
import com.app.entity.Teacher;
import com.app.service.AdminService;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/admin")
public class AdminController {
    @Autowired
    private AdminService adminService;

    @GetMapping("/all")
    public List<Admin> getAllAdmins() {
        return adminService.getAllAdmins();
    }

    @PostMapping
    public ResponseEntity<?> loginAdmin(@RequestBody UserReqDTO user) {
    	 try {
    		 Admin admin= adminService.loginAdmin(user);
             return new ResponseEntity<>(admin, HttpStatus.OK);
         } catch (InvalidCredentialsException e) {
             return new ResponseEntity<>(e.getMessage(), HttpStatus.UNAUTHORIZED);
         } catch (Exception e) {
             return new ResponseEntity<>("Login failed", HttpStatus.INTERNAL_SERVER_ERROR);
         }	
    }

    
    @GetMapping("/{id}")
    public Admin getAdminById(@PathVariable Long id) {
        return adminService.getAdminById(id);
    }

    @PostMapping("/register")
    public Admin createAdmin(@RequestBody Admin admin) {
        return adminService.createAdmin(admin);
    }

    @DeleteMapping("/{id}")
    public void deleteAdmin(@PathVariable Long id) {
        adminService.deleteAdmin(id);
    }
}


