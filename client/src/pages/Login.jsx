import React, { useState } from 'react';
import '../css/Login.css';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import IMSlogo from '../components/Images/IMSlogo.jpg'; 



const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            toast.warn('Please fill in both fields.');
            return;
        }
        try {
            const response = await fakeApiCall(email, password);
            if (response.success) {
                toast.success('Login successful!');
                if (response.role === "admin") navigate('/admin/dashboard');
            } else {
                toast.error('Invalid email or password.');
            }
        } catch (err) {
            toast.error('An error occurred. Please try again.');
        }
    };

    const fakeApiCall = (email, password) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (email === 'admin@test.com' && password === 'admin') {
                    resolve({ success: true, role: "admin" });
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
                    <div className="text-center mb-4">
                        <img src={IMSlogo} alt="IMS Logo" style={{ height: '80px' }} />
                        <h2>Login</h2>
                    </div>
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
                        <div>Don't have an account? <Link to="/register">Register</Link></div>
                        <button type="submit" className="btn btn-primary btn-block mt-3">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
