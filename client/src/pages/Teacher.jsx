import React from 'react'
import Sidebar from '../components/admin/sidebar'
import { Outlet } from 'react-router-dom'

function Teacher() {
  return (
    <div className="d-flex">
            <Sidebar />
            <div className="container-fluid p-2" style={{ marginLeft: '250px'}}>
                <h2 style={{textAlign : 'center'}}>Institute Managment System</h2>
                <Outlet />
            </div>
        </div>
  )
}

export default Teacher