import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FaCaretDown, FaBars, FaTimes } from "react-icons/fa";
import SubMenu from './SubMenu';

export default function Navbar() {
    const [toggle, setToggle] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);

    const showSubMenu = () => {
        setToggle(!toggle);
    };

    return (
        <nav className="text-white shadow-lg">
            <div className="container mx-auto flex justify-between items-center p-4">
                
                {/* Logo */}
                <div className="w-[200px]">
                    <Link to="/">
                        <img src="images/logo.png" alt="logo" className="w-full" />
                    </Link>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden navabr md:flex items-center space-x-6 relative sm:text-sm lg:text-base">
                    <li  className='relative'><Link to="/" className="hover:text-[#EC3E73] transition">Home</Link></li>
                    <li className="group">
                        <Link to="/" className="hover:text-[#EC3E73] transition flex items-center">What We Do <FaCaretDown className="ml-1" /></Link>
                        {/* Submenu */}
                        <div className={`absolute top-full left-0 bg-white text-black  shadow-lg p-4 transition-all duration-300 transform scale-95 group-hover:scale-100 opacity-0 group-hover:opacity-100`}>
                            <SubMenu />
                        </div>
                    </li>
                    <li className='relative'><Link to="/about" className="hover:text-[#EC3E73] transition">Who We Are</Link></li>
                    <li className='relative'><Link to="/careers" className="hover:text-[#EC3E73] transition">Careers</Link></li>
                    <li className='relative'><Link to="/portfolio" className="hover:text-[#EC3E73] transition">Portfolio</Link></li>
                    <li className='relative'><Link to="/reach-us" className="hover:text-[#EC3E73] transition">Reach Us</Link></li>
                </ul>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-2xl" onClick={() => setMobileMenu(!mobileMenu)}>
                    {mobileMenu ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenu && (
                <ul className="md:hidden bg-[#050941] text-white flex flex-col p-4 text-[14px] leading-loose">
                    <li><Link to="/" className="hover:text-[#EC3E73] transition">Home</Link></li>
                    <li onClick={showSubMenu} className="cursor-pointer flex items-center">What We Do <FaCaretDown className="ml-1" /></li>
                    {toggle && <SubMenu />}
                    <li><Link to="/about" className="hover:text-[#EC3E73] transition">Who We Are</Link></li>
                    <li><Link to="/careers" className="hover:text-[#EC3E73] transition">Careers</Link></li>
                    <li><Link to="/portfolio" className="hover:text-[#EC3E73] transition">Portfolio</Link></li>
                    <li><Link to="/reach-us" className="hover:text-[#EC3E73] transition">Reach Us</Link></li>
                </ul>
            )}
        </nav>
    );
}
