import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { updateStudent } from "../../services/studentService";
import { setUser } from "../../redux/userSlice";
const UpdateStudent = () => {
    const user = useSelector((state) => state.user.user);
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const [student, setStudent] = useState(user);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStudent((prevStudent) => ({
            ...prevStudent,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await updateStudent(student);
        dispatch(setUser(response.data))
        toast.success("Student updated successfully")
        navigate("/student/profile");
    };

    return (
        <div className="container mt-5">
            <h2>Update Student Information</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">First Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={student.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        name="lastName"
                        value={student.lastName}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={student.email}
                        onChange={handleChange}
                        readOnly
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        value={student.password}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input
                        type="text"
                        className="form-control"
                        id="address"
                        name="address"
                        value={student.address}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                        type="tel"
                        className="form-control"
                        id="phone"
                        name="phone"
                        value={student.phone}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="marks10th">Marks 10th</label>
                    <input
                        type="number"
                        className="form-control"
                        id="marks10th"
                        name="marks10th"
                        value={student.marks10th}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="marks12th">Marks 12th</label>
                    <input
                        type="number"
                        className="form-control"
                        id="marks12th"
                        name="marks12th"
                        value={student.marks12th}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="graduationMarks">Graduation Marks</label>
                    <input
                        type="number"
                        className="form-control"
                        id="graduationMarks"
                        name="graduationMarks"
                        value={student.graduationMarks}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary mt-3">Update</button>
            </form>
        </div>
    );
};

export default UpdateStudent;