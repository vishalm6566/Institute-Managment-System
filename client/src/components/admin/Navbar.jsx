// NavBar.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import IMSlogo from "../Images/IMSlogo.jpg";
import '../../css/custom-navbar.css';


const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                {/* Brand logo and name */}
                <Link className="navbar-brand d-flex align-items-center" to="/">
                    <img src={IMSlogo} alt="Institute Logo" style={{ height: '40px', marginRight: '10px' }} />
                    <span className="fw-bold">IMS</span>
                </Link>

               {/* Navbar Toggler for responsive design*/}
                {/*<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>*/}

                {/* Navbar links */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/courses">Courses</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contactus">Contact Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/employees">Employees</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/students">Students</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
