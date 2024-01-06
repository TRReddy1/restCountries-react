import React from "react";

const Population = ({ popula }) => {
  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle bg-white text-black"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Sort By Population:
      </button>
      <ul className="dropdown-menu" onClick={popula}>
        <li>
          <a className="dropdown-item" href="#">
            ASCE
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            DESC
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Population;
