import React from 'react';

const Custombtn = ({ btn, className, arrow }) => {
  return (
    <button
      className={`cursor-pointer text-[16px] leading-[100%] py-[15px] px-[20px] 
      rounded-[0px_100px_100px_70px] flex items-center justify-center ${className}`}
    >
      {btn} {arrow || null} {/* Only render the arrow if it's passed */}
    </button>
  );
};

export default Custombtn;