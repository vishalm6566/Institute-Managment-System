import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getAllMarksByStudentId } from '../../services/markService';

const Marks = () => {
    const [marksData, setMarksData] = useState([]);
    const user = useSelector((state) => state.user.user);
    const [student, setStudent] = useState(user);

    useEffect(() => {

        const fetchMarksData = async (studentId) => {
            const response = await getAllMarksByStudentId(studentId);
            setMarksData(response.data);
        };

        fetchMarksData(student.id);
    }, []);

    return (
        <div className="container mt-3">
            <h2>Marks</h2>
            <table className="table table-hover table-bordered mt-3">
                <thead>
                    <tr>
                        <th>Subject</th>
                        <th>Course</th>
                        <th>Total Marks</th>
                        <th>Obtained Marks</th>
                    </tr>
                </thead>
                <tbody>
                    {marksData.map((entry, index) => (
                        <tr key={index}>
                            <td>{entry.subject.name}</td>
                            <td>{entry.course.name}</td>
                            <td>100</td>
                            <td>{entry.marks}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Marks;
