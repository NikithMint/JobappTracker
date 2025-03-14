import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
const Dashboard = () => {

  const [delta,setdelta]=useState([])
  useEffect(() =>{
    axios.get('http://localhost:5111/api/jobs')
    // .then((response) =>console.log(response))
    .then((res) =>setdelta(res.data))
    console.log("useeffect executed")
  },[])


  return (
    <div>
      {
        delta && delta.map((i)=>(
        <div>
         
        <h1>{i.id}</h1>
        <h2>{i.comapny}</h2>
        <h3>{i.position}</h3>
        
        
      
        <br></br>
        <br></br>
        
          
          
          
        </div> 
      ))
      }
      
    </div>
  )
}

export default Dashboard
