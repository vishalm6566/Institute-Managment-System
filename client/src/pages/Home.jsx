import React from 'react';
import { Link } from 'react-router-dom';
import college from '../components/Images/bgimg.jpg';
import CourseCard from '../components/Images/StudentCard.jpg';
import StudentCard from '../components/Images/StudentCard.jpg';
import NavBar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import '../css/Home.css';

const Home = () => {
    return (
        <>
            <div className="container-fluid p-0" style={{marginLeft : 0}}>
            <NavBar />
                {/*<header className="text-center my-3 header-section">
                    <h1 className="display-3 text-white">Welcome to Institute Management System</h1>
                </header>*/}


                <div className="">
                    <div className="bg-image">
                        <img src={college} alt="Institute Management" style={{width : "100%", height : "100vh", marginTop : "20"}}/>
                        <div className="overlay">
                            <div className="project-name">
                                Institute Management System
                            </div>
                        </div>
                    </div>
                </div>

                <section className="container">
                    <h2 className="text-center mb-4">Overview</h2>
                    <div className="row">
                        <div className="col-md-10 offset-md-1">
                            <p className="lead text-justify">
                                The Institute Management System (IMS) is a comprehensive platform designed to streamline the administrative and academic processes within educational institutions. Our system provides robust tools for course management, student admissions, and academic record tracking, helping to improve operational efficiency and academic performance.
                            </p>
                            <p className="lead text-justify">
                                IMS allows administrators to manage courses, track student admissions, and maintain detailed academic records. Advanced reporting tools offer insights into student performance and institutional metrics, aiding in strategic decision-making and resource allocation.
                            </p>
                            <p className="lead text-justify">
                                Our platform also facilitates communication between faculty, students, and administrative staff, ensuring a collaborative and coordinated approach to education. Notification features keep the community informed about important updates and events.
                            </p>
                            <p className="lead text-justify">
                                With a user-friendly interface and robust security measures, IMS is an essential tool for modern educational institutions, providing the necessary infrastructure to manage and enhance the educational experience effectively.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="container mt-5 mb-5">
                    <h2 className="text-center mb-4">Services</h2>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card text-center shadow-lg">
                                <Link to="/courses"><img src={CourseCard} className="card-img-top" alt="Courses" /></Link>
                                <div className="card-body">
                                    <h5 className="card-title">Courses</h5>
                                    <p className="card-text">View and manage courses here</p>
                                    <Link to="/courses" className="btn btn-primary">Courses</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card text-center shadow-lg">
                                <Link to="/admissions"><img src={CourseCard} className="card-img-top" alt="Admissions" /></Link>
                                <div className="card-body">
                                    <h5 className="card-title">Admissions</h5>
                                    <p className="card-text">Manage student admissions here</p>
                                    <Link to="/admissions" className="btn btn-primary">Admissions</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card text-center shadow-lg">
                                <Link to="/students"><img src={StudentCard} className="card-img-top" alt="Students" /></Link>
                                <div className="card-body">
                                    <h5 className="card-title">Students</h5>
                                    <p className="card-text">View student details here</p>
                                    <Link to="/students" className="btn btn-primary">Students</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
}

export default Home;
