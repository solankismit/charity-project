
import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const Banner = () => {
    return (
        <div className="bg-primary-light banner " >
            <div className="flex items-center h-screen md:h-max p-4 w-full px-3 mx-auto  max-w-lg xl:max-w-xl xxl:max-w-xxl">
            {/* <div className="flex items-center  p-4 container mx-auto "> */}
                <div className="relative flex-1 mt-20 md:my-40">
                    <h1 className="text-5xl md:text-8xl mb-7 w-4/5 md:w-3/4 lg:w-1/2 font-bold">Help for Hopeless</h1>
                    <h2 className="text-base md:text-lg text-gray-500 w-4/5 lg:w-1/3 mb-7">Fight for right cause for save the world. Every child deserves a better future!</h2>
                    <Link style={{ background: 'linear-gradient(to right, #2b3a31, #3F452C, #665921, #8D6E17, #AD7F0F)' }} className=" relative text-white px-8 py-5 leading-none rounded pr-14 inline-block">
                        <span className='uppercase text-[13px] md:text-[14px]'>
                            Explore Causes
                        <FaArrowRight className='text-[#8D6E17] bg-white rounded h-[34px] w-[34px] absolute right-0 top-0 transform -translate-x-3 translate-y-3 p-2
                        ' />
                        </span>
                    </Link>

<div className='absolute -left-44 -rotate-90 transform -translate-y-1/2 top-1/2 border-b-2 border-primary '>


                    <p className="text-gray-600  px-7">Help the poor children</p>
                    </div>
                </div>
                {/* <div className="border-l border-gray-200 h-12 mx-4"></div> */}
            </div>
        </div>
    );
};

export default Banner;