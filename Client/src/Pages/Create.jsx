import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import Navbar from '../Components/Navbar';

const Create = () => {
    const [newJobData, setNewJobData] = useState({ company: "", position: "", status: "Pending" });
    const handleCreateJob = () => {
        const newJob = {
          company: newJobData.company,
          position: newJobData.position,
          status: newJobData.status || "Pending",
        };
      
        console.log("Sending data to API:", newJob); // Debugging step
      
        axios
          .post("http://localhost:5111/api/jobs", newJob, {
            headers: { "Content-Type": "application/json" },
          })
          .then((res) => {
            console.log("Response from API:", res.data);
            // setJobs([...jobs, res.data]);
            setNewJobData({ company: "", position: "", status: "Pending" });
          })
          .catch((err) => {
            console.error("Error adding job:", err.response?.data || err.message);
          });
      };
  return (
    <div>
        {/* Add Job Form */}
      <Navbar/>
      <div className="add-job-form">
        <input
          type="text"
          placeholder="Company"
          value={newJobData.company}
          onChange={(e) => setNewJobData({ ...newJobData, company: e.target.value })}
        />
        <input
          type="text"
          placeholder="Position"
          value={newJobData.position}
          onChange={(e) => setNewJobData({ ...newJobData, position: e.target.value })}
        />
        <button onClick={handleCreateJob} className="add-btn">Add Job</button>
      </div>
    

      
    </div>
  )
}

export default Create
