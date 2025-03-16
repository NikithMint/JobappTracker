import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "../Layout";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import DashboardLayout from "../DashboardLayout";
import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Create from "./Pages/Create";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="Home" element={<Home/>}/>
          <Route path="Profile" element={<Profile/>}/>
          <Route path="Create" element={<Create/>}/>
        </Route>
        <Route path="Dashboard" element={<DashboardLayout />}>
          {/* <Route path="/Home" element={<Home/>}/> */}
          <Route index element={<Dashboard />} />
          <Route path="Dashboard" element={<Dashboard />} />
          {/* <Route path="/Profile" element={<Profile/>}/> */}
        </Route>
      </Routes>
    </Router>
  );
}
export default App;
