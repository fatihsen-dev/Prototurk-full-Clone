import React from "react";
import LangSwiper from "../swiper/langSwiper/LangSwiper";
import NewPostSwiper from "../swiper/commentSwiper/NewPostSwiper";
import NewEducation from "../swiper/NewEducation/NewEducation";
import NewUsers from "../swiper/NewUsers/NewUsers";
import HeaderText from "../HeaderText/HeaderText";
import Instagram from "../social/Instagram";
import Twitter from "../social/Twitter";
import Telegram from "../social/Telegram";

function Content() {
  return (
    <div className='dark:bg-dark overflow-auto h-full w-full flex-1 flex flex-col items-start pb-10 px-5 2xl:px-40 xl:px-24 lg:px-14 md:px-5 sm:px-5'>
      <div className='flex-1 flex flex-col items-start container mx-auto gap-2 py-8'>
        <HeaderText
          HText='Kendine değer kat!'
          descText="İyi bir kariyer için, doğru bir başlangıç gerekir. Prototürk'de bir çok
        dil ve teknolojiye ait derslerle doğru bir başlangıç yapmaya hazırsın!"
        />
        <LangSwiper />
        <hr className='border-gray-100/80 mb-10 w-full dark:border-darkBorder' />
        <Twitter />
        <hr className='border-gray-100/80 mb-10 w-full dark:border-darkBorder' />
        <HeaderText
          HText='Birlikte daha güçlüyüz!'
          descText='Kodlama yaparken takıldığında ya da bazen kafanı dağıtmaya ihtiyacın olduğunda bölümü seni bekliyor. Merak ettiklerini sor, bildiklerini cevapla!'
        />
        <NewPostSwiper />
        <hr className='border-gray-100/80 mb-10 w-full dark:border-darkBorder' />
        <HeaderText
          HText='Yenilikleri birlikte takip edelim!'
          descText='Her gün yeni bir şeyler çıkıyor ve gelişim durmadan devam ediyor. Kalemine değil koduna güveniyorsan gel birlikte anlatalım tüm bu yenilikleri.'
        />
        <NewEducation />
        <hr className='border-gray-100/80 mb-10 w-full dark:border-darkBorder' />
        <Instagram />
        <hr className='border-gray-100/80 mb-10 w-full dark:border-darkBorder' />
        <HeaderText
          HText='Kimleri görüyoruz!'
          descText='Hoşgeldin, evet sen de aramıza hoşgeldin. Bu ailenin bir parçası olmak istediğin için teşekkürler. Şimdi hemen birilerini takip etmeye başla ki akışın biraz canlansın!'
        />
        <NewUsers />
        <hr className='border-gray-100/80 mb-10 w-full dark:border-darkBorder' />
        <Telegram />
      </div>
    </div>
  );
}

export default Content;
