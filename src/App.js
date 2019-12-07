import React, { useState, useEffect } from "react";
import "./App.css";

import QouteBox from "./QouteBox";

function App() {
  const [qoute, setQoute] = useState("");
  const [author, setAuthor] = useState("");

  //call getQoute first time app renders
  useEffect(() => {
    getQoute();
  }, []);

  const getQoute = async () => {
    //get data
    const response = await fetch(
      `https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json`
    );
    const data = await response.json();

    //set random qoute
    let randomQoute;
    randomQoute = data[Math.floor(Math.random() * data.length)];
    setAuthor(randomQoute.author);
    setQoute(randomQoute.quote);
  };

  return (
    <div className="App">
      <h1>QUOTE MACHINE</h1>
      <QouteBox qoute={qoute} author={author} getQoute={getQoute} />
    </div>
  );
}

export default App;
