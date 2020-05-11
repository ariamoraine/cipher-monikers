import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addGame } from "../redux/actions";

// import "./App.css";

const randomBit = () => Math.random().toString(36).substr(2, 5);

function Entryway(props) {
  const [gameKey, setGameKey] = useState(`${randomBit()}-${randomBit()}`);
  console.log("props", props);
  return (
    <div className="App">
      <header>Welcome to Cipher Mokikers</header>
      <input onChange={(e) => setGameKey(e.target.value)} value={gameKey} />
      <Link to={`/${gameKey}`}>
        <button onClick={() => props.addGame(gameKey)}>Start/Join Game</button>
      </Link>
    </div>
  );
}

export default connect(({ games }) => ({ games }), { addGame })(Entryway);
