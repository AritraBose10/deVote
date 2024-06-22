import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./assets/voting.css";

const csrfToken = document
  .querySelector('meta[name="csrf-token"]')
  .getAttribute("content");

const Voting = () => {
  const [winner, setWinner] = useState(0);
  const [buttonState, setButtonState] = useState(true);
  const [light, setLight] = useState(true);
  const [showConfirm, setShowConfirm] = useState(false);
  const [selectedParty, setSelectedParty] = useState(" ");

  const handleVote = (party) => {
    setButtonState(false);
    setLight(false);
    setShowConfirm(true);
    setSelectedParty(party);
  };

  const confirmVote = async () => {
    try {
      const response = await axios.post("http://localhost:8000/api/vote", {
        name: selectedParty,
      });

      console.log(response.data.message);

      setShowConfirm(false);

      console.log("Button state:", buttonState);
    } catch (error) {
      console.log("Error casting vote", error);
    }
  };

  const cancelVote = () => {
    setShowConfirm(false);
    setButtonState(true);
    setLight(true);
    console.log(`Vote cancelled for ${selectedParty}`);
  };

  const parties = ["BJP", "INC", "TMC"];

  return (
    <>
      <div className="vote">
        <div id="voting-container">
          <div id="voting-machine">
            {parties.map((party) => (
              <div id="party" key={party}>
                <h2>{party}</h2>
                <div
                  id="circle"
                  className={light ? "inactive" : "active"}
                ></div>
                <button
                  onClick={() => {
                    handleVote(party);
                  }}
                  id="btn"
                  className={buttonState ? "enabled" : "disabled"}
                  key={party}
                >
                  VOTE
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      {showConfirm && (
        <ConfirmationMessage onConfirm={confirmVote} onCancel={cancelVote} />
      )}
    </>
  );
};

const ConfirmationMessage = ({ onConfirm, onCancel }) => {
  const navigate = useNavigate();
  const closeFunction = () => {
    navigate("/voting");
  };

  return (
    <div className="confirmation-container">
      <div className="confirmation-message">
        <button className="close">
          <img
            id="cross"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfJ1BZV17GSZveEVOpbiPQ-4GkQjH4UZ_UdA&s"
            alt=""
            onClick={closeFunction}
          />
        </button>

        <p>Are you sure you want to submit your vote?</p>
        <div className="confirmation-buttons">
          <button id="cnf" onClick={onConfirm}>
            Confirm
          </button>
          <button id="cnc" onClick={onCancel}>
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Voting;
