import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAllCourse } from "../../services/courseService";

const Course = () => {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourses = async () => {
      console.log("course info useffect");

        const response = await getAllCourse();
        setCourses(response.data);
    };

    fetchCourses();
  }, []);

  const viewCourseDetails = (course) => {
    navigate(`/admin/course/${course.id}`, { state: course });
  };

  return (
    <div className="container mt">
      <h2>Available Courses</h2>
      <table className="table table-responsive table-hover table-striped table-bordered mt-3">
        <thead className="thead-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.id}>
              <th scope="row">{course.id}</th>
              <td>{course.name}</td>
              <td>{course.description}</td>
              <td>
                <button className="btn btn-primary" onClick={() => viewCourseDetails(course)}>
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Course;
