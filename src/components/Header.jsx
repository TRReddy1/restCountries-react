import React, { useContext } from "react";
import { theme } from "../App";

const Header = ({ onclick, theme }) => {
  // const currTheme = useContext(theme);

  const styles = {
    backgroundColor: theme ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 98%)",
    color: theme ? "white" : "hsl(200, 15%, 8%)",
    boxShadow: theme
      ? "0px 0px 0px 0px hsl(209,23%,22%)"
      : "0px 0px 1px 0px hsl(201,198,198)",
  };

  // const style1 = {
  //   backgroundColor: currTheme ? "hsl(207, 26%, 17%)" : "hsl(0, 0%, 98%)",
  //   color: currTheme ? "white" : "hsl(200, 15%, 8%)",
  // };

  return (
    <nav className="navbar navbar-expand-lg border-none" style={styles}>
      <div className="container-fluid px-5 mx-2">
        <a className="navbar-brand" style={styles}>
          where in the world?
        </a>
        <button className="btn" type="submit" onClick={onclick} style={styles}>
          darkmode
        </button>
      </div>
    </nav>
  );
};

export default Header;
