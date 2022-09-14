import React from "react";
import Datas from "../../../Data/data.json";

let sortable = Datas.sort((a, b) => {
  return a.day - b.day;
});

function Posts() {
  return (
    <div className='grid w-full mt-3 grid-cols-1 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 gap-5'>
      {sortable.map((data, index) => (
        <a
          href='#'
          key={index}
          className='flex flex-col items-start border dark:border-darkBorder p-4 rounded-sm gap-3 hover:border-[#d1dce9] dark:hover:border-[#4b4c4d]'
        >
          <div
            className='font-bold text-sm px-3 py-1.5 flex justify-center items-center rounded'
            style={
              data.langAndColor.lang !== "JavaScript"
                ? { backgroundColor: data.langAndColor.color, color: "#ffffff" }
                : { backgroundColor: data.langAndColor.color }
            }
          >
            {data.langAndColor.lang}
          </div>
          <div className='dark:text-white text-2xl font-bold text-mainGray'>
            {data.headerText}
          </div>
          <div className='flex items-center gap-2'>
            <img
              className='w-9 rounded-full'
              src={data.avatar}
              alt={data.avatar}
            />
            <div className='flex flex-col leading-4'>
              <span className='text-[#262635] font-medium dark:text-[#bdc8d4]'>
                {data.firtName}
              </span>
              <span className='text-black/50 dark:text-gray-300/40 text-sm'>
                {data.day} gün önce
              </span>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}

export default Posts;
