import React from 'react'

const CustomContent = ({content,className}) => {
  return (
          <p className={` font-noraml text-base leading-[150%] ${className}`}>{content}</p>

  )
}

export default CustomContent
