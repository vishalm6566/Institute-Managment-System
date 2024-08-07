import React, { useState, useEffect } from "react";
import {
  getTaskByTeacherId,
  updateTaskStatus,
} from "../../services/taskService";
import { useSelector } from "react-redux";

const ShowTask = () => {
  const user = useSelector((state) => state.user.user);
  const [tasks, setTasks] = useState([]);
  const [response, setResponse] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getTaskByTeacherId(user.id);
      setTasks(response.data);
    };

    fetchData();
  }, [user.id, response]);

  const updateTask = async (id) => {
    const res = await updateTaskStatus(id);
    console.log(res);
    setResponse(res);
  };

  return (
    <div className="container mt-5">
      <h2>Tasks</h2>

      <table className="table table-responsive table-hover table-bordered mt-3">
        <thead className="thead-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Description</th>
            <th scope="col">Due Date</th>
            <th scope="col">Status</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <th scope="row">{task.id}</th>
              <td>{task.description}</td>
              <td>{task.dueDate}</td>
              <td
                style={{
                  color : task.status == "PENDING" ? "red" : "green",
                }}
              >
                {task.status}
              </td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => updateTask(task.id)}
                >
                  Mark as Completed
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowTask;
