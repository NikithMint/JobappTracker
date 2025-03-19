import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import "./Profile.css";

const Profile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [skills, setSkills] = useState([]); // Skills array
  const [newSkill, setNewSkill] = useState(""); // Input field for new skill

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser) {
      setName(storedUser.name || "");
      setEmail(storedUser.email || "");
    }
    console.log("useEffect executed");
  }, []);

  // Function to add a new skill
  const addSkill = () => {
    if (newSkill.trim() !== "") {
      setSkills([...skills, newSkill]);
      setNewSkill(""); // Clear input after adding
    }
  };

  // Function to remove a skill
  const removeSkill = (index) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  return (
    <div className="profile">
      <Navbar />
      <br></br>
      <br></br>
      <br></br>
      <div className="profile-card">
        <img
          src="https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-male-user-profile-vector-illustration-isolated-background-man-profile-sign-business-concept_157943-38764.jpg"
          className="profile-img"
          alt="Profile"
        />
        <h1>Personal Details</h1>
        <h3>{name}</h3>
        <h3>{email}</h3>

        {/* Skills Section */}
        <div className="skills-section">
          <h2>Skills</h2>
          <ul>
            {skills.map((skill, index) => (
              <li key={index}>
                {skill}{" "}
                <button className="remove-skill-btn" onClick={() => removeSkill(index)}>
                  ✖
                </button>
              </li>
            ))}
          </ul>
          <div className="skill-input">
            <input
              type="text"
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
              placeholder="Enter a skill..."
            />
            <button onClick={addSkill} className="add-skill-btn">
              Add Skill
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
