import React from "react";

function Kesfet() {
  return (
    <div className='overflow-auto h-full w-full flex-1 flex flex-col items-start pb-10 px-5 2xl:px-40 xl:px-24 lg:px-14 md:px-5 sm:px-5'>
      <div className='flex-1 flex flex-col items-start container mx-auto py-8'>
        <h1 className='text-3xl text-[#32445a] font-bold'>Keşfet</h1>
        <div className='flex flex-col gap-4 items-start bg-gray-100 p-5 mt-5 relative'>
          <p>
            İnternette hergün gezinirken onlarca güzel link keşfediyoruz ve
            zamanla unutup gidiyoruz. Gelin bu unutulmaya yüz tutmuş geleneği
            birlikte sürdürelim ve paylaşmanın yeni ve keyifli bir yolunu
            keşfedelim. Artık onlarca açık tarayıcı sekmesi yerine
            bulduklarınızı ve sevdiklerinizi buraya kaydedin ve bunu
            başkalarıyla paylaşın. Keşfedilmeyi bekleyen binlerce link var,
            hazırsan maceraya başlıyoruz!
          </p>
          <button className='bg-[#32445a] text-white font-medium rounded py-2 px-4'>
            Link Paylaş
          </button>
          <span className='flex w-10 h-10 bg-gray-100 left-0 top-1 absolute -skew-x-[45deg] rotate-[90deg] -z-10'></span>
        </div>
      </div>
    </div>
  );
}

export default Kesfet;
