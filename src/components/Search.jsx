import React from "react";
import Population from "./Population";
import Area from "./Area";
import SubRegion from "./SubRegion";

const Search = ({
  onclick,
  onsearched,
  region,
  popu,
  byArea,
  cards,
  setFn,
  theme,
  // setFnSearch,
}) => {
  const styles = {
    backgroundColor: theme ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 98%)",
    color: theme ? "white" : "hsl(200, 15%, 8%)",
    boxShadow: theme
      ? "0px 0px 0px 0px hsl(209,23%,22%)"
      : "0px 0px 1px 0px hsl(201,198,198)",
  };

  return (
    <div className="container-fluid searchFlex d-flex  px-5">
      <div className="input-group  my-3">
        <span className="input-group-text" style={styles}>
          @
        </span>
        <input
          type="text"
          className="form-control"
          id="search"
          placeholder="Search for a country.."
          onChange={onsearched}
          style={styles}
        />
      </div>
      {/* dropdown */}
      <div className="dropdown ">
        <button
          className="btn  dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          style={styles}
        >
          Filter by Region:{region}
        </button>
        <ul className="dropdown-menu" onClick={onclick} style={styles}>
          <li>
            <a className="dropdown-item" href="#" style={styles}>
              Africa
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#" style={styles}>
              Americas
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#" style={styles}>
              Asia
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#" style={styles}>
              Europe
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#" style={styles}>
              Oceania
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#" style={styles}>
              Antarctic
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#" style={styles}>
              All
            </a>
          </li>
        </ul>
      </div>
      <SubRegion
        copyCards={cards}
        region={region}
        fun={setFn}
        style={styles}
        // setFun={setFnSearch}
      />
      <Population popula={popu} style={styles} />
      <Area byArea={byArea} style={styles} />
    </div>
  );
};

export default Search;
