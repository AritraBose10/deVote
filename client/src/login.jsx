import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/api/users", {
        name: userName,
        email: email,
        password: password,
      });
      console.log(response.data);
      navigate("/voting");
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <label className="label">
          Name:
          <input
            className="input"
            type="text"
            value={userName}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label className="label">
          Email:
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label className="label">
          Password:
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button className="button" type="submit">
          Submit
        </button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
}

export default Login;
