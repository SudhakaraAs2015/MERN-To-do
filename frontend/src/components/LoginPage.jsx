import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "Sudha" && password === "Sudha123") {
      navigate("/todos");
    } else {
      alert("Invalid credentials");
    }
  };
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <br />
          <h2>Login</h2>
          <div className="form-group">
            <br />
            <label>Username</label>
            <input
              type="text"
              name="username"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <br />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
          </div>
          <button className="btn btn-primary" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
