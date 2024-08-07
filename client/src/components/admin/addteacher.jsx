import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerTeacher } from "../../services/teacherService";
import { getAllSubject } from "../../services/subjectService";

const AddTeacher = () => {
  const [teacher, setTeacher] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    subjectId: "",
    address : "",
    phone : "",
  });

  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await getAllSubject();
      setSubjects(response.data);
    };

    fetchCourses();
  }, []);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTeacher((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(teacher);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(teacher);
    await registerTeacher(teacher);
    setTeacher({ name: "", email: "", password: "", address : "", phone : "",  });
    navigate("/admin/teacherinfo");
  };

  return (
    <div className="container mt-3">
      <form onSubmit={handleSubmit}>
        <h2>Add Teacher</h2>
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={teacher.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            className="form-control"
            name="lastName"
            value={teacher.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={teacher.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={teacher.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Address</label>
          <input
            type="text"
            className="form-control"
            name="address"
            value={teacher.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Subject</label>
          <br />
          <select
            name="subjectId"
            className="form-select"
            onChange={handleChange}
          >
            {subjects.map((subject, key) => {
              return (
                <option key={key} value={subject.id} defaultValue={0}>
                  {subject.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input
            type="tel"
            className="form-control"
            name="phone"
            value={teacher.phone}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Add Teacher
        </button>
      </form>
    </div>
  );
};

export default AddTeacher;
