import React, { useState } from 'react';
import { toast } from 'react-toastify';
import '../../css/feedback.css';
import { useSelector } from 'react-redux';
import { createFeedback } from '../../services/feedbackService';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const StudentFeedback = () => {
    const user = useSelector((state) => state.user.user);
    console.log(user);
    const [student, setStudent] = useState(user);
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [message, setmessage] = useState('');
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        await createFeedback(student.id,message);
        setmessage('');
        toast.success('feedback added successfully!');
        navigate('/student/profile')
    
        
      };

    return (
        <div className="container mt-5">
            <h2>Student Feedback</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group p-1">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        readOnly
                    />
                </div>
                <div className="form-group p-1">
                    <label htmlFor="email">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        readOnly
                    />
                </div>
                <div className="form-group p-1">
                    <label htmlFor="feedback">Feedback</label>
                    <textarea
                        className="form-control"
                        id="feedback"
                        rows="4"
                        placeholder="Enter your feedback"
                        value={message}
                        onChange={(e) => setmessage(e.target.value)}
                        required
                    ></textarea>
                </div>
                <button type="submit" className="btn btn-primary m-1">Submit</button>
            </form>
        </div>
    );
};

export default StudentFeedback;
