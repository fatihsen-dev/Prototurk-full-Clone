import SorularSwiper from "./swiper/sorularSwiper/sorular";

function sorular() {
  return (
    <>
      <div className='w-full border py-8 gap-5 flex flex-col justify-center items-center px-5'>
        <img className='w-24' src='https://prototurk.com/public/img/qa.svg' />
        <h3 className='text-lg text-gray-600'>
          Takip ettiğiniz kişiler arasında soru soran kimse bulunmuyor.
        </h3>
      </div>
      <SorularSwiper />
    </>
  );
}

export default sorular;
