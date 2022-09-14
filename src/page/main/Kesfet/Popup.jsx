import { useContext } from "react";
import mainContext from "../../../context/mainContext";

function KesfetPopup() {
  const { activeKesfetPopup, setActiveKesfetPopup } = useContext(mainContext);

  return (
    <div
      onClick={() => setActiveKesfetPopup(false)}
      style={
        activeKesfetPopup
          ? { opacity: "1", pointerEvents: "all" }
          : { opacity: "0", pointerEvents: "none" }
      }
      className='cursor-pointer overflow-hidden absolute w-full h-full inset-0 z-20 bg-black/50 transition-all flex justify-center items-end'
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className='w-full 2xl:w-[50%] xl:w-[50%] lg:w-[50%] md:w-full sm:w-full h-72 rounded-sm bg-white dark:bg-darkThree flex flex-col p-6 gap-3 items-start absolute transition-all bottom-[-100%] cursor-default'
        style={activeKesfetPopup ? { bottom: "0" } : {}}
      >
        <h1 className='text-[22px] font-extrabold text-[#2b3548] dark:text-white'>
          Link Paylaş
        </h1>
        <input
          className='w-full outline-none px-4 py-2 rounded text-base bg-mainWhite placeholder-black/50 border border-mainWhite focus:bg-white focus:border-[#d1dde8] dark:bg-darkFour dark:border-darkFour dark:placeholder-white/50 dark:caret-white dark:text-white dark:focus:bg-darkFive dark:focus:border-darkFive'
          type='text'
          placeholder='Link yazın'
        />
        <textarea
          className='bg-mainWhite resize-none flex-1 w-full outline-none px-4 py-3 rounded text-base placeholder-black/50 border border-mainWhite focus:bg-white focus:border-[#d1dde8] dark:bg-darkFour dark:border-darkFour dark:placeholder-white/30 dark:caret-white dark:text-white dark:focus:bg-darkFive dark:focus:border-darkFive'
          placeholder='Paylaşmak istediğiniz linki birkaç kelimeyle anlatın'
        ></textarea>
        <button className='bg-mainGray dark:bg-mainBlue text-white font-medium rounded py-2 px-5'>
          Paylaş
        </button>
      </div>
    </div>
  );
}

export default KesfetPopup;
