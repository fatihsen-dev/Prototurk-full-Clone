import React, { useEffect } from "react";
import HeaderText from "./components/HeaderText";

function Python() {
  useEffect(() => {
    document.title = "Laravel Dersleri | PROTOTURK";
  }, []);
  return (
    <div className='overflow-auto dark:bg-dark h-full w-full flex-1 flex flex-col items-start pb-10 px-5 2xl:px-40 xl:px-24 lg:px-14 md:px-5 sm:px-5'>
      <div className='flex-1 flex flex-col items-start container mx-auto py-8'>
        <HeaderText lang='python' />
      </div>
    </div>
  );
}

export default Python;
