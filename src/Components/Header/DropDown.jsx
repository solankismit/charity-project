// // DropdownMenu.jsx
// import { useState } from 'react';
// import { Link } from 'react-router-dom';

// const DropdownMenu = ({ text, links }) => {
//     const [isOpen, setIsOpen] = useState(false);

//     return (
//         <div className="relative">
//             <div
//                 className='text-dark-grey hover:opacity-50 mr-8 cursor-pointer text-lg font-medium '
//                 onClick={(e) => {
//                     e.preventDefault();
//                     setIsOpen(!isOpen);
//                 }}
//             >
//                 {text}
//             </div>

// {/* For Mobile View */}
//     <div 
//         className={`fixed top-0 right-0 w-1/2 h-full bg-primary-light md:hidden transition-transform duration-300 ease-in-out ${isOpen ? 'transform translate-x-0' : 'transform translate-x-full'}`}
//     >
//         <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
//             {links.map((link, index) => (
//                 <Link key={index} to={link.href} className="block px-4 py-2 text-sm font-primary text-dark-grey hover:bg-dark-grey hover:text-white" role="menuitem">{link.text}</Link>
//             ))}
//         </div>
//     </div>



//         {/* For desktop View */}

//             {isOpen && <div className="hidden md:block absolute z-10 top-full mt-2 w-48 rounded-md bg-primary-light">
//                 <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
//                     {links.map((link, index) => (
//                         <Link key={index} to={link.href} className="block px-4 py-2 text-sm font-primary text-dark-grey hover:bg-dark-grey hover:text-white" role="menuitem">{link.text}</Link>
//                     ))}
//                 </div>
//             </div>}
//         </div>
//     );
// };

// export default DropdownMenu;



// Suggested code may be subject to a license. Learn more: ~LicenseLog:3336350816.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:3551606528.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:1355932811.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:853931363.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:2192651201.

// DropdownMenu.jsx
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const DropdownMenu = ({ text, links }) => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current &&
 !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div className="relative" ref={menuRef}>
            <div
                className='text-dark-grey hover:opacity-50 mr-8 cursor-pointer text-lg font-medium '
                onClick={(e) => {
                    e.preventDefault();
                    setIsOpen(!isOpen);
                }}
            >
                {text}
            </div>

            {/* For Mobile View */}
            <div
                className={`fixed top-0 right-0 w-1/2 h-full bg-primary-light md:hidden transition-transform duration-300 ease-in-out ${isOpen ? 'transform translate-x-0' : 'transform translate-x-full'}`}
            >
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    {links.map((link, index) => (
                        <Link key={index} to={link.href} className="block px-4 py-2 text-sm font-primary text-dark-grey hover:bg-dark-grey hover:text-white" role="menuitem">{link.text}</Link>
                    ))}
                </div>
            </div>

            {/* For desktop View */}
            {(
                <div className={`hidden md:block absolute z-10 top-full mt-2 w-48 rounded-md bg-primary-light transition-opacity duration-3 00 ease-in-out ${isOpen ? 'opacity-100' : 'opacity-0'}`} style={{ opacity: isOpen ? 1 : 0 }}>
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        {links.map((link, index) => (
                            <Link key={index} to={link.href} className="block px-4 py-2 text-sm font-primary text-dark-grey hover:bg-dark-grey hover:text-white" role="menuitem">{link.text}</Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default DropdownMenu;

