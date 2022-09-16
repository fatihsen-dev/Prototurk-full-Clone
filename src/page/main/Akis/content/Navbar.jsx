import {NavLink} from "react-router-dom";

function Navbar() {
  return (
    <nav className='akis-navbabar w-full flex gap-6 text-gray-400 font-semibold text-lg relative'>
      <NavLink end className='akisLink' to={""}>
        Sorular
      </NavLink>
      <NavLink className='akisLink' to={`cevaplar`}>
        Cevaplar
      </NavLink>
      <NavLink className='akisLink' to={`makaleler`}>
        Makaleler
      </NavLink>
    </nav>
  );
}

export default Navbar;
