import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, Cell, Legend } from "recharts";
import axios from "axios";
import Navbar from "../Components/Navbar";

const Home = () => {
  const [jobData, setJobData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5111/api/jobs") // Replace with your API URL
      .then(response => setJobData(response.data))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  // Group by status
  const statusCounts = jobData.reduce((acc, job) => {
    acc[job.status] = (acc[job.status] || 0) + 1;
    return acc;
  }, {});

  const statusChartData = Object.keys(statusCounts).map(status => ({
    name: status,
    count: statusCounts[status]
  }));

  // Group by company
  const companyCounts = jobData.reduce((acc, job) => {
    acc[job.company] = (acc[job.company] || 0) + 1;
    return acc;
  }, {});

  const companyChartData = Object.keys(companyCounts).map(company => ({
    name: company,
    count: companyCounts[company]
  }));

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <div>
        <Navbar/>
        <br></br>
        <br></br>
    <div style={{ display: "flex", justifyContent: "center", gap: "50px", flexWrap: "wrap" }}>
        
      {/* Bar Chart */}
      <div>
        
        <h3>Job Applications by Status</h3>
        <BarChart width={400} height={300} data={statusChartData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="#8884d8" />
        </BarChart>
      </div>

      {/* Pie Chart */}
      <div>
        <h3>Applications by Company</h3>
        <PieChart width={400} height={300}>
          <Pie data={companyChartData} dataKey="count" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#8884d8" label>
            {companyChartData.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    </div>
    </div>
  );
};

export default Home;
