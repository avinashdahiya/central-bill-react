import React from 'react'

const CustomHeading = ({ titleBold,titleLight }) => {
  return (
    <div>
      <h1>
        <strong className=" font-bold text-3xl md:text-4xl lg:text-5xl text-[#1E1E1E] leading-[110%]  text-transform: capitalize">{titleBold}</strong>
        <span className="font-normal text-3xl md:text-4xl lg:text-5xl text-[#1E1E1E] leading-[110%]  text-transform: capitalize">{titleLight}</span>
      </h1>
      
    </div>
  );
};

export default CustomHeading

