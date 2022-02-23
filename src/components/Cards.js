import "../App.css";
import { useState, useEffect } from "react";

export const Cards = ({
  currentScore,
  highScore,
  setCurrentScore,
  setHighScore,
}) => {
  const [cards, setCards] = useState([
    "https://gtspirit.com/wp-content/uploads/2021/06/02_hispeed_css-e1624431465349.jpg",
    "https://stimg.cardekho.com/images/carexteriorimages/630x420/Lamborghini/Aventador/6721/Lamborghini-Aventador-SVJ/1621849426405/front-left-side-47.jpg?tr=w-135",
    "https://cdn.motor1.com/images/mgl/2Y3bx/s1/mclaren-p1.jpg",
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-mercedes-amg-gt-black-series-118-1601842340.jpg?crop=0.817xw:0.612xh;0.183xw,0.281xh&resize=1200:*",
    "https://cdn.motor1.com/images/mgl/VA0z9/s1/tesla-roadster.webp",
    "https://cdn.motor1.com/images/mgl/6yPGX/s1/2021-dodge-charger-srt-hellcat-redeye.jpg",
    "https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/images/17q1/674191/2017-bentley-continental-supersports-revealed-news-car-and-driver-photo-674309-s-original.jpg?fill=2:1&resize=1200:*",
    "https://www.topgear.com/sites/default/files/images/news-article/2019/01/dfeb7f2af3355f55796bda3e86b8d6ed/row_9371.jpg",
    "https://media.autoexpress.co.uk/image/private/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1579701747/autoexpress/2019/06/01_14.jpg",
  ]);
  const [clickedCards, setClickedCards] = useState([]);

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

  function checkForHighScore() {
    if (currentScore > highScore) {
      setHighScore(currentScore);
    }
  }

  function currentScoreIncrement(e) {
    if (!clickedCards.includes(e.target.id)) {
      setCurrentScore(currentScore + 1);
      setClickedCards([...clickedCards, e.target.id]);
    } else {
      checkForHighScore();
      setCurrentScore(0);
      setClickedCards([]);
    }
  }

  function handleCardClick(e) {
    currentScoreIncrement(e);
  }

  useEffect(() => {
    setCards(shuffle(cards));
    console.log(clickedCards);
  });

  return (
    <div>
      <div id="grid-container">
        <div id="cards-grid">
          {cards.map((card) => (
            <img
              className="card-item"
              src={card}
              onClick={handleCardClick}
              id={card}
              key={card}
            ></img>
          ))}
        </div>
      </div>
    </div>
  );
};
