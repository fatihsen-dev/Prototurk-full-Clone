import React, { useState } from "react";
import { useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

function Navbar() {
  const params = useLocation();
  const activeMenu = (e) => {
    if (params.pathname == e.target.name) {
      e.target.classList.add("active");
    }
  };

  return (
    <nav className='akis-navbabar w-full flex gap-6 text-gray-400 font-semibold text-lg'>
      <NavLink className='my-4' to={""}>
        Sorular
      </NavLink>
      <NavLink className='my-4' to={`cevaplar`}>
        Cevaplar
      </NavLink>
      <NavLink className='my-4' to={`makaleler`}>
        Makaleler
      </NavLink>
    </nav>
  );
}

export default Navbar;
