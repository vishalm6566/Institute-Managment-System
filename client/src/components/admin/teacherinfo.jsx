import React, { useState, useEffect } from "react";
// import './TeacherInfo.css';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const TeacherInfo = () => {
  const navigate = useNavigate();
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = [
        {
          id: 1,
          name: "Gaurav Lodha",
          email: "gaurav.lodha@example.com",
          subject: "Mathematics",
          address: "Pune",
        },
        {
          id: 2,
          name: "Rahul Kapoor",
          email: "rahul.kapoor@example.com",
          subject: "Science",
          address: "Mumbai",
        },
        {
          id: 3,
          name: "Ashutosh Rane",
          email: "ashutosh.rane@example.com",
          subject: "History",
          address: "Nashik",
        },
      ];
      setTeachers(data);
    };
    fetchData();
  }, []);

  const showTeacherDetails = (teacher) => {
    navigate(`/admin/teacher/${teacher.id}`, { state: teacher });
  };

  return (
    <div className="container mt-5">
      <h2>Teacher Information</h2>
      <Link to="/admin/addteacher" className="btn btn-primary" >Add Teacher</Link>
      <table className="table table-hover table-bordered mt-3">
      
        <thead className="thead-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Subject</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {teachers.map((teacher) => (
            <tr key={teacher.id}>
              <th scope="row">{teacher.id}</th>
              <td>{teacher.name}</td>
              <td>{teacher.email}</td>
              <td>{teacher.subject}</td>
              <td>
                {/* <Link to={`/admin/teacher/${teacher.id}`} className="btn btn-primary">
                                    View Profile
                                </Link> */}
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    showTeacherDetails(teacher);
                  }}
                >
                  view Profile
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeacherInfo;
