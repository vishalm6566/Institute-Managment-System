import React, { useEffect } from "react";
import Sidebar from "../components/student/sidebar";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

function Student() {
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();

  useEffect(() => {
    const func = () => {
      if (user == null) {
        toast.warn("Login Here");
        navigate("/home");
      }
    };
    func();
  });

  return (
    <div className="d-flex">
      {user && <Sidebar />}
      <div className="container-fluid p-2" style={{ marginLeft: "250px" }}>
        <h2
          className="border p-3 bg-light rounded"
          style={{ textAlign: "center", color :"white", backgroundImage: "linear-gradient(to bottom right ,white,black)"
          }}
        >
          Institute Managment System
        </h2>
        <div className="px-4">{user && <Outlet />}</div>
      </div>
    </div>
  );
}

export default Student;
