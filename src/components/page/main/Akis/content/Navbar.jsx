import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [activeBtn, setActiveBtn] = useState(0);
  return (
    <nav className='w-full flex gap-6 text-gray-400 font-semibold text-lg'>
      <NavLink
        style={({ isActive }) => ({
          display: "block",
          margin: "1rem 0",
          color: isActive ? "#32445a" : "",
        })}
        to={`/akis`}
      >
        Sorular
      </NavLink>
      <NavLink
        style={({ isActive }) => ({
          display: "block",
          margin: "1rem 0",
          color: isActive ? "#32445a" : "",
        })}
        to={`cevaplar`}
      >
        Cevaplar
      </NavLink>
      <NavLink
        style={({ isActive }) => ({
          display: "block",
          margin: "1rem 0",
          color: isActive ? "#32445a" : "",
        })}
        to={`makaleler`}
      >
        Makaleler
      </NavLink>
    </nav>
  );
}

export default Navbar;
