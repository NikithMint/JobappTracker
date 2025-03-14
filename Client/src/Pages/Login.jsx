import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css"
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState("");
  const navigate = useNavigate();

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setFormError("All fields are required.");
      return;
    }

    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      alert("No user details found for this email.");
      return;
    }

    if (user.email === email && user.password !== password) {
      alert("Incorrect password. Please try again.");
      return;
    }

    if (user.email === email && user.password === password) {
      setFormError("");
      navigate("/dashboard"); 
    } else {
      setFormError("Invalid email or password.");
    }
  };

  return (
  <div>
    
    <h1 className="title">Job Application Tracker</h1>
    <div className="login-container">
    
    <div className="login-box">
      <h2>Welcome back!</h2>
      <form onSubmit={handleLogin}>
        <div>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          placeholder="youremail@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        </div>
        <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="***********"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        </div>
        {formError && <div className="error-message">{formError}</div>}
        <button type="submit">Sign in</button>
        <p>
        Don&apos;t have an account? <Link to="/signup">Create one</Link>
        </p>
    </form>
  </div>
</div>
</div>
  );
};

export default Login;
