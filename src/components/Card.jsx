import React from "react";

const Card = ({ flag, name, population, region, capital }) => {
  return (
    <div className="card m-4" style={{ width: "18rem" }}>
      <img src={flag} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          Population:{population} <br />
          Region:{region} <br />
          Capital:{capital}
        </p>
      </div>
    </div>
  );
};

export default Card;
