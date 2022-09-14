import React, { useEffect, useContext } from "react";
import Post from "./Post";
import mainContext from "../../../context/mainContext";

function DersIstekleri() {
  const { setAactiveDersIstekleriPopup } = useContext(mainContext);
  useEffect(() => {
    document.title = "Ders İstekleri | PROTOTURK";
  }, []);
  return (
    <div className='overflow-auto dark:bg-dark h-full w-full flex-1 flex flex-col items-start pb-10 px-5 2xl:px-40 xl:px-24 lg:px-14 md:px-5 sm:px-5'>
      <div className='flex-1 flex flex-col items-start container mx-auto py-8'>
        <div className='flex-1 flex flex-col items-start container mx-auto'>
          <h1 className='text-3xl text-mainGray dark:text-white font-bold'>
            Ders istekleri
          </h1>
          <div className='flex flex-col gap-4 items-start dark:bg-darkBlueTwo dark:text-white bg-gray-100 p-5 mt-5 relative mb-6'>
            <p className='dark:z-[2] text-sm 2xl:text-base xl:text-base lg:text-base md:text-sm sm:text-sm'>
              Merak ettiğiniz ve öğrenmek istediğiniz ancak yeterli kaynağın
              olmadığı ya da olan kaynakların yeterli gelmediği, ya da dil
              probleminden dolayı anlamakta zorluk çektiğiniz konularda bizlere
              fikirlerinizi belirtirseniz ona göre eğitim önceliklerini buradaki
              konulara ayırmak istiyoruz. Elbette bu isteklerin mümkün olduğunca
              bizim alanımız içinde olmasına dikkat edin, ya da belki farklı
              alanlarda farklı insanlar bir gün prototürk kanalında eğitim
              hazırlamak için bize{" "}
              <a className='text-mainGray dark:text-mainBlue' href='#'>
                prototurkcom@gmail.com
              </a>{" "}
              adresinden ulaşırlar, kim bilir!
            </p>
            <button
              onClick={() => setAactiveDersIstekleriPopup(true)}
              className='bg-mainGray dark:bg-mainBlue text-white font-medium rounded py-2 px-4'
            >
              Ders İsteğinde Bulun
            </button>
            <span className='flex w-10 h-10 bg-gray-100 left-0 top-1 absolute -skew-x-[45deg] rotate-[90deg] -z-10 dark:bg-darkBlueTwo dark:z-[1]'></span>
          </div>
          <Post />
        </div>
      </div>
    </div>
  );
}

export default DersIstekleri;
