import "../App.css";
import { useState } from "react";
import { Cards } from "./Cards";

export const GameBoard = () => {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  return (
    <div>
      <div id="score">
        Current Score: {currentScore} <br />
        High Score: {highScore}
      </div>
      <div>
        <Cards
          currentScore={currentScore}
          highScore={highScore}
          setCurrentScore={setCurrentScore}
          setHighScore={setHighScore}
        />
      </div>
    </div>
  );
};
