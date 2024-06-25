import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const AllTask = () => {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      // Simulated data fetching (replace with actual API call)
      const data = [
        {
          id: 1,
          taskName: 'Complete Assignment',
          description: 'Complete the assignment on React components.',
          dueDate: '2024-07-05',
          priority: 'High',
          teacherName: 'John Doe',
        },
        {
          id: 2,
          taskName: 'Study for Exam',
          description: 'Prepare for the upcoming exam on JavaScript.',
          dueDate: '2024-07-10',
          priority: 'Medium',
          teacherName: 'Jane Smith',
        },
        {
          id: 3,
          taskName: 'Submit Project Proposal',
          description: 'Submit the project proposal to the supervisor.',
          dueDate: '2024-07-15',
          priority: 'Low',
          teacherName: 'Michael Johnson',
        },
      ];
      setTasks(data);
    };
    fetchData();
  }, []);

  const showTaskDetails = (task) => {
    navigate(`/admin/task/${task.id}`, { state: task });
  };

  return (
    <div className="container mt-5">
      <h2>Task Information</h2>

      <Link to="/admin/addtask" className="btn btn-primary">
        Add Task
      </Link>

      <table className="table table-responsive table-hover table-bordered mt-3">
        <thead className="thead-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Task Name</th>
            <th scope="col">Description</th>
            <th scope="col">Due Date</th>
            <th scope="col">Priority</th>
            <th scope="col">Teacher's Name</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <th scope="row">{task.id}</th>
              <td>{task.taskName}</td>
              <td>{task.description}</td>
              <td>{task.dueDate}</td>
              <td>{task.priority}</td>
              <td>{task.teacherName}</td>
              <td>
                <button className="btn btn-primary" onClick={() => showTaskDetails(task)}>
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

export default AllTask;
