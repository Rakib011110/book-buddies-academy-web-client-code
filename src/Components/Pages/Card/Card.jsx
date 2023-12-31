import React from "react";
import "./Card.css";
const Card = () => {
  const cardData = [
    {
      image: "https://wallpapercave.com/wp/wp7897048.jpg",
      buttonText: " Details",
    },
    {
      image:
        "https://www.roccat.com/cdn/shop/articles/unnamed_85098cea-a4de-47ed-b6f7-90d1fa64f116.jpg?v=1623429494",
      buttonText: "Details",
    },
    {
      image: "https://images.hdqwalls.com/wallpapers/battlefield-game-4k.jpg",
      buttonText: "View Details",
    },
    {
      image:
        "https://i.ytimg.com/vi/tj6FGxy5WuI/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCJ0NkD5Chs5TG-Dg-qgTcMnWA4Pw",
      buttonText: "Details",
    },
  ];
  return (
    <div className="wrapper">
      <div className="grid grid-cols-4 gap-1 ">
        {cardData.map((card, index) => (
          <div key={index} className="book">
            <div className="page">
              <div
                className="front-page bg-cover bg-center relative border border-blue-500"
                style={{ backgroundImage: `url(${card.image})` }}
              >
                <div className="after-content bg-center absolute inset-0 opacity-0 hover:opacity-100 transition duration-300">
                  <img
                    src={card.contentImage}
                    alt="Content"
                    className="h-full w-full"
                  />
                </div>
              </div>
              <div className="back-page">
                <p>Surprise!</p>
                <button className="btn">{card.buttonText}</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
