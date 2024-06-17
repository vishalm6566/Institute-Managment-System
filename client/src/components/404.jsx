import React from 'react';
// import './NotFound.css';

const NotFound = () => {
    return (
        <div className="container text-center">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h1 className="display-1">404</h1>
                    <h2 className="mb-4">Page Not Found</h2>
                    <p className="lead">
                        Oops! The page you are looking for does not exist. It might have been moved or deleted.
                    </p>
                    <a href="/" className="btn btn-primary mt-4">Go to Home</a>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
