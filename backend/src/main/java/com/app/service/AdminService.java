package com.app.service;

import org.springframework.stereotype.Service;

import com.app.DAO.AdminRepository;
import com.app.DTO.UserReqDTO;
import com.app.custom_exceptions.InvalidCredentialsException;
import com.app.entity.Admin;

import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;

@Service
public class AdminService {
    @Autowired
    private AdminRepository adminRepository;

    public List<Admin> getAllAdmins() {
        return adminRepository.findAll();
    }

    public Admin getAdminById(Long id) {
        return adminRepository.findById(id).orElse(null);
    }
    
    public Admin loginAdmin(UserReqDTO user) throws InvalidCredentialsException {
		return adminRepository.findByEmailAndPassword(user.getEmail(), user.getPassword()).orElseThrow( () -> new InvalidCredentialsException("Invalid Email or Password"));
    }
    

    public Admin createAdmin(Admin admin) {
        return adminRepository.save(admin);
    }

    public void deleteAdmin(Long id) {
        adminRepository.deleteById(id);
    }
}
