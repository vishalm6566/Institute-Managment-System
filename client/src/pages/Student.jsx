import React from 'react'
import Sidebar from '../components/student/sidebar'
import { Outlet } from 'react-router-dom'

function Student() {
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

export default Student