import React, { useState, useEffect } from "react";
import { getAllFeedback } from "../../services/feedbackService";
const AdminFeedback = () => {
  const [feedbackList, setFeedbackList] = useState([]);

  
  useEffect(() => {
    const fetchData = async () => {
      const response = await getAllFeedback();
      console.log(response.data);
      setFeedbackList(response.data);
    };
    fetchData();
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
              <td>{feedback.student.name}</td>
              <td>{feedback.message}</td>
              <td>{feedback.createdOn}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminFeedback;
