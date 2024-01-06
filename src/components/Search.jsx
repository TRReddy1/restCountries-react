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
}) => {
  return (
    <div className="container-fluid searchFlex d-flex px-5">
      <div className="input-group my-3">
        <span className="input-group-text" id="basic-addon1">
          @
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Search for a country.."
          onChange={onsearched}
        />
      </div>
      {/* dropdown */}
      <div className="dropdown ">
        <button
          className="btn btn-secondary dropdown-toggle bg-light text-black"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Filter by Region:{region}
        </button>
        <ul className="dropdown-menu" onClick={onclick}>
          <li>
            <a className="dropdown-item" href="#">
              Africa
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Americas
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Asia
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Europe
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Oceania
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Antarctic
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              All
            </a>
          </li>
        </ul>
      </div>
      <SubRegion copyCards={cards} region={region} fun={setFn} />
      <Population popula={popu} />
      <Area byArea={byArea} />
    </div>
  );
};

export default Search;
