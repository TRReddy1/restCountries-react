import React, { useContext } from "react";
import { theme } from "../App";

const Header = ({ onclick, themer }) => {
  const currTheme = useContext(theme);

  return (
    <nav className="navbar navbar-expand-lg " style={themer}>
      <div className="container-fluid px-5">
        <a className="navbar-brand" style={themer}>
          where in the world?
        </a>
        <button
          className="btn btn-outline-success"
          type="submit"
          onClick={onclick}
          style={themer}
        >
          darkmode
        </button>
      </div>
    </nav>
  );
};

export default Header;
