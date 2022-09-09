import React from "react";

function NewPostSwiperItem({ userName, text, avatar, time }) {
  return (
    <div className='flex justify-center w-full h-full overflow-hidden'>
      <div className='bg-gray-100 dark:bg-dark w-[90%] absolute -z-10 h-3 -bottom-2 rounded-md'></div>
      <a
        href='#'
        className='flex bg-white dark:bg-darkTwo dark:border-darkTwo border rounded-sm h-full w-full gap-2 flex-col z-10 select-none p-5'
      >
        <div className='flex items-center gap-1.5'>
          <img className='w-6 rounded-full' src={avatar} alt={avatar} />
          <p className='text-sm font-medium  text-gray-500'>{userName}</p>
        </div>
        <div className='text-ellipsis overflow-hidden whitespace-nowrap text-xl font-semibold text-mainGray dark:text-white'>
          {text}
        </div>
        <div className='text-sm text-gray-500/60 dark:text-white/50'>
          {time}
        </div>
      </a>
    </div>
  );
}
NewPostSwiperItem.defaultProps = {
  avatar: "./img/defaultAvatar.png",
  userName: "belirsiz",
  text: "belirsiz",
  time: "belirsiz",
};

export default NewPostSwiperItem;
