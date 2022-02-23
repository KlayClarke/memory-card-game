import "./App.css";
import { GameBoard } from "./components/GameBoard";

const App = () => {
  return (
    <div id="main-container">
      <GameBoard />
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
