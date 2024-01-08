import React from "react";
import Card from "./Card";

const Cards = ({ cards, dark }) => {
  return (
    <div className="container-fluid px-5 cards d-flex " style={dark}>
      {cards.map((card, index) => {
        return (
          <Card
            key={index}
            id={card.ccn3}
            flag={card.flags.png}
            name={card.name.common}
            population={card.population}
            region={card.region}
            capital={card.capital}
            style1={dark}
          />
        );
      })}
    </div>
  );
};

export default Cards;
