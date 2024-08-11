import React, { useState, useEffect } from "react";
import "../../css/Sidebar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import profileImg from "../Images/Profile.png";

const Sidebar = () => {
  const user = useSelector((state) => state.user.user);
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 992) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    // Set the initial state based on the screen size
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <button className="btn btn-primary sidebar-toggle" onClick={toggleSidebar}>
        {isOpen ? "Close" : "Open"} Menu
      </button>
      <div className={`sidebar d-flex flex-column flex-shrink-0 p-3 bg-light ${isOpen ? "open" : ""}`}>
        <div className="profile-section mb-4">
          <img src={profileImg} alt="alt img" className="profile-img" />
          <h4 className="mt-3">{user.name}</h4>
          <p className="text-muted">Student</p>
        </div>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <Link to="/student/Profile" className="nav-link">
              <b>Profile</b>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/student/feedback" className="nav-link">
              <b>Feedback</b>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/student/marks" className="nav-link">
              <b>Marks</b>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/student/update" className="nav-link">
              <b>Update Info</b>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="logout-section mt-auto">
          <Link className="btn btn-danger" to={"/home"}>
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
