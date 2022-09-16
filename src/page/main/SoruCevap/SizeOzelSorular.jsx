import React, {useEffect, useContext} from "react";
import mainContext from "../../../context/mainContext";

function SizeOzelSorular() {
  const {setActiveSoruCevapSidebar} = useContext(mainContext);

  useEffect(() => {
    setActiveSoruCevapSidebar(true);
    document.title = "Takip Ettiğim Sorular - PROTOTURK";
    
    return () => setActiveSoruCevapSidebar(false);
  }, []);
  return (
    <div className='overflow-auto dark:bg-dark h-full w-full flex-1 flex flex-col items-start pb-10 px-5 2xl:px-40 xl:px-24 lg:px-14 md:px-5 sm:px-5'>
      <div className='flex-1 flex flex-col items-start container mx-auto py-8'>
        <h1 className='text-3xl text-mainGray dark:text-white font-bold'>
          Size Özel Sorular
        </h1>
      </div>
    </div>
  );
}

export default SizeOzelSorular;
