import { useNavigate } from "react-router-dom";
import "./VotingSystem.css";

const Landing = () => {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/voting");
  }
  function handleClick2() {
    navigate("/admin");
  }
  return (
    <>
      <div className="app">
        <div className="content">
          <div className="logo">
            <img src="./src/assets/logo.png" alt="logo" className="logo" />
          </div>
          <h1>Decentralized Voting System</h1>
          <p>
            A voting system that is built on the Internet Computer blockchain.
          </p>
          <p className="author">Made by Aritra</p>
          <button className="cta-button" onClick={handleClick}>
            ENTER THE VOTING SYSTEM
          </button>
          <button className="cta-button" onClick={handleClick2}>
            ADMIN LOGIN
          </button>
        </div>
      </div>
    </>
  );
};

export default Landing;
