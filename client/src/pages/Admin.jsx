import React, { useContext, useState } from 'react'
import Sidebar from '../components/admin/sidebar'
import { Outlet, useLocation } from 'react-router-dom'


function Admin() {

  return (
    <div className="d-flex">
      <Sidebar />
      <div className="container-fluid p-2" style={{ marginLeft: "250px" }}>
        <h2
          className="border p-3 bg-light rounded"
          style={{ textAlign: "center" }}
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