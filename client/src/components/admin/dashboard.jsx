import React from 'react';
import '../../css/Dashboard.css'; 
import { Link } from 'react-router-dom';

const cardData = [
    {
        title: 'Teacher',
        description: 'View and manage users.',
        link: '/admin/teacherinfo',
        image: 'https://images.unsplash.com/photo-1560439513-74b037a25d84?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        title: 'Student',
        description: 'Manage courses offered.',
        link: '/admin/studentinfo',
        image: 'https://images.unsplash.com/photo-1522211988038-6fcbb8c12c7e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        title: 'Feedback',
        description: 'Generate and view reports.',
        link: '/admin/feedback',
        image: 'https://plus.unsplash.com/premium_photo-1682310566465-61013a549353?q=80&w=1824&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        title: 'Task',
        description: 'Update system settings.',
        link: '/admin/alltask',
        image: 'https://images.unsplash.com/photo-1665808282962-9bd99d7fe3f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
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
