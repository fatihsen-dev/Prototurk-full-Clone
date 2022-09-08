import React from "react";
import { NavLink } from "react-router-dom";

function LiItem({ text, location, name, ActiveSidebar }) {
  return (
    <li className='flex'>
      <NavLink
        onClick={ActiveSidebar}
        className={`${name} bg-white px-3 w-full py-[6px] rounded-[3px] font-medium transition-colors cursor-pointer select-none text-[15px] text-black`}
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
