import React, { useState } from "react";
import Body from "./components/Body";
import Header from "./components/Header";
import Detailed from "./Detailed";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { NavLink } from "react-router-dom";

export const theme = React.createContext();

function App() {
  const [currTheme, setCurrTheme] = useState(false);

  const style1 = {
    backgroundColor: currTheme ? "hsl(207, 26%, 17%)" : "hsl(0, 0%, 98%)",
    color: currTheme ? "white" : "hsl(200, 15%, 8%)",
  };

  const themeSwither = (e) => {
    setCurrTheme((theme) => !theme);
  };
  return (
    <>
      <theme.Provider value={currTheme}>
        <NavLink style={{ textDecoration: "none" }}>
          <Header onclick={themeSwither} theme={currTheme} />{" "}
        </NavLink>
        <Routes>
          <Route path="/" element={<Body themer={style1} theme={currTheme} />}>
            {/* <theme.Provider value={currTheme}>
          <Header onclick={themeSwither} themer={style1} />
          <Body themer={style1} />    
        </theme.Provider> */}
          </Route>

          <Route
            path="/country/:id"
            element={<Detailed themer={style1} dark={currTheme}></Detailed>}
          ></Route>
        </Routes>
      </theme.Provider>
    </>
  );
}

export default App;
