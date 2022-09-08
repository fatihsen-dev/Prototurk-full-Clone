import React from "react";

function HeaderText({ HText, descText }) {
  return (
    <div className='flex justify-center flex-col w-full gap-4'>
      <h1 className='font-bold text-3xl text-[#32445a]'>{HText}</h1>
      <span>{descText}</span>
    </div>
  );
}

export default HeaderText;
