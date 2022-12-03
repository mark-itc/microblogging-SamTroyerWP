import React from 'react'
import './Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function Navbar() {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      
    <div className="navbar-nav">
      <a className="nav-item nav-link" href="home">Home</a>
      <a className="nav-item nav-link" href="profile">Profile</a>
    </div>
  
    </nav>
  )
}

export default Navbar
