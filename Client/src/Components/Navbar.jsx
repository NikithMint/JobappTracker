import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <nav>
        <img src="https://img.freepik.com/premium-vector/job-search-logo-vector_617585-4085.jpg?ga=GA1.1.807105909.1740740693&semt=ais_hybrid"></img>
        <Link to="/Dashboard"><h1>Applications</h1></Link>
        <Link to="/Home"><h1>Home</h1></Link>
        <Link to="/Profile"><h1>Profile</h1></Link>
        <Link to="/Create"><h1>Create</h1></Link>
        
                
        <button><Link to="/Login">Logout</Link></button>
        </nav>
      
    </div>
  )
}

export default Navbar
