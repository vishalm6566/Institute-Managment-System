import React from 'react';
import '../../css/Sidebar.css'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import profilephoto from '../Images/Profile.png';

const Sidebar = () => {
    const user = useSelector((state) => state.user.user);
    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 bg-light sidebar">
            <div className="profile-section mb-4 text-center">
                <img 
                    src={profilephoto}  
                    alt="Profile" 
                    style={{ 
                        width: "120px",
                        height: "120px",
                        borderRadius: "50%",
                        border: "4px solid #007bff" 
                    }} 
                />
                <h4 className="mt-3">{user.name}</h4>
                <p className="text-muted">Admin</p>
            </div>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                    <Link to="/admin/profile" className="nav-link">
                     <b>Profile</b>   
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/admin/dashboard" className="nav-link">
                       <b>Dashboard</b> 
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/admin/teacherinfo" className="nav-link">
                        <b>Teacher</b>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/admin/studentinfo" className="nav-link">
                        <b>Student</b>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/admin/courseinfo" className="nav-link">
                       <b>Course</b> 
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/admin/alltask" className="nav-link">
                       <b>Task</b> 
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/admin/feedback" className="nav-link">
                       <b>Feedback</b> 
                    </Link>
                </li>
            </ul>
            <hr />
            <div className="logout-section mt-auto text-center">
                <Link className="btn btn-danger" to={"/home"}>Logout</Link>
            </div>
        </div>
    );
};

export default Sidebar;
