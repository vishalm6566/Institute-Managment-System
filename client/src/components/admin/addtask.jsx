import React, { useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../css/AddTask.css';
import { registerTask } from '../../services/taskService';

const AddTask = () => {
  const { id } = useParams();
  const location = useLocation();
  const teacher = location.state;
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await registerTask({ teacherId: id, description, dueDate });
    setDescription('');
    setDueDate(null);
    toast.success('Task added successfully!');

    navigate('/admin/alltask');
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="border p-3 mb-5 bg-white rounded">
            <h2 className="text-left">Add Task</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Teacher Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={teacher.name}
                  required
                  readonly
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                  className="form-control"
                  id="description"
                  rows="3"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                ></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="dueDate">Due Date</label>
                <input
                  type="date"
                  className="form-control"
                  id="dueDate"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary btn-block">
                Add Task
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* <ToastContainer /> */}
    </div>
  );
};

export default AddTask;
