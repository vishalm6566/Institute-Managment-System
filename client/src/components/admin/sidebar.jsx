import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div className='d-flex flex-column m-5 p-5' >
        <Link to="/admin/dashboard" >Dashboard</Link>
        <Link to="/admin/teacherinfo" >Teacher</Link>
        <Link to="/admin/studentinfo" >Student</Link>
    </div>
  )
}

export default Sidebar