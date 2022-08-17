import React from "react";
import { NavLink } from "react-router-dom";

function LangSwiperItem({
  bg,
  color,
  textColor,
  text,
  videoCount,
  fileCount,
  icon,
  svg,
  location,
}) {
  return (
    <NavLink
      to={`${location}`}
      className='flex flex-col justify-between w-full h-full items-center select-none py-5'
    >
      <div className='flex flex-col items-center gap-2'>
        <div className='flex relative justify-center items-center'>
          <div
            style={{ backgroundColor: `${bg}` }}
            className='w-[88px] h-[88px]  left-3 bottom-3 absolute rounded-full'
          ></div>
          {svg !== undefined ? (
            <div className='z-10 text-5xl border grid rounded-full place-items-center w-24 h-24'>
              <img className='w-12' src={`./svg/${svg}.svg`} />
            </div>
          ) : (
            ""
          )}
          {icon !== undefined ? (
            <i
              style={{ color: `${color}`, borderColor: `${color}` }}
              className={
                icon +
                ` z-10 text-5xl border grid rounded-full place-items-center w-24 h-24`
              }
            ></i>
          ) : (
            ""
          )}
        </div>
        <button
          style={{ color: `${textColor}`, backgroundColor: `${color}` }}
          className='px-5 py-[6px] rounded'
        >
          {text}
        </button>
      </div>
      <div className='flex gap-3 text-sm border-t pt-5 border-gray-200 border-opacity-70 text-[#23266b] text-opacity-50'>
        <div className='flex flex-col items-center gap-2'>
          <i className='fa-solid fa-file'></i>
          {fileCount == "belirsiz" ? (
            <p className='flex gap-1'>
              <span>{fileCount}</span>
            </p>
          ) : (
            <p className='flex gap-1'>
              <span>{fileCount}</span>ders
            </p>
          )}
        </div>
        <div className='flex flex-col items-center  gap-2'>
          <i className='fa-solid fa-video'></i>
          {videoCount == "belirsiz" ? (
            <p className='flex gap-1'>
              <span>{videoCount}</span>
            </p>
          ) : (
            <p className='flex gap-1'>
              <span>{videoCount}</span>video
            </p>
          )}
        </div>
      </div>
    </NavLink>
  );
}
LangSwiperItem.defaultProps = {
  fileCount: "belirsiz",
  videoCount: "belirsiz",
  textColor: "#fff",
  location: "404",
};

export default LangSwiperItem;
