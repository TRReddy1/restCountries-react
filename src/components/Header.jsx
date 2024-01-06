import React from "react";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid px-5">
        <a className="navbar-brand" href="#">
          where in the world?
        </a>
        <button className="btn btn-outline-success" type="submit">
          darkmode
        </button>
      </div>
    </nav>
  );
};

export default Header;
