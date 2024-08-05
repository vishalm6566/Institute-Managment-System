import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Attendance = () => {
    const [attendanceData, setAttendanceData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [markedToday, setMarkedToday] = useState(false);

    const handleMarkAttendance = async () => {
        setLoading(true);
        const newAttendance = {
            studentName: 'Harshal Shedge',
            status: 'Present',
        };

        try {
            const response = await fetch('http://localhost:8080/api/attendance', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newAttendance),
            });
            if (response.ok) {
                const data = await response.json();
                if (data) {
                    setAttendanceData([...attendanceData, data]);
                    setMarkedToday(true);
                    toast.success('Attendance marked successfully!');
                } else {
                    toast.info('Attendance already marked for today.');
                }
            }
        } catch (error) {
            toast.error('Error marking attendance.');
            console.error('Error marking attendance:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleFetchAttendance = async () => {
        setLoading(true);
        try {
            const response = await fetch('http://localhost:8080/api/attendance');
            const data = await response.json();
            setAttendanceData(data);

            // Check if attendance is already marked today
            const today = new Date().toISOString().split('T')[0];
            const markedToday = data.some(entry => entry.date === today && entry.studentName === 'Harshal Shedge');
            setMarkedToday(markedToday);
        } catch (error) {
            toast.error('Error fetching attendance data.');
            console.error('Error fetching attendance data:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        handleFetchAttendance();
    }, []);

    return (
        <div className="container mt-3">
            <ToastContainer />
            <h2>Attendance</h2>
            <button className="btn btn-primary mt-2" onClick={handleMarkAttendance} disabled={loading || markedToday}>
                {loading ? 'Marking...' : markedToday ? 'Attendance Marked Today' : 'Mark Attendance'}
            </button>
            <table className="table table-hover table-bordered mt-3">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {attendanceData.map((entry, index) => (
                        <tr key={index}>
                            <td>{entry.studentName}</td>
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
