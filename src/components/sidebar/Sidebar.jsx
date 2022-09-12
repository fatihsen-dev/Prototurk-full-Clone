import React from "react";
import LiItem from "./LiItem";
import { useContext } from "react";
import mainContext from "../../context/mainContext";

function Sidebar() {
  const { setDarkTheme, deAktiveSidebar, darkTheme, style } =
    useContext(mainContext);

  const themeBtnFn = () => {
    setDarkTheme(darkTheme == "light" ? "dark" : "light");
    localStorage.setItem(
      "prototurkTheme",
      darkTheme == "light" ? "dark" : "light"
    );
    if (darkTheme == "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else if (darkTheme == "dark") {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
    deAktiveSidebar();
  };
  return (
    <div
      className='dark:bg-dark bg-white dark:border-darkBorder overflow-auto border-r scroll-m-1 border-gray-100 hidden flex-col p-3 text-mainGray 2xl:flex xl:flex lg:flex md:hidden sm:hidden 2xl:relative xl:relative lg:!w-[250px] lg:!relative sm:absolute md:absolute justify-between h-full'
      style={style}
    >
      <div>
        <ul className='flex flex-col gap-1.5'>
          <LiItem
            name='all-sidebar-item home-page-list-item'
            location=''
            text='Anasayfa'
          />
          <LiItem
            name='all-sidebar-item home-page-list-item'
            location='akis'
            text='Akış'
          />
          <LiItem
            name='all-sidebar-item home-page-list-item'
            location='kesfet'
            text='Keşfet'
          />
          <LiItem
            name='all-sidebar-item home-page-list-item'
            location='makaleler'
            text='Makaleler'
          />
          <LiItem
            name='all-sidebar-item home-page-list-item'
            location='soru-cevap'
            text='Soru & Cevap'
          />
          <LiItem
            name='all-sidebar-item home-page-list-item'
            location='ders-istekleri'
            text='Ders İstekleri'
          />
        </ul>
        <ul className='mt-10 mb-4 flex flex-col gap-1'>
          <LiItem
            name='all-sidebar-item sidebar-language-list-item html'
            location='html'
            text='HTML'
          />
          <LiItem
            name='all-sidebar-item sidebar-language-list-item css'
            location='css'
            text='CSS'
          />
          <LiItem
            name='all-sidebar-item sidebar-language-list-item javascript'
            location='javascript'
            text='Javascript'
          />
          <LiItem
            name='all-sidebar-item sidebar-language-list-item php'
            location='php'
            text='PHP'
          />
          <LiItem
            name='all-sidebar-item sidebar-language-list-item mysql'
            location='mysql'
            text='MySQL'
          />
          <LiItem
            name='all-sidebar-item sidebar-language-list-item laravel'
            location='laravel'
            text='Laravel'
          />
          <LiItem
            name='all-sidebar-item sidebar-language-list-item python'
            location='python'
            text='Python'
          />
          <LiItem
            name='all-sidebar-item sidebar-language-list-item git'
            location='git'
            text='Git'
          />
        </ul>
      </div>
      <div className='flex flex-col'>
        <button className='bg-mainGray p-2 mx-1 rounded font-medium text-white flex justify-center items-center'>
          Uyhulamayı Yükle
        </button>
        <button
          onClick={themeBtnFn}
          className='bg-neutral-900 dark:bg-white dark:text-neutral-900 mt-2 mx-1 font-medium text-white fill-white flex p-2 rounded items-center gap-1 justify-center'
        >
          <svg
            viewBox='0 0 24 24'
            width='24'
            height='24'
            preserveAspectRatio='xMidYMid meet'
            focusable='false'
            className='dark:fill-neutral-900'
          >
            <g className='style-scope yt-icon'>
              <path
                d='M280.485281,201.514719 L284,198 L287.514719,201.514719 L292.485281,201.514719 L292.485281,206.485281 L296,210 L292.485281,213.514719 L292.485281,218.485281 L287.514719,218.485281 L284,222 L280.485281,218.485281 L275.514719,218.485281 L275.514719,213.514719 L272,210 L275.514719,206.485281 L275.514719,201.514719 L280.485281,201.514719 Z M283.726536,215.86375 C287.116026,215.86375 289.86375,213.251451 289.86375,210.029016 C289.86375,206.806581 287.116026,204.194281 283.726536,204.194281 C283.073662,204.194281 282.164855,204.396254 281.000116,204.800201 C282.532112,206.378393 283.29811,208.121331 283.29811,210.029016 C283.29811,211.9367 282.444938,213.635948 280.738594,215.126758 C282.007413,215.618086 283.003393,215.86375 283.726536,215.86375 Z'
                transform='translate(-272, -198)'
              ></path>
            </g>
          </svg>
          {darkTheme == "dark" ? <span> Açık mod</span> : <span>Koyu mod</span>}
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
