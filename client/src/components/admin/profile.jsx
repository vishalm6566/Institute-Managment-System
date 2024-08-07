import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import feedbackIcon from "../../components/Images/feedback.png";
import marksIcon from "../../components/Images/marks.png";
import attendanceIcon from "../../components/Images/attendence.png";
import { useSelector } from "react-redux";
import profilephoto from '../Images/Profile.png'
import '../../css/AdminProfile.css'

const AdminProfile = () => {
  const user = useSelector((state) => state.user.user);
  console.log(user);
  const [admin, setAdmin] = useState(user);

  return (
    <div className="admin-profile-container">
      <div className="profile-header">
        <img
          src={profilephoto}
          alt="admin Profile"
          className="profile-img"
        />
        <div className="profile-info">
          <h3>{admin.name}</h3>
          <p><strong>Email:</strong> {admin.email}</p>
          <p><strong>ID:</strong> {admin.id}</p>
          <p><strong>Address:</strong> {admin.address}</p>
          <p><strong>Phone:</strong> {admin.phone}</p>
        </div>
      </div>
      <div className="card-container">
        <div className="card-item">
          <img src={feedbackIcon} alt="Feedback Icon" className="card-icon" />
          <h5><Link to="/admin/dashboard" className="card-title">Dashboard</Link></h5>
        </div>
        <div className="card-item">
          <img src={feedbackIcon} alt="Feedback Icon" className="card-icon" />
          <h5><Link to="/admin/profile" className="card-title">Profile</Link></h5>
        </div>
        <div className="card-item">
          <img src={marksIcon} alt="Marks Icon" className="card-icon" />
          <h5><Link to="/admin/studentinfo" className="card-title">Student</Link></h5>
        </div>
        <div className="card-item">
          <img src={attendanceIcon} alt="Attendance Icon" className="card-icon" />
          <h5><Link to="/admin/alltask" className="card-title">Task</Link></h5>
        </div>
        <div className="card-item">
          <img src={attendanceIcon} alt="Attendance Icon" className="card-icon" />
          <h5><Link to="/admin/teacher" className="card-title">Teacher</Link></h5>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
