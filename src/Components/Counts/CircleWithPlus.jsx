
import { useState } from 'react';

const CircleWithPlus = ({number,text}) => {


  return (
    <div 
      className="relative inline-block"
    >
      <div 
        className={`circle-with-plus
          w-24 h-24 rounded-full flex items-center justify-center 
          bg-yellow-500 
          transition-all duration-[500ms] 
          hover:bg-white hover:scale-110
        `}
      >
        <span className="text-3xl font-bold text-dark-grey font-oto cursor-default">{number??"10"}</span> {/* Replace with your number */}
      </div>
      <div 
        className={` plus-icon
          absolute top-0 right-0 transform translate-x-[10%] -translate-y-[10%] 
          text-white text-5xl leading-7 
        `}
      >
        +
      </div>
      <p className="text-white text-center mt-2">{text??""}</p>
    </div>
  );
};

export default CircleWithPlus;
