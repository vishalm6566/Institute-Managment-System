import React, { useState, useEffect } from "react";
import profile from "../../components/Images/Profile.png";
import feedbackIcon from "../../components/Images/feedback.png";
import marksIcon from "../../components/Images/marks.png";
import attendanceIcon from "../../components/Images/attendence.png";
import { Link } from "react-router-dom";

const StudentProfile = () => {
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const fetchStudent = async () => {
      setStudent({
        id: 1,
        name: "Nitin",
        email: "nitin@gmail.com",
        address: 'Pune',
        phone: '+914567876547'
      });
    };
    fetchStudent();
  }, []);

  if (!student) {
    return <p>Loading...</p>;
  }

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
          <p><strong>ID:</strong> {student.id}</p>
          <p><strong>Email:</strong> {student.email}</p>
          <p><strong>Address:</strong> {student.address}</p>
          <p><strong>Phone:</strong> {student.phone}</p>
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
                    <h5><Link to="/courses" className="card-title">Feedback</Link></h5>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card text-center shadow">
                  <div className="card-body">
                    <img src={marksIcon} alt="Marks Icon" className="mb-2" style={{ width: '50px', height: '50px' }} />
                    <br />
                    <h5><Link to="/admissions" className="card-title">Marks</Link></h5>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card text-center shadow">
                  <div className="card-body">
                    <img src={attendanceIcon} alt="Attendance Icon" className="mb-2" style={{ width: '50px', height: '50px' }} />
                    <br />
                   <h5><Link to="/students" className="card-title">Attendance</Link></h5> 
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
