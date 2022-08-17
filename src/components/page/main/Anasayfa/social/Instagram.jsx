import React from "react";

function Instagram() {
  return (
    <div className='w-full gap-3 flex py-5 mt-2 px-10 rounded text-white bg-gradient-to-l from-indigo-500 via-purple-500 to-pink-500 flex-col 2xl:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col mb-10'>
      <div className='flex items-center relative w-20 text-5xl'>
        <div className='grid place-items-center bg-pink-600/70 w-16 h-16 rounded-full'>
          <i className='fab fa-instagram -translate-x-1'></i>
        </div>
      </div>
      <div>
        <h1 className='text-xl'>
          Instagram'da <b>@prototurk.official</b> hesabını takip etmeyi unutma!
        </h1>
        <p className='opacity-60'>
          Kodlamayla ilgili ipucu ve kolay kullanımları paylaştığımız instagram
          hesabını takip etmeyi unutmayın.
        </p>
        <a
          className='inline-flex mt-4 px-4 py-1.5 rounded-sm bg-white text-black'
          href='https://instagram.com/prototurk.official'
          target='_blank'
        >
          Takip et
        </a>
      </div>
    </div>
  );
}

export default Instagram;
