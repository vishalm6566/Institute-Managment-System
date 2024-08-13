package com.app.security;

import java.util.Collection;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

// Import your entities
import com.app.entity.Admin;
import com.app.entity.Student;
import com.app.entity.Teacher;

public class CustomUserDetails implements UserDetails {
    private String email;
    private String password;
    private String role;

    // Accept any type of user (Admin, Teacher, Student) and determine role by class type
    public CustomUserDetails(Object user) {
        if (user instanceof Admin) {
            this.email = ((Admin) user).getEmail();
            this.password = ((Admin) user).getPassword();
        } else if (user instanceof Teacher) {
            this.email = ((Teacher) user).getEmail();
            this.password = ((Teacher) user).getPassword();
        } else if (user instanceof Student) {
            this.email = ((Student) user).getEmail();
            this.password = ((Student) user).getPassword();
        }

        // Determine role based on class name
        this.role =user.getClass().getSimpleName().toUpperCase();
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        // Return a list of granted authorities based on the role
        return List.of(new SimpleGrantedAuthority(role));
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
