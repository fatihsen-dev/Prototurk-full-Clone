import { useContext } from "react";
import mainContext from "../../../context/mainContext";

function DersIstekleriPopup() {
  const { activeDersIstekleriPopup, setAactiveDersIstekleriPopup } =
    useContext(mainContext);

  return (
    <div
      onClick={() => setAactiveDersIstekleriPopup(false)}
      style={
        activeDersIstekleriPopup
          ? { opacity: "1", pointerEvents: "all" }
          : { opacity: "0", pointerEvents: "none" }
      }
      className='cursor-pointer overflow-hidden absolute w-full h-full inset-0 z-20 bg-black/50 transition-all flex justify-center items-end'
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className='w-full 2xl:w-[50%] xl:w-[50%] lg:w-[50%] md:w-full sm:w-full rounded-sm bg-white dark:bg-darkThree flex flex-col p-6 gap-3 items-start absolute transition-all bottom-[-100%] cursor-default'
        style={activeDersIstekleriPopup ? { bottom: "0" } : {}}
      >
        <h1 className='text-[22px] font-extrabold text-[#2b3548] dark:text-white'>
          Ders İsteği Formu
        </h1>
        <div className='rounded-sm bg-violet-100 p-4 dark:bg-[#7353af]/20 text-dark/90 dark:text-white mb-2'>
          <h4 className='text-[#7353af] font-bold mb-2'>Lütfen okuyun</h4>
          <p className='text-sm 2xl:text-[15px] xl:text-[15px] lg:text-[15px] md:text-sm sm:text-sm'>
            Ders isteğinde bulunabilmeniz için üyeliğinizin en az 1 aylık olması
            gerekiyor. Ve ayda yalnızca 1 ders isteğinde bulunma hakkınız var.
            Lütfen bunu mantıklı bir şekilde kullanın. Ders isteğinizi mümkün
            olduğunca açık bir şekilde anlatın, gerekirse detay verin. Çok
            spesifik konularda da istekte bulunabilirsiniz ancak lütfen
            "e-ticaret sitesi" yapalım gibi isteklerde bulunmayın. Yani mümkünse
            seri olabilecek şeyler değil, bir ve ya birkaç videoda
            anlatabileceğimiz konular seçin.
          </p>
        </div>
        <textarea
          className='bg-mainWhite resize-none h-40 w-full outline-none px-4 py-3 rounded text-base placeholder-black/50 border border-mainWhite focus:bg-white focus:border-[#d1dde8] dark:bg-darkFour dark:border-darkFour dark:placeholder-white/30 dark:caret-white dark:text-white dark:focus:bg-darkFive dark:focus:border-darkFive'
          placeholder='Paylaşmak istediğiniz linki birkaç kelimeyle anlatın'
        ></textarea>
        <button className='bg-mainGray dark:bg-mainBlue text-white font-medium rounded py-2 px-5'>
          Gönder
        </button>
      </div>
    </div>
  );
}

export default DersIstekleriPopup;
