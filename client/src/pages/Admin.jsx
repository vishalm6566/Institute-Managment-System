import { useEffect } from "react";
import Sidebar from "../components/admin/sidebar";
import { Outlet, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

function Admin() {
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
          style={{ textAlign: "center" }}
        >
          Institute Managment System
        </h2>
        <div className="px-4">{user && <Outlet />}</div>
      </div>
    </div>
  );
}

export default Admin;
