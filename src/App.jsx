import React, { useState } from "react";
import "./index.scss";
import Navbar from "./components/navbar/Navbar";
import Main from "./components/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [activeSidebar, setActiveSidebar] = useState("active");
  const [style, setStyle] = useState({});
  const ActiveSidebar = () => {
    activeSidebar == "active"
      ? (setActiveSidebar("deActive"),
        setStyle({
          width: "100%",
          backgroundColor: "#fff",
          zIndex: "10",
          display: "flex",
          position: "absolute",
        }))
      : (setActiveSidebar("active"), setStyle({}));
  };
  return (
    <BrowserRouter>
      <div className='h-full flex flex-col'>
        <Navbar ActiveSidebar={ActiveSidebar} />
        <Main style={style} />
      </div>
    </BrowserRouter>
  );
}

export default App;
