import { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

function Navbar() {
  const params = useLocation();
  useEffect(() => {
    if (
      params.pathname == "/akis/cevaplar" ||
      params.pathname == "/akis/makaleler"
    ) {
      document.querySelectorAll(".akisLink")[0].style.transition = "all 0s";
      document.querySelectorAll(".akisLink")[0].classList.remove("active");
    }
  }, []);
  const checkActive = (e) => {
    document
      .querySelectorAll(".akisLink")
      .forEach((e) => e.classList.remove("active"));
    e.target.classList.add("active");
  };
  return (
    <nav className='akis-navbabar w-full flex gap-6 text-gray-400 font-semibold text-lg relative'>
      <NavLink onClick={checkActive} className='akisLink' to={""}>
        Sorular
      </NavLink>
      <NavLink onClick={checkActive} className='akisLink' to={`cevaplar`}>
        Cevaplar
      </NavLink>
      <NavLink onClick={checkActive} className='akisLink' to={`makaleler`}>
        Makaleler
      </NavLink>
    </nav>
  );
}

export default Navbar;
