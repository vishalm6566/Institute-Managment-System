import React, { useState, useEffect } from "react";

const AdminFeedback = () => {
  const [feedbackList, setFeedbackList] = useState([]);

  useEffect(() => {
    const fetchFeedback = async () => {
      const data = [
        {
          id: 1,
          studentName: "Vikram Singh",
          feedback: "Great course!",
          date: "2024-06-15",
        },
        {
          id: 2,
          studentName: "Priya Patel",
          feedback: "The instructor was very helpful.",
          date: "2024-06-14",
        },
        {
          id: 3,
          studentName: "Arjun Mehta",
          feedback: "The assignments were challenging but rewarding.",
          date: "2024-06-13",
        },
      ];
      setFeedbackList(data);
    };
    fetchFeedback();
  }, []);

  return (
    <div className="container mt-5">
      <h2>Student Feedback</h2>
      <table className="table table-hover table-bordered mt-3">
        <thead className="thead-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Student Name</th>
            <th scope="col">Feedback</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody>
          {feedbackList.map((feedback) => (
            <tr key={feedback.id}>
              <th scope="row">{feedback.id}</th>
              <td>{feedback.studentName}</td>
              <td>{feedback.feedback}</td>
              <td>{feedback.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminFeedback;
