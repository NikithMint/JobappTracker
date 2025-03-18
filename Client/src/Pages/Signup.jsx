import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css"
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return "Please enter a valid email address.";
    }
    return "";
  };

  const validatePassword = (password) => {
    const isValidLength = password.length > 5;
    console.log(isValidLength);
    const hasNumber = /\d/.test(password);
    const hasAlphabet = /[a-zA-Z]/.test(password);

    if (!isValidLength) {
      return "Password must be longer than 5 characters.";
    }
    if (!hasNumber) {
      return "Password must contain at least one number.";
    }
    if (!hasAlphabet) {
      return "Password must contain at least one letter.";
    }
    return "";
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    const errorMessage = validateEmail(newEmail);
    setEmailError(errorMessage);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    const errorMessage = validatePassword(newPassword);
    setPasswordError(errorMessage);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (emailError || passwordError) {
      return;
    }
    const userData = {
      name,
      email,
      password,
    };
    localStorage.setItem("user", JSON.stringify(userData));
    navigate("/login");
  };

  return (
  <div className="signup-total">
    <h1 className="title">Job Application Tracker</h1>  
  <div className="signup-container">
    <div className="signup-box">
      <h2>Keep your job applications organized</h2>
      <form onSubmit={handleSignup}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          placeholder="Enter your name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="youremail@gmail.com"
          value={email}
          onChange={handleEmailChange}
          required
        />
        {emailError && <p className="error-message">{emailError}</p>}
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="**********"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        {passwordError && <p className="error-message">{passwordError}</p>}
      </div>
      <button type="submit">Create Account</button>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
      </form>
    </div>
  </div>
  </div>

  );
};

export default Signup;
