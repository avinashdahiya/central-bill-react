import React from 'react'


const Custombtn = ({ btnText, btnClass, whitesvg, blacksvg }) => {
  return (
    <button className={`flex items-center outline-0 gap-2   font-bold text-base leading-[100%] capitalize text-white py-4 px-5 rounded-bl-[45px] rounded-tr-[50px] rounded-br-[50px] transition-all duration-700 ease-in-out bg-[#00A8E8] cursor-pointer hover:scale-105 group ${btnClass}`}>{btnText} <span className="transform transition-transform duration-300 group-hover:translate-x-1" >{whitesvg}</span> <span className="transform transition-transform duration-300 group-hover:translate-x-1">{blacksvg}</span> </button>
    
  );
};

export default Custombtn;

