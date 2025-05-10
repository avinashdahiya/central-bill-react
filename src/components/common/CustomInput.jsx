import React from 'react'

const CustomInput = ({ type, placeholder, inputClass }) => {
    return (
        <input
            className={`font-normal text-base leading-[110%] text-[#00171F80] z-1 outline-0 border-[#00000033] w-full bg-[#FEFEFE] px-[22px] border max-w-[476px] h-[66px] rounded-tr-[100px] rounded-br-[100px] rounded-bl-[50px] ${inputClass}`}
            type={type}
            placeholder={placeholder}
        />    )
}

export default CustomInput

