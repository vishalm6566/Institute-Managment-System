import React, { useState } from "react";
import { Link } from "react-router-dom";
import feedbackIcon from "../../components/Images/feedback.png";
import marksIcon from "../../components/Images/marks.png";
import attendanceIcon from "../../components/Images/attendence.png";
import { useSelector } from "react-redux";
import profilephoto from '../../components/Images/Profile.png';
import '../../css/AdminProfile.css';

const StudentProfile = () => {
  const user = useSelector((state) => state.user.user);
  console.log(user);
  const [student, setStudent] = useState(user);

  return (
    <div className="admin-profile-container">
      <div className="profile-header">
        <img
          src={profilephoto}
          alt="Student Profile"
          className="profile-img"
        />
        <div className="profile-info">
          <h3>{student.name}</h3>
          <p><strong>Email:</strong> {student.email}</p>
          <p><strong>ID:</strong> {student.id}</p>
          <p><strong>Address:</strong> {student.address}</p>
          <p><strong>Phone:</strong> {student.phone}</p>
          <p><strong>Course:</strong> {student.course.name}</p>
          <p><strong>Course Description:</strong> {student.course.description}</p>
          <p><strong>10<sup>th</sup> Marks:</strong> {student.marks10th}</p>
          <p><strong>12<sup>th</sup> Marks:</strong> {student.marks12th}</p>
          <p><strong>Graduation Marks:</strong> {student.graduationMarks}</p>
        </div>
      </div>
      <div className="card-container">
        <div className="card-item">
          <img src={feedbackIcon} alt="Feedback Icon" className="card-icon" />
          <h5><Link to="/student/feedback" className="card-title">Feedback</Link></h5>
        </div>
        <div className="card-item">
          <img src={marksIcon} alt="Marks Icon" className="card-icon" />
          <h5><Link to="/student/marks" className="card-title">Marks</Link></h5>
        </div>
        <div className="card-item">
          <img src={attendanceIcon} alt="Attendance Icon" className="card-icon" />
          <h5><Link to="/student/attendance" className="card-title">Attendance</Link></h5>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
