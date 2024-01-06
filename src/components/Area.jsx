import React from "react";

const Area = ({ byArea }) => {
  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle bg-white text-black"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Sort By Area:
      </button>
      <ul className="dropdown-menu" onClick={byArea}>
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

export default Area;
