import React from "react";
import "./QouteBox.css";
import twitterLogo from "./blue.png";

function QouteBox({ qoute, author, getQoute }) {
  return (
    <div id="qoute-box">
      <div id="text">
        <p id="qoute">
          <span
            id="span"
            style={{ position: "relative", top: "-0.5em", fontSize: "100%" }}
          >
            ,,{" "}
          </span>
          {qoute}
          <span
            id="span"
            style={{ position: "relative", top: "-0.5em", fontSize: "100%" }}
          >
            {"  "}
            ,,
          </span>
        </p>
        <p id="author">- {author}</p>
      </div>

      <a
        id="tweet-qoute"
        href={`https://twitter.com/intent/tweet?text=${qoute}%20%20%20${author}`}
        target="blank"
      >
        <img src={twitterLogo} alt="twitter-logo" />
      </a>
      <button id="new-qoute" className="button jump" onClick={getQoute}>
        Next qoute
      </button>
    </div>
  );
}

export default QouteBox;
