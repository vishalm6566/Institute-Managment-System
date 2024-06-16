import React, { useState } from 'react';
import '../css/Login.css'
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {

    // State hooks for managing form data 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const naviate = useNavigate();

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic validation
        if (!email || !password) {
            toast.warn('Please fill in both fields.');
            return;
        }

        // Mock login process (replace with actual API call)
        try {
            // Simulate API call
            const response = await fakeApiCall(email, password);

            if (response.success) {
                // Redirect to dashboard or other page
                console.log('Login successful!')
                toast.success('Login successful!....')
                if(response.role === "admin") naviate('/admin/dashboard');

            } else {
                toast.error('Invalid email or password.');
            }
        } catch (err) {
            toast.error('An error occurred. Please try again.');
        }
    };

    // Mock API call function
    const fakeApiCall = (email, password) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (email === 'admin@test.com' && password === 'admin') {
                    resolve({ success: true, role : "admin"});
                } else {
                    resolve({ success: false });
                }
            }, 1000);
        });
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-4 border shadow p-3 mb-5 bg-white rounded">
                    <h2 className="text-center">Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Enter email"
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
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div>Don't have an account? <Link to="/register" >Register</Link> </div>
                        <button type="submit" className="btn btn-primary btn-block">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
