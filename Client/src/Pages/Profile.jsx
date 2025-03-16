import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import Navbar from '../Components/Navbar';
import "./Profile.css"
const Profile = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user"));
    
        if (storedUser) {
          setName(storedUser.name || "");
          setEmail(storedUser.email || "");
          
        }
        console.log("useeffect executed")
      },[]);
  return (
    <div className='profile'>
        <Navbar/>
        <h1>Personal Details</h1>
        <h3>{name}</h3>
        <h3>{email}</h3>
        
    </div>
  )
}

export default Profile
