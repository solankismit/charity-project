
import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const Banner = () => {
    return (
        <div className="bg-primary-light banner" >
            <div className="flex items-center border border-gray-200 rounded-lg p-4">
                <div className="flex-1 my-40">
                    <h1 className="text-8xl mb-7 w-1/2 font-bold">Help for Hopeless</h1>
                    <h2 className="text-lg text-gray-500 w-1/3 mb-7">Fight for right cause for save the world. Every child deserves a better future!</h2>
                    <Link style={{ background: 'linear-gradient(to right, #2b3a31, #3F452C, #665921, #8D6E17, #AD7F0F)' }} className=" relative text-white px-9 py-5 rounded mt-2">
                        Explore Causes
                        <FaArrowRight className='text-black bg-white rounded h-[34px] w-[34px] absolute right-0 top-0 transform translate-x-1 translate-y-3 p-2
                        ' />
                    </Link>
                    <p className="text-gray-600 mt-2">Text</p>
                </div>
                {/* <div className="border-l border-gray-200 h-12 mx-4"></div> */}
            </div>
        </div>
    );
};

export default Banner;