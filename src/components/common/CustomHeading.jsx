import React from 'react'

const CustomHeading = ({ headClass, headSpan, headtext, headSpan2 }) => {
  return (
    <h2 className={` text-[34px] sm:text-5xl leading-[110%] capitalize text-[#00171F] ${headClass}`}> <span className='font-bold'>{headSpan}</span> {headtext} <span className='font-bold'>{headSpan2}</span> </h2>
  )
}

export default CustomHeading

