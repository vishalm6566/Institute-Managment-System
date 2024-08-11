import React from 'react';
import '../../css/Dashboard.css'; 
import { Link } from 'react-router-dom';
import profilephoto from '../Images/teacher.jpg';
import studentImg from '../Images/student.jpg'
import feedbackImg from '../Images/feedbackimg.jfif'
import taskImg from '../Images/taskImg.jfif'



const cardData = [
    {
        title: 'Teacher',
        description: 'View and manage users.',
        link: '/admin/teacherinfo',
        image : profilephoto
    },
    {
        title: 'Student',
        description: 'Manage courses offered.',
        link: '/admin/studentinfo',
        image: studentImg
    },
    {
        title: 'Feedback',
        description: 'Generate and view reports.',
        link: '/admin/feedback',
        image : feedbackImg
    },
    {
        title: 'Task',
        description: 'Update system settings.',
        link: '/admin/alltask',
        image : taskImg
    },
];

const Dashboard = () => {
    return (
        <div className="container mt-3">
            <div className="row">
                {cardData.map((card, index) => (
                    <div key={index} className="col-md-4 mb-4">
                        <Link to={card.link} className="card h-40 border text-decoration-none">
                            <img
                                src={card.image}
                                className="card-img-top"
                                alt={`${card.title} icon`}
                                style={{ height: '170px', objectFit: 'cover' }}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{card.title}</h5>
                                <p className="card-text">{card.description}</p>
                                <span className="btn btn-primary">
                                    Go to {card.title}
                                </span>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
