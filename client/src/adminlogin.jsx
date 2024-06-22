import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./adminlogin.css";

function AdminLogin() {
  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/api/login", {
        email: email,
        password: password,
      });
      console.log(response.data);
      localStorage.setItem("token", response.data.token);
      navigate("/voting");
    } catch (err) {
      setError(err.response.data.message || "An error occurred");
    }
  };

  return (
    <>
      <div className="login-container">
        <div className="glass-box">
          <h1 id="heading">Admin Login</h1>
          <form className="form" onSubmit={handleSubmit}>
            <label className="label">
              Username
              <input
                type="text"
                className="input"
                value={userName}
                placeholder="username or email"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </label>
            <label className="label">
              Password
              <input
                type="password"
                className="input"
                value={password}
                placeholder="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </label>
            <button type="submit" id="submit">
              LOGIN
            </button>
            {error && <p className="error">{error}</p>}
          </form>
        </div>
      </div>
    </>
  );
}

export default AdminLogin;
