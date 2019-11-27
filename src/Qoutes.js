import React, { useState, useEffect } from "react";
import "./Qoutes.css";
import twitterLogo from "./blue.png";

function QouteBox() {
  let randomQoute;
  const [qoute, setQoute] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    getQoute();
  }, []);

  const getQoute = async () => {
    const response = await fetch(
      `https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json`
    );
    const data = await response.json();

    randomQoute = data[Math.floor(Math.random() * data.length)];
    setAuthor(randomQoute.author);
    setQoute(randomQoute.quote);
  };

  const nextQoute = e => {
    e.preventDefault();
    getQoute();
    console.log("hi");
  };

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
      <button id="new-qoute" className="button jump" onClick={nextQoute}>
        Next qoute
      </button>
    </div>
  );
}

export default QouteBox;
