// DropdownMenu.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';

const DropdownMenu = ({ text, links }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
            <div
                className='text-base font-medium text-dark-grey hover:opacity-50 mr-8 cursor-pointer md:hidden'
                onClick={(e) => {
                    e.preventDefault();
                    setIsOpen(!isOpen);
                }}
            >
                {text}
            </div>

            {isOpen && (
                <div className="fixed top-0 right-0 w-1/2 h-full bg-primary-light md:hidden">
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        {links.map((link, index) => (
                            <Link key={index} to={link.href} className="block px-4 py-2 text-sm font-primary text-dark-grey hover:bg-dark-grey hover:text-white" role="menuitem">{link.text}</Link>
                        ))}
                    </div>
                </div>
            )}

            <div className='hidden md:block text-base font-medium text-dark-grey hover:opacity-50 mr-8 cursor-pointer'
                onClick={(e) => {
                    e.preventDefault();
                    setIsOpen(!isOpen);
                }}>
                {text}
            </div>

            {isOpen && <div className="hidden md:block absolute top-full mt-2 w-48 rounded-md bg-primary-light">
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    {links.map((link, index) => (
                        <Link key={index} to={link.href} className="block px-4 py-2 text-sm font-primary text-dark-grey hover:bg-dark-grey hover:text-white" role="menuitem">{link.text}</Link>
                    ))}
                </div>
            </div>}
        </div>
    );
};

export default DropdownMenu;