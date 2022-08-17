import React from "react";
import Sidebar from "./sidebar/Sidebar";
import Anasayfa from "./page/main/Anasayfa/content/Content";
import Akis from "./page/main/Akis/content/Akis";
import Kesfet from "./page/main/Kesfet/Kesfet";
import Makaleler from "./page/main/Makaleler/Makaleler";
import SoruCevap from "./page/main/SoruCevap/SoruCevap";
import DersIstekleri from "./page/main/DersIstekleri/DersIstekleri";
import Html from "./page/language/Html";
import Css from "./page/language/Css";
import Javascript from "./page/language/Javascript";
import Php from "./page/language/Php";
import Mysql from "./page/language/Mysql";
import Laravel from "./page/language/Laravel";
import Python from "./page/language/Python";
import Git from "./page/language/Git";
import { Routes, Route } from "react-router-dom";

function Main({ style }) {
  return (
    <div className='main flex-1 flex relative'>
      <Sidebar style={style} />
      <Routes>
        <Route path='/' element={<Anasayfa />} />
        <Route path='akis' element={<Akis />} />
        <Route path='kesfet' element={<Kesfet />} />
        <Route path='makaleler' element={<Makaleler />} />
        <Route path='soru-cevap' element={<SoruCevap />} />
        <Route path='ders-istekleri' element={<DersIstekleri />} />
        <Route path='html' element={<Html />} />
        <Route path='css' element={<Css />} />
        <Route path='javascript' element={<Javascript />} />
        <Route path='php' element={<Php />} />
        <Route path='mysql' element={<Mysql />} />
        <Route path='laravel' element={<Laravel />} />
        <Route path='python' element={<Python />} />
        <Route path='git' element={<Git />} />
      </Routes>
    </div>
  );
}

export default Main;
