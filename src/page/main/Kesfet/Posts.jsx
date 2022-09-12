import React from "react";
import Datas from "./datas";

function Posts() {
  return (
    <>
      <ul className='flex flex-col gap-4 w-full'>
        {Datas &&
          Datas.map((data, index) => (
            <li
              className='border p-3 dark:border-darkBorder rounded-sm'
              key={index}
            >
              <div className='flex flex-col gap-1'>
                <div className='gap-2 flex flex-col 2xl:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col'>
                  <a className='inline-flex items-center gap-2 ' href='#'>
                    <img
                      className='w-5 object-cover'
                      src={data.avatar}
                      alt={data.avatar}
                    />
                    <span className='text-mainGray dark:text-mainBlue'>
                      {data.user}
                    </span>
                  </a>
                  <p className='dark:text-white'>
                    tarafından{" "}
                    <span className='opacity-70 dark:opacity-20'>
                      {data.time}
                    </span>{" "}
                    paylaşıldı.
                  </p>
                </div>
                <q className='italic my-2 dark:text-white/80'>
                  <span className='mx-1.5'>{data.comment}</span>
                </q>
              </div>
              <a
                className='flex mt-1 flex-col 2xl:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col bg-lightGreen p-3 dark:bg-darkBlueThree rounded-sm items-center gap-3'
                href={data.url}
                target='_blank'
              >
                {data.img !== "" && (
                  <img
                    className='w-full 2xl:w-24 xl:w-24 lg:w-24 md:w-full sm:w-full object-cover'
                    src={data.img}
                    alt={data.img}
                  />
                )}
                <div>
                  <span className='text-mainGray font-semibold dark:text-mainBlue'>
                    {data.title}
                  </span>
                  <p className='text-darkTwo/90 dark:text-white/50'>
                    {data.desc}
                  </p>
                </div>
              </a>
            </li>
          ))}
      </ul>
    </>
  );
}

export default Posts;
