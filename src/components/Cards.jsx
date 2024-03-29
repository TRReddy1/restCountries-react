import React from "react";
import Card from "./Card";

const Cards = ({ cards, dark }) => {
  return (
    <div className="container-fluid cards d-flex ">
      {cards.map((card, index) => {
        return (
          <Card
            key={index}
            id={card.cca3}
            flag={card.flags.png}
            name={card.name.common}
            population={card.population}
            region={card.region}
            capital={card.capital}
            currtheme={dark}
          />
        );
      })}
    </div>
  );
};

export default Cards;
