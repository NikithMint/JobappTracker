import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                
                <h1>About Us</h1>
                <p>
                The Job Tracker Application is designed to help users organize, track, and manage their job applications efficiently. Whether you’re 
                applying to multiple positions, scheduling interviews, or following up with recruiters, this application provides a structured way to stay on top of your job search.
                </p>
                
                

            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li></li>
                    <li>Privacy policy</li>
                </ul>

            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91 9704623593</li>
                    <li>Contact : mintnikith@gmail.com</li>
                </ul>

            </div>
        </div>
        
        <p> Copyright 2024 Ⓒ jobtracker.com - All Right Reserved</p>

      
    </div>
  )
}

export default Footer