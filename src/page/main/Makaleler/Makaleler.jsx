import React, { useEffect } from "react";
import Posts from "./Posts";

function Makaleler() {
  useEffect(() => {
    document.title = "Makaleler | PROTOTURK";
  }, []);
  return (
    <div className='overflow-auto dark:bg-dark h-full w-full flex-1 flex flex-col items-start pb-10 px-5 2xl:px-40 xl:px-24 lg:px-14 md:px-5 sm:px-5'>
      <div className='flex-1 flex flex-col items-start container mx-auto py-8'>
        <h1 className='text-3xl text-mainGray dark:text-white font-bold'>
          Makaleler
        </h1>
        <Posts />
      </div>
    </div>
  );
}

export default Makaleler;
