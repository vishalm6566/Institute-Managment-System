import React, { useState } from 'react';
import '../css/Login.css';
import { toast } from 'react-toastify';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import IMSlogo from '../components/Images/IMSlogo.jpg';
import { login } from '../services/userService';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/userSlice';
import NavBar from '../components/admin/Navbar';
import Footer from '../components/admin/Footer';



const Login = () => {
    const location = useLocation();
    const { role } = location.state;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (email.length === 0) {
            toast.warning('enter email')
        } else if (password.length === 0) {
            toast.warning('enter password')
        }
        else {

            try {
                const response = await login(email, password, role);
                if (response.status === 200) {
                    toast.success('Login successful!');
                    console.log(response);
                    dispatch(setUser(response.data))
                    navigate(`/${role}/profile`);

                }
            } catch (err) {
                console.log(err.response);
                if (err.response && err.response.status === 401)
                    toast.error('Invalid email or password.');
                else toast.error('An error occurred. Please try again.');

            }
        }
    };

    return (
        <div>
            <NavBar />
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
            <Footer />
        </div>

    );
};

export default Login;
