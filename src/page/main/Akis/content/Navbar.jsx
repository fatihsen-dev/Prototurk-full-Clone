import { useEffect } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className='akis-navbabar w-full flex gap-6 text-gray-400 font-semibold text-lg relative'>
      <NavLink to={""}>Sorular</NavLink>
      <NavLink to={`cevaplar`}>Cevaplar</NavLink>
      <NavLink to={`makaleler`}>Makaleler</NavLink>
    </nav>
  );
}

export default Navbar;
