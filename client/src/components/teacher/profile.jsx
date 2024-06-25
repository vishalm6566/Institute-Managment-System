import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import feedbackIcon from "../../components/Images/feedback.png";
import marksIcon from "../../components/Images/marks.png";
import attendanceIcon from "../../components/Images/attendence.png";

const TeacherProfile = () => {
  const [teacher, setTeacher] = useState(null);

  useEffect(() => {
    const fetchTeacher = async () => {
      setTeacher((prev) => ({
        ...prev,
        id: 101,
        name: "Ashutosh Rane",
        email: "ashutosh.rane@example.com",
        address: "Pune",
        phone: "+9194858676",
        image: "teacher_profile.png",
      }));
    };

    fetchTeacher();
  }, []);

  if (!teacher) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mt-3">
      <div className="d-flex justify-content-end pr-3">
        <img
          src="data:image/png;base64,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"
          alt="Teacher Profile"
          className="rounded-circle profile-img"
          style={{ width: "100px", height: "100px", marginLeft: "-10px" }}
        />
      </div>
        <hr />
      <div className="mt-4">
        <h3>{teacher.name}</h3>
        <p>
          <strong>Email:</strong> {teacher.email}
        </p>
        <p>
          <strong>ID:</strong> {teacher.id}
        </p>
        <p>
          <strong>Address:</strong> {teacher.address}
        </p>
        <p>
          <strong>Phone:</strong> {teacher.phone}
        </p>
      </div>
    <hr />
      <div className="row mt-1">
          <section className="container mt-5 mb-5">
            <div className="row">
              <div className="col-md-4">
                <div className="card text-center shadow">
                  <div className="card-body">
                    <img src={feedbackIcon} alt="Feedback Icon" className="mb-2" style={{ width: '50px', height: '50px' }} />
                    <br />
                    <h5><Link to="/teacher/profile" className="card-title">profile</Link></h5>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card text-center shadow">
                  <div className="card-body">
                    <img src={marksIcon} alt="Marks Icon" className="mb-2" style={{ width: '50px', height: '50px' }} />
                    <br />
                    <h5><Link to="/teacher/student" className="card-title">Student</Link></h5>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card text-center shadow">
                  <div className="card-body">
                    <img src={attendanceIcon} alt="Attendance Icon" className="mb-2" style={{ width: '50px', height: '50px' }} />
                    <br />
                   <h5><Link to="/teacher/showtask" className="card-title">Task</Link></h5> 
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
    </div>
  );
};

export default TeacherProfile;
