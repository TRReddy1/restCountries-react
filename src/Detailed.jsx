import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { CircularProgress } from "@mui/material";

const Detailed = ({ themer, dark }) => {
  const [card, setCard] = useState([]);
  const [res, setRes] = useState([]);
  const [languages, setLanguages] = useState([]);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setRes(data[0]);
        setLanguages(Object.keys(data[0].languages));
      });

    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        setCard(data);
      });
  }, [id]);

  var borders = [];
  var currency = Object.keys(res.currencies || {});
  var countryBorders = res.borders || [];

  if (countryBorders.length > 0) {
    countryBorders.forEach((bdr) => {
      const foundCountry = card.find((country) => country.cca3 === bdr);
      if (foundCountry) {
        borders.push(foundCountry.name.common);
      }
    });
  }

  const styles = {
    backgroundColor: dark ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 98%)",
    color: dark ? "white" : "hsl(200, 15%, 8%)",
    boxShadow: dark
      ? "0px 0px 1px 0px hsl(209,23%,22%)"
      : "0px 0px 1px 0px hsl(201,198,198)",
  };

  return (
    <div className="container-fluid detailed pt-5" style={themer}>
      <button
        type="button"
        className="btn  m-3 px-4"
        style={styles}
        onClick={() => navigate(-1)}
      >
        <span className="arrow"> &larr; </span> Back
      </button>
      {res.length === 0 ? (
        <CircularProgress />
      ) : (
        <div className="caa detailedCard mt-5 py-5">
          <div>
            <img
              src={res.flags && res.flags.png}
              className="card-img-top"
              alt="..."
            />
          </div>
          <div className="details">
            <div className="textedContent">
              <div className="card-body leftText me-5">
                <h1 className="card-title mb-4">
                  {res.name && res.name.common}
                </h1>
                <p className="card-text">
                  <span style={{ fontWeight: "600" }}>Native name:</span>{" "}
                  {languages.length > 0 &&
                    res.name.nativeName[languages[0]].official}
                </p>
                <p className="card-text">
                  {" "}
                  <span style={{ fontWeight: "600" }}>population:</span>{" "}
                  {res.population}
                </p>
                <p className="card-text">
                  <span style={{ fontWeight: "600" }}>region:</span>{" "}
                  {res.region}
                </p>
                <p className="card-text">
                  <span style={{ fontWeight: "600" }}>subregion:</span>{" "}
                  {res.subregion}
                </p>
                <p className="card-text">
                  <span style={{ fontWeight: "600" }}>capital:</span>{" "}
                  {res.capital}
                </p>
              </div>
              <div className="rightText ms-5">
                <p className="card-text">
                  <span style={{ fontWeight: "600" }}>Top Level Domain:</span>{" "}
                  {res.tld}
                </p>
                <p className="card-text">
                  <span style={{ fontWeight: "600" }}>currencies:</span>{" "}
                  {currency.length > 0 && res.currencies[currency[0]].name}
                </p>
                <p className="card-text">
                  <span style={{ fontWeight: "600" }}>languages:</span>{" "}
                  {languages.map((lang) => res.languages[lang]).join(", ")}
                </p>
              </div>
            </div>
            <div>
              <p className="card-text mt-4">
                <span style={{ fontWeight: "600" }}>Border Countries:</span>
                {borders.length > 0
                  ? borders.map((border) => (
                      <div
                        key={border}
                        type="button"
                        className="btn m-2"
                        style={styles}
                        onClick={() => {
                          var bordered = card.filter((c) => {
                            return c.name.common === border;
                          });
                          navigate(`/country/${bordered[0].ccn3}`);
                        }}
                      >
                        {border}
                      </div>
                    ))
                  : " No borders"}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Detailed;
