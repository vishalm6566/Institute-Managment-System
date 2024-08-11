import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import profileImg from '../Images/Profile.png'

const TeacherProfile = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const [teacher, setTeacher] = useState(null);
  console.log(state);
  useEffect(() => {
    const fetchTeacher = async () => {
      setTeacher(state);
    };

    fetchTeacher();
  }, [id]);


  if (!teacher) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mt-3">
      <div className="card">
        <img
          src={profileImg}
          alt="Admin Profile"
          className="rounded-circle profile-img m-4"
        />
        <div className="card-body">
          <h3 className="card-title">{teacher.name}</h3>
          <p className="card-text">
            <strong>First Name:</strong> {teacher.name}
          </p><p className="card-text">
            <strong>Last Name:</strong> {teacher.lastName}
          </p>
          <p className="card-text">
            <strong>Email:</strong> {teacher.email}
          </p>
          <p className="card-text">
            <strong>Subject:</strong> {teacher.subject == null ? '' : teacher.subject.name}
          </p>
          <p className="card-text">
            <strong>Address:</strong> {teacher.address}
          </p>
          <p className="card-text">
            <strong>Phone:</strong> {teacher.phone}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeacherProfile;
