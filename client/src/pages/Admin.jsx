import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import Sidebar from '../components/admin/sidebar'

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

  const [admin, setAdmin] = useState(user);

if(admin==null){
  toast.warn("Login into app")
}
  

  return (
    <div className="d-flex">
      {user && <Sidebar />}
      <div className="container-fluid p-2">
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

export default Admin;
