import instituteImage from "../components/Images/instituteImage.jpg";

import { Link } from "react-router-dom";

import AdmissionCard from "../components/Images/AdmissionCard.jpg";
import CourseCard from "../components/Images/StudentCard.jpg"
import StudentCard from  "../components/Images/StudentCard.jpg"
import NavBar from "../components/admin/Navbar"
import Footer from "../components/admin/Footer";


function Home() {
    return (
        <>
             <NavBar /> 
            <div className="container-fluid">
                <header>
                    <h1>Institute Management System</h1>
                </header>

                <div className="row mb-3">
                    <div className="col-md-12">
                        <div className="card text-center">
                            <Link to="/courses"><img src={instituteImage} className="card-img-top" alt="Institute Management" /></Link>
                        </div>
                    </div>
                </div>
                
                <h2>Overview</h2>
                <p className="justified">
                    The Institute Management System (IMS) is a comprehensive platform designed to streamline the administrative and academic processes within educational institutions. Our system provides robust tools for course management, student admissions, and academic record tracking, helping to improve operational efficiency and academic performance.
                </p>
                <p className="justified">
                    IMS allows administrators to manage courses, track student admissions, and maintain detailed academic records. Advanced reporting tools offer insights into student performance and institutional metrics, aiding in strategic decision-making and resource allocation.
                </p>
                <p className="justified">
                    Our platform also facilitates communication between faculty, students, and administrative staff, ensuring a collaborative and coordinated approach to education. Notification features keep the community informed about important updates and events.
                </p>
                <p className="justified">
                    With a user-friendly interface and robust security measures, IMS is an essential tool for modern educational institutions, providing the necessary infrastructure to manage and enhance the educational experience effectively.
                </p>

                <h2>Services</h2>
                <div className="row mt-2">
                    <div className="col-md-4 p-5">
                        <div className="card text-center">
                            <Link to="/courses"><img src={CourseCard} className="card-img-top" alt="Courses" /></Link>
                            <div className="card-body">
                                <h5 className="card-title text-center">Courses</h5>
                                <p className="card-text">View and manage courses here</p>
                                <Link to="/courses" className="btn btn-primary">Courses</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 p-5">
                        <div className="card text-center">
                            <Link to="/admissions"><img src={AdmissionCard} className="card-img-top" alt="Admissions" /></Link>
                            <div className="card-body">
                                <h5 className="card-title text-center">Admissions</h5>
                                <p className="card-text">Manage student admissions here</p>
                                <Link to="/admissions" className="btn btn-primary">Admissions</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 p-5">
                        <div className="card text-center">
                            <Link to="/students"><img src={StudentCard} className="card-img-top" alt="Students" /></Link>
                            <div className="card-body">
                                <h5 className="card-title text-center">Students</h5>
                                <p className="card-text">View student details here</p>
                                <Link to="/students" className="btn btn-primary">Students</Link>
                            </div>
                        </div>
                    </div>
                </div>

                
            </div>
            <Footer />
          
        </>
    );
}

export default Home;
