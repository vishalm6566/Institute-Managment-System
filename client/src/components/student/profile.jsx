import React, { useState } from "react";
import profile from "../../components/Images/Profile.png";
import feedbackIcon from "../../components/Images/feedback.png";
import marksIcon from "../../components/Images/marks.png";
import attendanceIcon from "../../components/Images/attendence.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const StudentProfile = () => {
  const user = useSelector((state) => state.user.user);
  console.log(user);
  const [student, setStudent] = useState(user);

  // if (!student) {
  //   return <p>Loading...</p>;
  // }

  return (
    <div className="d-flex">
      <div className="container mt-5" style={{ flex: 1 }}>
        <div className="text-center">
          <img
            src={profile}
            alt="Student Profile"
            className="rounded-circle mb-4"
            style={{ width: '150px', height: '150px', objectFit: 'cover' }}
          />
       
          <h3>{student.name}</h3>
          <hr />
        </div>
        <div className="mt-4">
          <p><strong>ID :</strong> {student.id}</p>
          <p><strong>FirstName :</strong> {student.name}</p>
          <p><strong>LastName :</strong> {student.lastName}</p>
          <p><strong>Email :</strong> {student.email}</p>
          <p><strong>Course :</strong> {student.course.name}</p>
          
        </div>
        <br />
        <br />
        <hr />
        <div className="fw-bold">
          Other Information
        </div>
        <div className="mt-4">
        <p><strong>Address :</strong> {student.address}</p>
        <p><strong>Phone :</strong> {student.phone}</p>
        <p><strong>Course Dec :</strong> {student.course.description}</p>
        <p><strong>10 <sup>th</sup> Marks : </strong> {student.marks10th}</p>
        <p><strong>12 <sup>th</sup> Marks : </strong> {student.marks12th}</p>
        <p><strong>Graduation Marks : </strong> {student.graduationMarks}</p>
        </div>
        <br />
        <br />
        <hr />
        <div className="row mt-1">
          <section className="container mt-5 mb-5">
            <div className="row">
              <div className="col-md-4">
                <div className="card text-center shadow">
                  <div className="card-body">
                    <img src={feedbackIcon} alt="Feedback Icon" className="mb-2" style={{ width: '50px', height: '50px' }} />
                    <br />
                    <h5><Link to="/student/feedback" className="card-title">Feedback</Link></h5>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card text-center shadow">
                  <div className="card-body">
                    <img src={marksIcon} alt="Marks Icon" className="mb-2" style={{ width: '50px', height: '50px' }} />
                    <br />
                    <h5><Link to="/student/marks" className="card-title">Marks</Link></h5>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card text-center shadow">
                  <div className="card-body">
                    <img src={attendanceIcon} alt="Attendance Icon" className="mb-2" style={{ width: '50px', height: '50px' }} />
                    <br />
                   <h5><Link to="/student/attendance" className="card-title">Attendance</Link></h5> 
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
