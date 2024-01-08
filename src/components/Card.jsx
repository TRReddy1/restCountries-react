import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ id, flag, name, population, region, capital, style1 }) => {
  // const width = { width: "18rem" };
  // const merge = { ...style1, ...width };

  const navigate = useNavigate();
  return (
    <div
      className="card onecard m-4"
      style={style1}
      id={id}
      onClick={() => navigate(`/country/${id}`)}
    >
      <img className="imgs" src={flag} />
      <div className="card-body">
        <h5 className="card-title" style={{ width: "15rem" }}>
          {name}
        </h5>
        <p className="card-text">Population:{population}</p>
        <p className="card-text">Region:{region}</p>
        <p className="card-text" style={{ width: "13rem" }}>
          Capital:{capital}
        </p>
      </div>
    </div>
  );
};

export default Card;
