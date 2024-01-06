import React from "react";
import Card from "./Card";

const Cards = ({ cards }) => {
  return (
    <div className="container-fluid px-5 cards d-flex">
      {cards.map((card, index) => {
        return (
          <Card
            key={index}
            flag={card.flags.png}
            name={card.name.common}
            population={card.population}
            region={card.region}
            capital={card.capital}
          />
        );
      })}
    </div>
  );
};

export default Cards;
