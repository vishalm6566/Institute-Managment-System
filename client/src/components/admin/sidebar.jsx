import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div>
        <Link to="/admin/dashboard" >Dashboard</Link>
        <Link to="/admin/teacherinfo" >Teacher</Link>
    </div>
  )
}

export default Sidebar