import React from "react";

const Population = ({ popula, style }) => {
  return (
    <div className="dropdown">
      <button
        className="btn dropdown-toggle "
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        style={style}
      >
        Sort By Population:
      </button>
      <ul className="dropdown-menu" onClick={popula} style={style}>
        <li>
          <a className="dropdown-item" href="#" style={style}>
            ASCE
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#" style={style}>
            DESC
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Population;
