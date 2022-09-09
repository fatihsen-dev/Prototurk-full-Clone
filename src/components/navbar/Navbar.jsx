import React from "react";
import { NavLink } from "react-router-dom";

function Navbar({ ActiveSidebar }) {
  return (
    <div className='bg-white dark:bg-dark dark:border-darkBorder h-[60px] flex items-center justify-between px-5 border-b border-gray-100'>
      <button
        onClick={ActiveSidebar}
        className='flex 2xl:hidden xl:hidden lg:hidden md:flex sm:flex'
      >
        <i className='fa-solid fa-bars text-mainGray dark:text-mainBlue text-xl'></i>
      </button>
      <NavLink to='/' className='flex gap-[6px] items-end'>
        <h1 className='font-semibold text-2xl text-mainGray dark:text-white'>
          <span className=' hidden 2xl:inline xl:inline lg:inline md:hidden sm:hidden'>
            ./
          </span>
          prototurk
        </h1>
        <span className='text-sm font-medium pb-1 text-gray-400 hidden 2xl:flex xl:flex lg:flex md:hidden sm:hidden'>
          v2.5.2
        </span>
      </NavLink>
      <div className='2xl:flex xl:flex lg:flex md:hidden sm:hidden hidden'>
        <input
          className='bg-gray-100 dark:bg-[#202123] dark:text-white dark:placeholder:text-white/50 w-[600px] dark:border-neutral-700 h-10 text-base px-[15px] rounded outline-none font-medium placeholder-gray-400 transition-colors focus:bg-white border border-gray-100'
          type='text'
          placeholder='Ara'
          id='searchInput'
        />
      </div>
      <div>
        <button className='text-white rounded font-medium place-content-center'>
          <span className='bg-mainGray dark:bg-mainBlue rounded px-5 hidden place-content-center 2xl:grid xl:grid lg:grid md:hidden sm:hidden py-2'>
            Giriş yap
          </span>
          <i className='fa-solid fa-user text-xl text-mainGray dark:text-mainBlue flex 2xl:hidden xl:hidden lg:hidden md:flex sm:flex'></i>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
