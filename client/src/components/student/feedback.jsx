import React, { useState } from 'react';
import { toast } from 'react-toastify';
import '../../css/feedback.css';

const StudentFeedback = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [feedback, setFeedback] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        toast.success('Thank you for your feedback!');
        setName('');
        setEmail('');
        setFeedback('');
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
                    />
                </div>
                <div className="form-group p-1">
                    <label htmlFor="feedback">Feedback</label>
                    <textarea
                        className="form-control"
                        id="feedback"
                        rows="4"
                        placeholder="Enter your feedback"
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        required
                    ></textarea>
                </div>
                <button type="submit" className="btn btn-primary m-1">Submit</button>
            </form>
        </div>
    );
};

export default StudentFeedback;
