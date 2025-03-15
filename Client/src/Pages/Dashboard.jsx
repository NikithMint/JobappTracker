import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Dashboard.css";

const Dashboard = () => {
  const [jobs, setJobs] = useState([]);
  const [editingJob, setEditingJob] = useState(null);
  const [updatedJob, setUpdatedJob] = useState({});
  const [newJobData, setNewJobData] = useState({ company: "", position: "", status: "Pending" });


  // Fetch jobs from API
  useEffect(() => {
    axios
      .get("http://localhost:5111/api/jobs")
      .then((res) => setJobs(res.data))
      .catch((err) => console.error("Error fetching jobs:", err));
  }, []);

  // Handle Delete
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5111/api/jobs/${id}`)
      .then(() => {
        setJobs((prevJobs) => prevJobs.filter((job) => job.id !== id));
      })
      .catch((err) => console.error("Error deleting job:", err));
  };

  // Handle Edit
  const handleEdit = (job) => {
    setEditingJob(job.id);
    setUpdatedJob({ ...job });
  };

  // Handle Input Change for Edit
  const handleChange = (e) => {
    setUpdatedJob({ ...updatedJob, [e.target.name]: e.target.value });
  };

  // Handle Update Job
  const handleUpdate = () => {
    axios
      .put(`http://localhost:5111/api/jobs/${editingJob}`, updatedJob)
      .then(() => {
        setJobs((prevJobs) =>
          prevJobs.map((job) => (job.id === editingJob ? updatedJob : job))
        );
        setEditingJob(null);
      })
      .catch((err) => console.error("Error updating job:", err));
  };




  // const handleCreateJob = () => {
  //   const newJob = {
  //     company: newJobData.company,
  //     position: newJobData.position,
  //     status: newJobData.status || "Pending",
  //   };
  
  //   console.log("Sending data to API:", newJob); // Debugging step
  
  //   axios
  //     .post("http://localhost:5111/api/jobs", newJob, {
  //       headers: { "Content-Type": "application/json" },
  //     })
  //     .then((res) => {
  //       console.log("Response from API:", res.data);
  //       setJobs([...jobs, res.data]);
  //       setNewJobData({ company: "", position: "", status: "Pending" });
  //     })
  //     .catch((err) => {
  //       console.error("Error adding job:", err.response?.data || err.message);
  //     });
  // };

  return (
    <div className="container">
      <h2>Job Applications</h2>
       

     

      {/* Jobs Table */}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Company</th>
            <th>Position</th>
            <th>Status</th>
            <th>Applied Date</th>
            
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job, index) => (
            <tr key={job.id}>
              {editingJob === job.id ? (
                <>
                  <td>{index + 1}</td>
                  <td>{job.company}</td>
                  <td>{job.position}</td>
                  <td>
                    <select name="status" value={updatedJob.status} onChange={handleChange}>
                      <option value="Pending">Pending</option>
                      <option value="Applied">Applied</option>
                      <option value="Interview Scheduled">Interview Scheduled</option>
                      <option value="Rejected">Rejected</option>
                    </select>
                  </td>
                  <td>{new Date(job.appliedDate).toLocaleDateString()}</td>
                  
                  <td>
                    <button onClick={handleUpdate} className="save-btn">Save</button>
                    <button onClick={() => setEditingJob(null)} className="cancel-btn">Cancel</button>
                  </td>
                </>
              ) : (
                <>
                  <td>{index + 1}</td>
                  <td>{job.company}</td>
                  <td>{job.position}</td>
                  <td>{job.status}</td>
                  <td>{new Date(job.appliedDate).toLocaleDateString()}</td>
                  
                  <td>
                    <button onClick={() => handleEdit(job)} className="edit-btn">Edit</button>
                    <button onClick={() => handleDelete(job.id)} className="delete-btn">Delete</button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      {/* Add Job Form */}
      {/* <br></br>
      <br></br>
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
      </div> */}
    </div>
  );
};

export default Dashboard;
