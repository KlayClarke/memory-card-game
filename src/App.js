import "./App.css";
import { useState, useEffect } from "react";

const Cards = () => {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [cards, setCards] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
  ]);

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  }

  function currentScoreIncrement() {
    setCurrentScore(currentScore + 1);
  }

  function handleCardClick(e) {
    currentScoreIncrement();
  }

  useEffect(() => {
    setCards(shuffle(cards));
  });

  return (
    <div>
      <div id="score">Current score: {currentScore}</div>
      <div id="grid-container">
        <div id="cards-grid">
          {cards.map((card) => (
            <div
              className="card-item"
              key={card}
              id={card}
              onClick={handleCardClick}
            >
              {card}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div id="main-container">
      <Cards />
    </div>
  );
};

export default App;

// PLAN

// must make a game that has 12 cards, user clicks on a card and the cards shuffl (user current score increases)
// if user clicks on same card twice, score resets --> if previous score was highest score of session, high score is prev

// MUST HAVE COMPONENTS
// scoreboard that shows current score and highest session score
// cards on screen that have discernible text, images - able to click
// display said cards in random order at when component mounts
//

// if user hits same card twice in session, reset currentScore - if high score, update high score
// if user score is cards length, user wins
