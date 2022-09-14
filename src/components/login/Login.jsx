import {useContext} from "react";
import mainContext from "../../context/mainContext";

export default function Login() {
  const {loginPage, setLoginPage} = useContext(mainContext);

  return (
    <>
      {loginPage && (
        <div className='absolute inset-0 w-full h-full bg-black/80 z-20 flex justify-center items-center'>
          <div className='dark:text-white w-[400px] bg-white dark:bg-darkTwo rounded-sm'>
            <div className='flex w-full p-4 justify-between items-center border-b  dark:border-darkBorder'>
              <h1 className='font-bold text-mainGray  text-xl dark:text-white'>
                Giriş yap
              </h1>
              <button
                onClick={() => setLoginPage(false)}
                className='text-xl text-mainGray/70 dark:text-mainBlue'>
                <i class='fa-solid fa-xmark'></i>
              </button>
            </div>
            <div className='p-4 flex flex-col gap-4'>
              <div className='flex flex-col justify-center items-start'>
                <label htmlFor='input1'>Kullanıcı adı</label>
                <input
                  className='outline-none bg-mainWhite focus:bg-mainGrayTwo/20 rounded-sm w-full text-sm  py-2 px-2 dark:bg-darkBorder dark:focus:bg-darkBorder/90 transition-colors'
                  type='text'
                  id='input1'
                />
              </div>
              <div className='flex flex-col justify-center items-start'>
                <label htmlFor='input1'>Şifre</label>
                <input
                  className='outline-none bg-mainWhite focus:bg-mainGrayTwo/20 rounded-sm w-full text-sm  py-2 px-2 dark:bg-darkBorder dark:focus:bg-darkBorder/90 transition-colors'
                  type='text'
                  id='input1'
                />
              </div>
              <div>
                <button className='text-white rounded font-medium place-content-center'>
                  <span className='bg-mainGray dark:bg-mainBlue rounded px-5 grid place-content-center py-2'>
                    Giriş yap
                  </span>
                </button>
              </div>
              <div className='flex flex-col justify-center items-start w-full border-t pt-4 dark:border-darkBorder'>
                <span className='text-sm text-black/80 dark:text-white/30'>
                  Hesabın yok mu?
                </span>
                <button className='font-bold text-mainGray dark:text-mainBlue'>
                  Kayıt ol
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
