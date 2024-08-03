import React, { useState, useEffect } from "react";
// import './StudentInfo.css';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { getAllStudents } from "../../services/student";



const StudentInfo = () => {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();
  
  const fetchData = async () => {
    const response = await getAllStudents();
    setStudents(response.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const showStudentDetails = (student) => {
    navigate(`/admin/student/${student.id}`, { state : student})
  };

  return (
    <div className="container mt-5">
      <h2>Student Information</h2>
 
     <Link to="/admin/addstudent" className="btn btn-primary" >Add Student</Link>
      <table className="table table-responsive table-hover table-bordered mt-3">
        <thead className="thead-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Course</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <th scope="row">{student.id}</th>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.course.name}</td>
              <td>
                {/* <Link
                  to={`/admin/student/${student.id}`}
                  className="btn btn-primary"
                >
                  View Full Profile
                </Link> */}
                <button className="btn btn-primary" onClick={()=>{showStudentDetails(student)}}>
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

export default StudentInfo;
