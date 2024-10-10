import React, { useState } from 'react';
import { IoMenuSharp, IoMailSharp } from "react-icons/io5";

interface NavbarProps {
    links: { name: string; href: string }[];
}

const NavbarLogoCenterMenuLeftButtonRight: React.FC<NavbarProps> = ({ links }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="absolute top-0 left-0 w-full flex justify-between items-center p-4 z-50">
            {/* Menu Button */}
            <div className="flex items-center">
                <button
                    type='button'
                    className="text-gray-600 hover:text-gray-800"
                    onClick={toggleMenu}
                    onMouseEnter={toggleMenu}
                >
                    <IoMenuSharp size={24} />
                </button>

                {/* Fly-out menu with links */}
                {isMenuOpen && (
                    <div
                        className="absolute top-12 left-0 w-full h-auto bg-white/30 backdrop-blur-md backdrop-brightness-125 backdrop-contrast-125 shadow-sm p-4 z-40 rounded-lg border border-white/20"
                        onMouseLeave={() => {
                            setIsMenuOpen(false);
                        }}>
                        {links.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                className="text-gray-600 hover:text-gray-800 block py-2 font-semibold"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                )}
            </div>

            {/* Logo */}
            <div className="flex items-center justify-center w-full md:w-auto">
                <a href="#" className="font-bold hover:text-gray-400 font-pacifico text-2xl md:text-3xl">
                    Lewis Ng'ang'a
                </a>
            </div>

            {/* Contact Button */}
            <div className="flex items-center">
                <button
                    className="
                        bg-navOrange text-white px-3 py-1 md:px-4 md:py-2 rounded-full shadow-md shadow-gray-600
                        hover:opacity-80 hover:scale-90 transition-all duration-300 ease-in-out 
                        text-sm md:text-base
                        z-10 flex items-center justify-center
                    "
                    onClick={() => console.log("Button Clicked!")}
                >
                    {/* Show the text on medium and larger screens */}
                    <span className="hidden md:block">Contact Me</span>

                    {/* Show the mail icon on small screens */}
                    <IoMailSharp size={24} className="block md:hidden" />
                </button>
            </div>
        </nav>
    );
};

export default NavbarLogoCenterMenuLeftButtonRight;
