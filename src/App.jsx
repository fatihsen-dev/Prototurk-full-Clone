import React, {useState} from "react";
import "./index.scss";
import Navbar from "./components/navbar/Navbar";
import Main from "./components/Main";
import {BrowserRouter} from "react-router-dom";
import mainContext from "./context/mainContext";
import KesfetPopup from "./page/main/Kesfet/Popup";
import DersIstekleriPopup from "./page/main/DersIstekleri/Popup";
import Login from "./components/login/Login";

function App() {
  // light,dar theme
  const [darkTheme, setDarkTheme] = useState(
    localStorage.getItem("prototurkTheme") || "light"
  );

  // page popup
  const [activeKesfetPopup, setActiveKesfetPopup] = useState(false);
  const [activeDersIstekleriPopup, setAactiveDersIstekleriPopup] =
    useState(false);

  // login resgister popup
  const [loginPage, setLoginPage] = useState(false);

  // sidebar open,close
  const [activeSidebar, setActiveSidebar] = useState("active");
  const [style, setStyle] = useState({});

  // soru-cevap page sidebar open,close
  const [activeSoruCevapSidebar, setActiveSoruCevapSidebar] = useState(false);

  // set dark,light theme
  if (darkTheme === "light") {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
  } else if (darkTheme === "dark") {
    document.body.classList.remove("light");
    document.body.classList.add("dark");
  }
  // active,deActive sidebar
  const ActiveSidebar = () => {
    if (activeSidebar === "active") {
      setActiveSidebar("deActive");
      setStyle({
        width: "100%",
        zIndex: "10",
        display: "flex",
        position: "absolute",
      });
    } else {
      setActiveSidebar("active");
      setStyle({});
    }
  };
  const deAktiveSidebar = () => {
    setActiveSidebar("active");
    setStyle({});
  };

  // context transfer object
  const data = {
    style,
    setStyle,
    activeSidebar,
    setActiveSidebar,
    darkTheme,
    setDarkTheme,
    ActiveSidebar,
    deAktiveSidebar,
    activeKesfetPopup,
    setActiveKesfetPopup,
    activeDersIstekleriPopup,
    setAactiveDersIstekleriPopup,
    activeSoruCevapSidebar,
    setActiveSoruCevapSidebar,
    loginPage,
    setLoginPage,
  };

  return (
    <BrowserRouter>
      <mainContext.Provider value={data}>
        <div className='h-full flex flex-col'>
          <KesfetPopup />
          <DersIstekleriPopup />
          <Login />
          <Navbar />
          <Main />
        </div>
      </mainContext.Provider>
    </BrowserRouter>
  );
}

export default App;
