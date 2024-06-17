import React from 'react'
import Sidebar from '../components/admin/sidebar'
import { Outlet } from 'react-router-dom'

function Admin() {
  return (
    <div className="d-flex">
            <Sidebar />
            <div className="container" style={{ marginLeft: '250px' }}>
                <h2 style={{ marginLeft: '250px'}}>Institute Managment System</h2>
                <Outlet />
            </div>
        </div>
  )
}

export default Admin