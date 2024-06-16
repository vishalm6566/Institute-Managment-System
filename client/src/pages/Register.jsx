import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Register.css'; 
import { toast } from 'react-toastify';

const Register = () => {
    // State hooks for managing form data and errors
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic validation
        if (!name || !email || !password || !confirmPassword) {
            toast.warn('Please fill in all fields.');
            return;
        }

        if (password !== confirmPassword) {
            toast.error('Passwords do not match.');
            return;
        }

        // Mock registration process (replace with actual API call)
        try {
            const response = await fakeApiCall({ name, email, password });

            if (response.success) {
                toast.success('Registration successful!');
                // Redirect to login or other page
            } else {
                toast.error('Registration failed. Please try again.');
            }
        } catch (err) {
            toast.error('An error occurred. Please try again.');
        }
    };

    // Mock API call function
    const fakeApiCall = (userData) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                if (userData.email !== 'existing@user.com') {
                    resolve({ success: true });
                } else {
                    resolve({ success: false });
                }
            }, 1000);
        });
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6 border shadow p-3 mb-5 bg-white rounded">
                    <h2 className="text-center">Register</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Full Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                placeholder="Enter your full name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="confirmPassword"
                                placeholder="Confirm your password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </div>
                        <div>Do you have an account? <Link to="/login" >Login</Link> </div>
                        <button type="submit" className="btn btn-primary btn-block">Register</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
