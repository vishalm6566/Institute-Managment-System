package com.app.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import com.app.DTO.SigninResponse;
import com.app.DTO.UserReqDTO;
import com.app.custom_exceptions.InvalidCredentialsException;
import com.app.entity.Admin;
import com.app.entity.Teacher;
import com.app.security.JwtUtils;
import com.app.service.AdminService;

import java.util.List;

import javax.validation.Valid;

@RestController
@CrossOrigin
@RequestMapping("/admin")
public class AdminController {
    @Autowired
    private AdminService adminService;
    
	@Autowired
	private JwtUtils jwtUtils;
	
	@Autowired
	private AuthenticationManager authMgr;

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
    
    @PostMapping("/signin")
	public ResponseEntity<?> authenticateUser(@RequestBody 
			@Valid UserReqDTO request) {
		System.out.println("in sign in" + request);
		//create a token(implementation of Authentication i/f)
		//to store un verified user email n pwd
		UsernamePasswordAuthenticationToken token=new 
				UsernamePasswordAuthenticationToken(request.getEmail(), 
						request.getPassword());
		//invoke auth mgr's authenticate method;
		Authentication verifiedToken = authMgr.authenticate(token);
		//=> authentication n authorization  successful !
		System.out.println(verifiedToken.getPrincipal().getClass());//custom user details object
		//create JWT n send it to the clnt in response
		SigninResponse resp=new SigninResponse
				(jwtUtils.generateJwtToken(verifiedToken),
				"Successful Auth!!!!");
		return ResponseEntity.
				status(HttpStatus.CREATED).body(resp);
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


