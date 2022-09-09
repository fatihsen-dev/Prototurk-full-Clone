import React from "react";

function Makaleler() {
  return (
    <div className='w-full border dark:border-darkBorder py-8 gap-5 flex flex-col justify-center items-center px-5'>
      <img
        className='w-24'
        src='https://prototurk.com/public/img/article.svg'
      />
      <h3 className='text-lg text-gray-600 dark:text-white'>
        Takip ettiğiniz kişiler arasında makale paylaşan kimse bulunmuyor.
      </h3>
    </div>
  );
}

export default Makaleler;
