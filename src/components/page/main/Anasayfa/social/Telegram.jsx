import React from "react";

function Telegram() {
  return (
    <div className='w-full gap-3 flex py-5 mt-2 px-10 rounded text-white bg-blue-600 flex-col 2xl:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col mb-10'>
      <div className='flex items-center relative w-20 text-5xl'>
        <div className='grid place-items-center bg-blue-700/30 w-16 h-16 rounded-full'>
          <i className='fab fa-telegram -translate-x-1'></i>
        </div>
      </div>
      <div>
        <h1 className='text-xl'>Telegram grubumuza katıl!</h1>
        <p className='opacity-60'>
          Yüzlerce kişiyle anında konuşabileceğin telegram grubumuza katılmayı
          unutma.
        </p>
        <a
          className='inline-flex mt-4 px-4 py-1.5 rounded-sm bg-white text-black'
          href='https://t.me/prototurk'
          target='_blank'
        >
          Gruba katıl
        </a>
      </div>
    </div>
  );
}

export default Telegram;
