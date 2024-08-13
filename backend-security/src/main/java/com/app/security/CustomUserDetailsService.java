package com.app.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.DAO.AdminRepository;
import com.app.DAO.StudentRepository;
import com.app.DAO.TeacherRepository;
import com.app.entity.Admin;
import com.app.entity.Student;
import com.app.entity.Teacher;

@Service
@Transactional
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private AdminRepository adminRepository;

    @Autowired
    private TeacherRepository teacherRepository;

    @Autowired
    private StudentRepository studentRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        // Try to find the user in the Admin repository
        Admin admin = adminRepository.findByEmail(email).orElse(null);
        if (admin != null) {
            return new CustomUserDetails(admin);
        }

        // Try to find the user in the Teacher repository
        Teacher teacher = teacherRepository.findByEmail(email).orElse(null);
        if (teacher != null) {
            return new CustomUserDetails(teacher);
        }

        // Try to find the user in the Student repository
        Student student = studentRepository.findByEmail(email).orElse(null);
        if (student != null) {
            return new CustomUserDetails(student);
        }

        // If no user is found, throw an exception
        throw new UsernameNotFoundException("Email not found !!!!!");
    }
}
