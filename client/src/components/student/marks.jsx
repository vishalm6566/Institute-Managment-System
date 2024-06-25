import React, { useState, useEffect } from 'react';

const Marks = () => {
    const [marksData, setMarksData] = useState([]);

    useEffect(() => {
        // Mock marks data (replace with actual API call)
        const fetchMarksData = async () => {
            // Simulating fetching data
            const mockMarks = [
                { subject: 'Mathematics', marks: 85 },
                { subject: 'Science', marks: 78 },
                { subject: 'English', marks: 92 },
                { subject: 'History', marks: 88 },
                { subject: 'Geography', marks: 75 },
            ];
            setMarksData(mockMarks);
        };

        fetchMarksData();
    }, []);

    return (
        <div className="container mt-3">
            <h2>Marks</h2>
            <table className="table table-hover table-bordered mt-3">
                <thead>
                    <tr>
                        <th>Subject</th>
                        <th>Marks</th>
                    </tr>
                </thead>
                <tbody>
                    {marksData.map((entry, index) => (
                        <tr key={index}>
                            <td>{entry.subject}</td>
                            <td>{entry.marks}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Marks;
