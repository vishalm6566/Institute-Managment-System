import React from 'react'
import Sidebar from '../components/admin/sidebar'
import { Outlet } from 'react-router-dom'

function Admin() {
  return (
    <div style={{display : 'flex', flexDirection : 'row'}}>
        <Sidebar />
        <div>
          <div><h1>Admin Panel</h1></div>
        <Outlet />
        </div>
    </div>
  )
}

export default Admin