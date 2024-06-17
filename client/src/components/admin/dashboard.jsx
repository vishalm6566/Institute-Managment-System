import React from 'react';
import '../../css/Dashboard.css'; 
import { Link } from 'react-router-dom';

const cardData = [
    {
        title: 'Dashboard',
        description: 'Overview of your activities.',
        link: '/admin/dashboard',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyR10ZMAeHFI1lONQ_L1B1a0OrAnXqEYA7g7DR1mL68gUPDh0zpFiGd6KOZZ3mj5e15Q0&usqp=CAU'
    },
    {
        title: 'Teacher',
        description: 'View and manage users.',
        link: '/admin/teacherinfo',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyR10ZMAeHFI1lONQ_L1B1a0OrAnXqEYA7g7DR1mL68gUPDh0zpFiGd6KOZZ3mj5e15Q0&usqp=CAU'
    },
    {
        title: 'Student',
        description: 'Manage courses offered.',
        link: '/admin/studentinfo',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyR10ZMAeHFI1lONQ_L1B1a0OrAnXqEYA7g7DR1mL68gUPDh0zpFiGd6KOZZ3mj5e15Q0&usqp=CAU'
    },
    {
        title: 'Feedback',
        description: 'Generate and view reports.',
        link: '/admin/dashboard',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyR10ZMAeHFI1lONQ_L1B1a0OrAnXqEYA7g7DR1mL68gUPDh0zpFiGd6KOZZ3mj5e15Q0&usqp=CAU'
    },
    {
        title: 'Task',
        description: 'Update system settings.',
        link: '/admin/dashboard',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyR10ZMAeHFI1lONQ_L1B1a0OrAnXqEYA7g7DR1mL68gUPDh0zpFiGd6KOZZ3mj5e15Q0&usqp=CAU'
    },
];

const Dashboard = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                {cardData.map((card, index) => (
                    <div key={index} className="col-md-4 mb-4">
                        <div className="card h-100">
                            <img
                                src={card.image}
                                className="card-img-top"
                                alt={`${card.title} icon`}
                                style={{ height: '170px', objectFit: 'cover' }}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{card.title}</h5>
                                <p className="card-text">{card.description}</p>
                                <Link to={card.link} className="btn btn-primary">
                                    Go to {card.title}
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
