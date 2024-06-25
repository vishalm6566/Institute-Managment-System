import React, { useState, useEffect } from 'react';

const Attendance = () => {
    const [attendanceData, setAttendanceData] = useState([]);

    useEffect(() => {
        // Mock attendance data (replace with actual API call)
        const fetchAttendanceData = async () => {
            // Simulating fetching data
            const mockAttendance = [
                { date: '2024-06-01', status: 'Present' ,name:"harshal shedge" },
                { date: '2024-06-02', status: 'Absent' ,name:"harshal shedge" },
                { date: '2024-06-03', status: 'Present' ,name:"harshal shedge" },
                { date: '2024-06-04', status: 'Present' ,name:"harshal shedge"},
                { date: '2024-06-05', status: 'Absent' ,name:"harshal shedge"},
            ];
            setAttendanceData(mockAttendance);
        };

        fetchAttendanceData();
    }, []);

    return (
        <div className="container mt-3">
            <h2>Attendance</h2>
            <table className="table table-hover table-bordered mt-3">
                <thead>
                    <tr>
                        <th>name</th>
                        <th>date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {attendanceData.map((entry, index) => (
                        <tr key={index}>
                            <td>{entry.name}</td>
                            <td>{entry.date}</td>
                            <td>{entry.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Attendance;
