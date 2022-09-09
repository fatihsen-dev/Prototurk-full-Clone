import React, { useState } from "react";
import "./index.scss";
import Navbar from "./components/navbar/Navbar";
import Main from "./components/Main";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [darkTheme, setDarkTheme] = useState(
    localStorage.getItem("prototurkTheme") || "light"
  );
  if (darkTheme == "light") {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
  } else if (darkTheme == "dark") {
    document.body.classList.remove("light");
    document.body.classList.add("dark");
  }

  const [activeSidebar, setActiveSidebar] = useState("active");
  const [style, setStyle] = useState({});
  const ActiveSidebar = () => {
    activeSidebar == "active"
      ? (setActiveSidebar("deActive"),
        setStyle({
          width: "100%",
          zIndex: "10",
          display: "flex",
          position: "absolute",
        }))
      : (setActiveSidebar("active"), setStyle({}));
  };
  const deAktiveSidebar = () => {
    setActiveSidebar("active");
    setStyle({});
  };

  return (
    <BrowserRouter>
      <div className='h-full flex flex-col'>
        <Navbar ActiveSidebar={ActiveSidebar} />
        <Main
          darkTheme={darkTheme}
          setDarkTheme={setDarkTheme}
          style={style}
          deAktiveSidebar={deAktiveSidebar}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
