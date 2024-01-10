import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ id, flag, name, population, region, capital, currtheme }) => {
  // const width = { width: "18rem" };
  // const merge = { ...style1, ...width };

  const styles = {
    backgroundColor: currtheme ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 98%)",
    color: currtheme ? "white" : "hsl(200, 15%, 8%)",
    boxShadow: currtheme
      ? "0px 0px 1px 0px hsl(209,23%,22%)"
      : "0px 0px 1px 0px hsl(201,198,198)",
  };

  const navigate = useNavigate();
  return (
    <div
      className="card onecard"
      style={styles}
      id={id}
      onClick={() => navigate(`/country/${id}`)}
    >
      <img className="imgs" src={flag} />
      <div className="card-body">
        <h4 className="card-title my-3" style={{ width: "15rem" }}>
          {name}
        </h4>
        <p className="card-text">
          <span style={{ fontWeight: "600" }}>population:</span>
          {population}
        </p>
        <p className="card-text">
          <span style={{ fontWeight: "600" }}>Region:</span>
          {region}
        </p>
        <p className="card-text" style={{ width: "13rem" }}>
          <span style={{ fontWeight: "600" }}>Capital:</span>
          {capital}
        </p>
      </div>
    </div>
  );
};

export default Card;
