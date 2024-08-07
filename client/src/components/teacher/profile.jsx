import React, { useState } from "react";
import { Link } from "react-router-dom";
import feedbackIcon from "../../components/Images/feedback.png";
import marksIcon from "../../components/Images/marks.png";
import attendanceIcon from "../../components/Images/attendence.png";
import { useSelector } from "react-redux";
import profilephoto from "../Images/Profile.png";
import '../../css/AdminProfile.css'; // Create this CSS file for styling

const TeacherProfile = () => {
  const user = useSelector((state) => state.user.user);
  const [teacher, setTeacher] = useState(user);

  return (
    <div className="teacher-profile-container">
      <div className="profile-header">
        <img
          src={profilephoto}
          alt="Teacher Profile"
          className="profile-img"
        />
        <div className="profile-info">
          <h3>{teacher.name}</h3>
          <p><strong>ID:</strong> {teacher.id}</p>
          <p><strong>Email:</strong> {teacher.email}</p>
          <p><strong>Address:</strong> {teacher.address}</p>
          <p><strong>Phone:</strong> {teacher.phone}</p>
        </div>
      </div>
      <div className="card-container">
        <div className="card-item">
          <img src={feedbackIcon} alt="Feedback Icon" className="card-icon" />
          <h5><Link to="/teacher/profile" className="card-title">Profile</Link></h5>
        </div>
        <div className="card-item">
          <img src={marksIcon} alt="Marks Icon" className="card-icon" />
          <h5><Link to="/teacher/student" className="card-title">Student</Link></h5>
        </div>
        <div className="card-item">
          <img src={attendanceIcon} alt="Attendance Icon" className="card-icon" />
          <h5><Link to="/teacher/showtask" className="card-title">Task</Link></h5>
        </div>
      </div>
    </div>
  );
};

export default TeacherProfile;
