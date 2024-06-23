import React from 'react'
import Sidebar from '../components/student/sidebar'
import { Outlet } from 'react-router-dom'

function Student() {
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

export default Student