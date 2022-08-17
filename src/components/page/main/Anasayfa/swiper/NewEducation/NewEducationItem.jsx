import React from "react";

function NewEducationItem({
  userName,
  title,
  avatar,
  time,
  langText,
  LangBg,
  langColor,
}) {
  return (
    <div className='flex justify-center w-full h-full overflow-hidden'>
      <a
        href='#'
        className='flex bg-white border rounded-sm h-full w-full gap-1 flex-col z-10 select-none p-5'
      >
        <div>
          <p
            className='inline-flex px-3 py-1 rounded'
            style={{ backgroundColor: LangBg, color: langColor }}
          >
            {langText}
          </p>
        </div>
        <div>
          <p className='text-ellipsis overflow-hidden whitespace-nowrap text-xl font-medium text-neutral-800'>
            {title}
          </p>
          <p className='text-sm text-gray-500/60'>{time}</p>
        </div>
        <div className='flex gap-1 items-center mt-2'>
          <img
            className='w-6 rounded-full'
            src={`${avatar}`}
            alt={`${avatar}`}
          />
          <p className='text-sm font-medium text-gray-500'>{userName}</p>
        </div>
      </a>
    </div>
  );
}
NewEducationItem.defaultProps = {
  avatar: "./img/defaultAvatar.png",
  userName: "DefaultName",
  title: "Lorem ipsum dolor sit amet, consectetur.",
  time: "128 gün önce",
  LangBg: "#f7df1e",
  langColor: "#000000",
  langText: "JavaScript",
};

export default NewEducationItem;
