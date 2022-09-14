import Datas from "../../../Data/data.json";

export default function Post() {
  return (
    <ul className='w-full flex flex-col gap-4'>
      {Datas &&
        Datas.map((data, index) => (
          <li
            className='flex flex-col border p-4 gap-4 rounded-sm dark:border-darkBorder'
            key={index}
          >
            <div className='flex gap-2 flex-col 2xl:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col whitespace-nowrap text-sm 2xl:text-base xl:text-base lg:text-base md:text-base sm:text-sm'>
              <a className='flex gap-2 items-center' href='#'>
                <img className='w-6' src={data.avatar} alt={data.avatar} />
                <span className='text-mainGray dark:text-mainBlue'>
                  {data.firtName}
                </span>
              </a>
              <div className='dark:text-white flex gap-1'>
                tarafından
                <span className='text-black/50 dark:text-white/30'>
                  {data.day} gün önce
                </span>
                istekte bulunuldu.
              </div>
            </div>
            <div className='border-l-2 border-mainGray dark:border-mainBlue dark:text-white pl-2 py-2 text-base font-medium text-dark 2xl:text-xl xl:text-xl lg:text-xl md:text-lg sm:text-base'>
              {data.text}
            </div>
            <button className='ders-post-btn flex relative items-center text-mainGrayTwo gap-1 font-medium hover:text-green-500'>
              <svg
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
                width='1em'
                height='1em'
                className='text-2xl peer-focus:bg-red-500'
              >
                <path
                  d='M13.162 3.813a2 2 0 01.465.465l6.674 9.343a1 1 0 01-1.102 1.539l-4.032-1.21a1 1 0 00-1.277.816l-.767 5.375a1 1 0 01-.99.859h-.266a1 1 0 01-.99-.859l-.767-5.375a1 1 0 00-1.278-.816l-4.031 1.21a1 1 0 01-1.102-1.54l6.674-9.342a2 2 0 012.79-.465z'
                  fill='currentcolor'
                  fill-rule='evenodd'
                ></path>
              </svg>{" "}
              {data.randomNumber}
              <span className='absolute bg-mainGray text-white px-2 py-0.5 -left-3 transition-all -top-4 opacity-0 rounded-sm text-sm dark:bg-mainBlue'>
                Beğen
              </span>
            </button>
          </li>
        ))}
    </ul>
  );
}
