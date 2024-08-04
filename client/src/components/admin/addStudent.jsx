import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerStudent } from '../../services/studentService';

const AddStudent = (s) => {
  const [student, setStudent] = useState({
    name: '',
    email: '',
    password: '',
    courseId : ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(student);
    await registerStudent(student);
    setStudent({ name: '', email: '', password: ''});
    navigate('/admin/studentinfo');
  };

  return (
    <div className="container mt-3">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={student.name}
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
            value={student.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="text"
            className="form-control"
            name="password"
            value={student.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
        <label>Course</label>
          <select className="form-select" aria-label="Default select example" name='courseId' onChange={handleChange}>
            <option selected>select course</option>
            <option value="1">DAC</option>
            <option value="2">DMC</option>
            <option value="3">DBDA</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Add Student
        </button>
      </form>
    </div>
  );
};

export default AddStudent;
