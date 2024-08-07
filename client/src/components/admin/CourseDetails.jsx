import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getAllSubjects } from "../../services/subjectService";

const CourseDetails = () => {
  const { state: course } = useLocation();
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
        
        const response = await getAllSubjects(course.id);
        setSubjects(response.data);
    };

    fetchCourses();
  }, []);

  return (
    <div className="container mt">
      <h2>{course.name}</h2>
      <p>Description : {course.description}</p>
      <br />
      <h3>Subjects</h3>
      <table className="table table-responsive table-hover table-striped table-bordered mt-3">
        <thead className="thead-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Course</th>
          </tr>
        </thead>
        <tbody>
          {subjects.map((subject) => (
            <tr key={subject.id}>
              <th scope="row">{subject.id}</th>
              <td>{subject.name}</td>
              <td>{course.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CourseDetails;
