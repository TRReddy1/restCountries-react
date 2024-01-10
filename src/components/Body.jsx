import React, { useState, useEffect } from "react";
import Search from "./Search";
import Cards from "./Cards";
import { CircularProgress } from "@mui/material";

const Body = ({ themer, theme }) => {
  const [cards, setCards] = useState([]);
  const [copyCards, setCopyCards] = useState([]);
  const [searchCard, setSearchCard] = useState([]);
  const [region, setRegion] = useState([]);
  const [searchedAndFilter, setSearchedAndFilter] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setCards(data);
        setCopyCards(data);
        setSearchCard(data);
        setSearchedAndFilter(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const filtered = (e) => {
    const regionVal = e.target.text.toLowerCase();
    setRegion(regionVal);
    if (regionVal === "all") {
      setCopyCards(cards);
    } else {
      const filt = searchedAndFilter.filter((card) => {
        return card.region.toLowerCase() === regionVal;
      });
      setCopyCards(filt);
      setSearchCard(filt);
    }
  };

  const searched = (e) => {
    const inputed = e.target.value.toLowerCase().trim();
    var result = searchCard.filter((card) => {
      return card.name.common.toLowerCase().trim().includes(inputed);
    });
    setCopyCards(result);
    setSearchedAndFilter(result);
  };

  const population = (e) => {
    var temp = [...copyCards];

    const target = e.target.text.trim();
    if (target === "DESC") {
      temp.sort((a, b) => b.population - a.population);
    } else {
      temp.sort((a, b) => a.population - b.population);
    }
    setCopyCards(temp);
  };

  const sortByArea = (e) => {
    var temp = [...copyCards];
    const target = e.target.text.trim();
    if (target === "DESC") {
      temp.sort((a, b) => b.area - a.area);
    } else {
      temp.sort((a, b) => a.area - b.area);
    }
    setCopyCards(temp);
  };

  return (
    <div style={themer}>
      <Search
        onclick={filtered}
        onsearched={searched}
        region={region}
        popu={population}
        byArea={sortByArea}
        cards={cards}
        setFn={setCopyCards}
        theme={theme}
        // setFnSearch={setSearchCard}
      />
      {Cards.length < 0 ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "20%",
          }}
        >
          <CircularProgress />
        </div>
      ) : (
        // <h1>No Such Country Exist..</h1>
        <Cards cards={copyCards} dark={theme} />
      )}

      {cards.length > 0 && copyCards.length === 0 && (
        <h1 style={{ textAlign: "center", marginTop: "20%" }}>
          {" "}
          No Such Country Exist..
        </h1>
      )}
    </div>
  );
};

export default Body;
