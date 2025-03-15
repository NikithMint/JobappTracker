import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Dashboard.css";  // Import CSS file
import Navbar from "../Components/Navbar";

const Dashboard = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5111/api/jobs")
      .then((res) => setJobs(res.data))
      .catch((err) => console.error("Error fetching jobs:", err));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5111/api/jobs/${id}`)
      .then(() => {
        // Update UI by removing the deleted job
        setJobs((prevJobs) => prevJobs.filter((job) => job.id !== id));
      })
      .catch((err) => console.error("Error deleting job:", err));
  };

  return (
    
    <div className="container">
      <Navbar/>
      <h2>Job Applications</h2>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Company</th>
            <th>Position</th>
            <th>Status</th>
            <th>Applied Date</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job) => (
            <tr key={job.id}>
              <td>{job.id}</td>
              <td>{job.company}</td>
              <td>{job.position}</td>
              <td>{job.status}</td>
              <td>{new Date(job.appliedDate).toLocaleDateString()}</td>
              <td>
                <button onClick={() => handleDelete(job.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
