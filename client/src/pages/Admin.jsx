import { useSelector } from 'react-redux';
import Sidebar from '../components/admin/sidebar'
import { Outlet, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { toast } from 'react-toastify';


function Admin() {

  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate()
  console.log(user);
  const [admin, setAdmin] = useState(user);

if(admin==null){
  toast.warn("Login into app")
}
  

  return (
    <div className="d-flex">
      <Sidebar />
      <div className="container-fluid p-2" style={{ marginLeft: "250px", backgroundColor : "#f5f7fa", minHeight : "100vh" }}>
        <h2
          className="border p-3 bg-light rounded"
          style={{ textAlign: "center", color :"white", backgroundImage: "linear-gradient(to bottom right ,white,black)"
          }}
        >
          Institute Managment System
        </h2>
        <div className="px-4">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Admin;