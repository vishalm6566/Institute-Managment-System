import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllTasks } from '../../services/taskService';

const AllTask = () => {
  const [tasks, setTasks] = useState([]);

  const fetchData = async () => {
    const response = await getAllTasks();
    console.log(response);
    setTasks(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // const showTaskDetails = (task) => {
  //   navigate(`/admin/task/${task.id}`, { state: task });
  // };

  return (
    <div className="container mt-5">
      <h2>Task Information</h2>

      <Link to="/admin/teacherinfo" className="btn btn-primary">
        Add Task
      </Link>

      <table className="table table-responsive table-hover table-bordered mt-3">
        <thead className="thead-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Description</th>
            <th scope="col">Assign Date</th>
            <th scope="col">Due Date</th>
            <th scope="col">Teacher's Name</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <th scope="row">{task.id}</th>
              <td>{task.description}</td>
              <td>{task.createdOn}</td>
              <td>{task.dueDate}</td>
              <td>{task.teacher.name}</td>
              <td>{task.status}</td>
              {/* <td>
                <button className="btn btn-primary" onClick={() => showTaskDetails(task)}>
                  View Details
                </button>
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllTask;
