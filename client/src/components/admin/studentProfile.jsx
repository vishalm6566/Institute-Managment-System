import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import profileImg from "../Images/Profile.png";

const StudentProfile = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const fetchStudent = async () => {
      setStudent(state);
    };

    fetchStudent();
  }, [id]);

  if (!student) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mt-3">
      <div className="card">
        <img
          src={profileImg}
          alt="Admin Profile"
          className="rounded-circle profile-img m-4"
          style={{float : "right"}}
        />
        <div className="profile-header">
          <div className="profile-info">
            <h3>{student.name}</h3>
            <p>
              <strong>Email:</strong> {student.email}
            </p>
            <p>
              <strong>ID:</strong> {student.id}
            </p>
            <p>
              <strong>Address:</strong> {student.address}
            </p>
            <p>
              <strong>Phone:</strong> {student.phone}
            </p>
            <p>
              <strong>Course:</strong> {student.course.name}
            </p>
            <p>
              <strong>Course Description:</strong> {student.course.description}
            </p>
            <p>
              <strong>
                10<sup>th</sup> Marks:
              </strong>{" "}
              {student.marks10th}
            </p>
            <p>
              <strong>
                12<sup>th</sup> Marks:
              </strong>{" "}
              {student.marks12th}
            </p>
            <p>
              <strong>Graduation Marks:</strong> {student.graduationMarks}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
