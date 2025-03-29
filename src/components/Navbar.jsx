import React, { useState } from 'react';
import { Link,NavLink } from "react-router-dom";
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
                <li className='relative'>
              <NavLink 
                 to="/" 
             className={({ isActive }) => `${isActive ? "active-menu" : ""} hover:text-[#EC3E73] transition`}
                   >
               Home
           </NavLink>
          </li>
          <li className="group">
    <NavLink 
        to="/what-we-do" 
        className={({ isActive }) => `${isActive ? "active-menu" : ""} hover:text-[#EC3E73] transition flex items-center`}
    >
        What We Do <FaCaretDown className="ml-1" />
    </NavLink>
    {/* Submenu */}
    <div className={`absolute top-full left-0 bg-white text-black shadow-lg p-4 transition-all duration-300 transform scale-95 group-hover:scale-100 opacity-0 group-hover:opacity-100`}>
        <SubMenu />
    </div>
</li>

                    <li className='relative'>
    <NavLink 
        to="/about" 
        className={({ isActive }) => `${isActive ? "active-menu" : ""} hover:text-[#EC3E73] transition`}
    >
        Who We Are
    </NavLink>
</li>
<li className='relative'>
    <NavLink 
        to="/careers" 
        className={({ isActive }) => `${isActive ? "active-menu" : ""} hover:text-[#EC3E73] transition`}
    >
        Careers
    </NavLink>
</li>

<li className='relative'>
    <NavLink 
        to="/portfolio" 
        className={({ isActive }) => `${isActive ? "active-menu" : ""} hover:text-[#EC3E73] transition`}
    >
        Portfolio
    </NavLink>
</li>

<li className='relative'>
    <NavLink 
        to="/reach-us" 
        className={({ isActive }) => `${isActive ? "active-menu" : ""} hover:text-[#EC3E73] transition`}
    >
        Reach Us
    </NavLink>
</li>

                </ul>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-2xl" onClick={() => setMobileMenu(!mobileMenu)}>
                    {mobileMenu ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenu && (
                <ul className="md:hidden bg-[#050941] text-white flex flex-col p-4 text-[14px] leading-loose">
                    <li>
    <NavLink 
        to="/" 
        className={({ isActive }) => `${isActive ? "active-menu" : ""} hover:text-[#EC3E73] transition`}
    >
        Home
    </NavLink>
</li>

<li onClick={showSubMenu} className="cursor-pointer flex items-center">
    What We Do <FaCaretDown className="ml-1" />
</li>
{toggle && <SubMenu />}

<li>
    <NavLink 
        to="/about" 
        className={({ isActive }) => `${isActive ? "active-menu" : ""} hover:text-[#EC3E73] transition`}
    >
        Who We Are
    </NavLink>
</li>

<li>
    <NavLink 
        to="/careers" 
        className={({ isActive }) => `${isActive ? "active-menu" : ""} hover:text-[#EC3E73] transition`}
    >
        Careers
    </NavLink>
</li>

<li>
    <NavLink 
        to="/portfolio" 
        className={({ isActive }) => `${isActive ? "active-menu" : ""} hover:text-[#EC3E73] transition`}
    >
        Portfolio
    </NavLink>
</li>

<li>
    <NavLink 
        to="/reach-us" 
        className={({ isActive }) => `${isActive ? "active-menu" : ""} hover:text-[#EC3E73] transition`}
    >
        Reach Us
    </NavLink>
</li>

                </ul>
            )}
        </nav>
    );
}
