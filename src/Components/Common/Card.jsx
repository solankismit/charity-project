import React from 'react';

const Card = ({ Image, Title, Description, Button }) => {
    return (
        <a class="flex flex-col group bg-white border shadow-sm rounded-xl overflow-hidden hover:shadow-lg transition" href="#">
            <div class="relative pt-[50%] sm:pt-[60%] lg:pt-[80%] rounded-t-xl overflow-hidden">
                <img class="size-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl"
                    src={Image} alt="Image" />
            </div>
            <div class="text-center divide-y">
                <div className='p-4 md:p-5 '>

                <h3 class="text-lg font-medium text-dark-grey  tracking-tight">
                    {Title}
                </h3>
                <p class="mt-1 text-medium-grey text-base">
                    {Description}
                </p>
                </div>
                <div class="flex items-center justify-between mt-3 p-4 md:p-5 ">
                    <a href="#" class="text-primary font-medium hover:underline">
                        {Button}
                    </a>
                    <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                </div>
            </div>
        </a>
    );
};

export default Card;