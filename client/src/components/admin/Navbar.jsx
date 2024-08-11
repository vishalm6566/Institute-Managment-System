// NavBar.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import IMSlogo from "../Images/IMSlogo.jpg";
import '../../css/navbar.css';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={{width : "100%", boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"}}>
            <div className="container-fluid mainnavbar">
                {/* Brand logo and name */}
                <Link className="navbar-brand d-flex align-items-center profile-image" to="/">
                    <img src={IMSlogo} alt="Institute Logo" style={{ height: '40px', marginRight: '10px' }} />
                    <span className="fw-bold">IMS</span>
                </Link>

                {/* Navbar Toggler for responsive design*/}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navbar links */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contactus">Contact Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login" state={{role : "admin"}} >Admin</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login"  state={{role : "teacher"}} >Teacher</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login"  state={{role : "student"}} >Student</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
