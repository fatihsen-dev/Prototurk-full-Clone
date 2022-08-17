import React from "react";

function Twitter() {
  return (
    <div className='w-full gap-3 flex py-5 mt-2 px-10 rounded text-white bg-blue-400 flex-col 2xl:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col mb-10'>
      <div className='flex items-center relative w-20 text-5xl'>
        <div className='grid place-items-center bg-blue-500/30 w-16 h-16 rounded-full'>
          <i className='fab fa-twitter -translate-x-1'></i>
        </div>
      </div>
      <div>
        <h1 className='text-xl'>
          Twitter'da <b>@prototurkcom</b> hesabını takip etmeyi unutma!
        </h1>
        <p className='opacity-60'>
          Hazırladığımız son videolardan anında haberdar olmak için twitter
          hesabımızı takip etmeyi unutma!
        </p>
        <a
          className='inline-flex mt-4 px-4 py-1.5 rounded-sm bg-white text-black'
          href='https://twitter.com/prototurkcom'
          target='_blank'
        >
          Takip et
        </a>
      </div>
    </div>
  );
}

export default Twitter;
