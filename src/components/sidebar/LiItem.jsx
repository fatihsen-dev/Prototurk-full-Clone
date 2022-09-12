import React from "react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import mainContext from "../../context/mainContext";

function LiItem({ text, location, name }) {
  const { deAktiveSidebar } = useContext(mainContext);
  return (
    <li className='flex'>
      <NavLink
        onClick={deAktiveSidebar}
        className={`${name} px-3 w-full py-[6px] rounded-[3px] font-medium transition-colors cursor-pointer select-none text-[15px] text-black dark:text-white`}
        to={`${location}`}
      >
        {text}
      </NavLink>
    </li>
  );
}
LiItem.defaultProps = {
  text: "Text Belirtilmedi",
  location: "404",
  name: "",
};

export default LiItem;
