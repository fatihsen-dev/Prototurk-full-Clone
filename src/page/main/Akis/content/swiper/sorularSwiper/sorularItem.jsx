function SorularItem({ userName, avatar, time }) {
  return (
    <div className='flex justify-center w-full h-full overflow-hidden'>
      <a
        href='#'
        className='grid place-items-center bg-white border rounded-sm h-full w-full gap-6 flex-col z-10 select-none p-5'
      >
        <div className='grid place-items-center gap-1 w-full'>
          <img className='rounded-full' src={avatar} alt={avatar} />
          <p className='font-semibold text-[#32445a]'>@{userName}</p>
          <p className='text-gray-500 opacity-80'>{time}</p>
        </div>
        <button className='w-full bg-[#32445a] text-white py-1 rounded'>
          Takip et
        </button>
      </a>
    </div>
  );
}
SorularItem.defaultProps = {
  avatar: "../img/defaultAvatar.png",
  userName: "Tayfun",
  time: "192 soru",
};

export default SorularItem;
