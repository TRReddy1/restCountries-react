import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const Detailed = ({ allCards }) => {
  // const [cards, setCards] = useState([]);
  const [card, setCard] = useState([]);

  const navigate = useNavigate();

  const { id } = useParams();
  // console.log(typeof id);

  const res = allCards.filter((c) => {
    if (id === c.ccn3) {
      return c;
    }
  });

  useEffect(() => {
    setCard(res);
    console.log("hii");
  }, []);

  // console.log(res);

  const languages = Object.keys(res[0].languages);
  // console.log(res[0].name.nativeName[languages[0]].official);
  // setCard(res);
  var borders = [];
  var countryBorders = res[0].borders;

  // console.log(countryBorders);

  if (countryBorders !== undefined) {
    countryBorders.forEach((bdr) => {
      allCards.filter((card) => {
        if (bdr === card.cca3) {
          borders.push(card.name.common);
        }
      });
    });
  }

  // console.log(borders);
  var currency = Object.keys(res[0].currencies);
  // console.log(res[0].currencies[currency].name);

  return (
    <div className="container">
      <button
        type="button"
        className="btn btn-light m-3"
        onClick={() => navigate("/")}
      >
        Back
      </button>
      <div className="card detailedCard">
        <div>
          <img src={res[0].flags.png} className="card-img-top" alt="..." />
        </div>
        <div className="card-body">
          <h5 className="card-title">{res[0].name.common}</h5>
          <p className="card-text">
            Native name: {res[0].name.nativeName[languages[0]].official}
          </p>
          <p className="card-text">population: {res[0].population}</p>
          <p className="card-text">region: {res[0].region}</p>
          <p className="card-text">subregion: {res[0].subregion}</p>
          <p className="card-text">capital: {res[0].capital}</p>
          <p className="card-text">Top Level Domain: {res[0].tld}</p>
          <p className="card-text">
            currencies: {res[0].currencies[currency].name}
          </p>
          <p className="card-text">
            languages: {languages.map((lang) => res[0].languages[lang])}
          </p>
          <p className="card-text">
            Border Countries:
            {borders.length > 0
              ? borders.map((border) => (
                  <div type="button" className="btn btn-light m-3">
                    {border}
                  </div>
                ))
              : " No boders"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Detailed;
