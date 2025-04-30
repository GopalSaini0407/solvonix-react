import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from "react-router-dom"; // ✅ useLocation import
import { FaCaretDown, FaBars, FaTimes } from "react-icons/fa";
import SubMenu from './SubMenu';
import { motion } from "framer-motion";

export default function Navbar() {
  const [bgColor, setBgColor] = useState("#01012B");
  const [toggle, setToggle] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const location = useLocation(); // ✅ useLocation for route change detection

  // ✅ Close mobile menu on route change
  useEffect(() => {
    setMobileMenu(false);
    setToggle(false); // also close submenu if open
  }, [location.pathname]);

  // ✅ Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setBgColor("#000022F2");
      } else {
        setBgColor("#01012B");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showSubMenu = () => {
    setToggle(!toggle);
  };

  return (
    <nav className={`text-white shadow-lg sticky duration-300 transition-all w-full top-0 z-[9999]`} style={{ backgroundColor: bgColor }}>
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <motion.div className="w-[200px]"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Link to="/">
            <img src="images/logo.png" alt="logo" className="w-full" />
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <ul className="hidden navabr md:flex items-center space-x-6 relative sm:text-sm lg:text-base">
          <li className='relative'>
            <NavLink to="/" className={({ isActive }) => `${isActive ? "active-menu" : ""} hover:text-[#EC3E73] transition`}>Home</NavLink>
          </li>

          <li className="group">
            <NavLink to="/what-we-do" className={({ isActive }) => `${isActive ? "active-menu" : ""} hover:text-[#EC3E73] transition flex items-center`}>
              What We Do <FaCaretDown className="ml-1" />
            </NavLink>
            <div className={`absolute top-10 left-0 bg-white text-black shadow-lg p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300`}>
              <SubMenu />
            </div>
          </li>

          <li className='relative'>
            <NavLink to="/about" className={({ isActive }) => `${isActive ? "active-menu" : ""} hover:text-[#EC3E73] transition`}>Who We Are</NavLink>
          </li>
          <li className='relative'>
            <NavLink to="/careers" className={({ isActive }) => `${isActive ? "active-menu" : ""} hover:text-[#EC3E73] transition`}>Careers</NavLink>
          </li>
          <li className='relative'>
            <NavLink to="/portfolio" className={({ isActive }) => `${isActive ? "active-menu" : ""} hover:text-[#EC3E73] transition`}>Portfolio</NavLink>
          </li>
          <li className='relative'>
            <NavLink to="/reach-us" className={({ isActive }) => `${isActive ? "active-menu" : ""} hover:text-[#EC3E73] transition`}>Reach Us</NavLink>
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
            <NavLink to="/" className={({ isActive }) => `${isActive ? "active-menu" : ""} hover:text-[#EC3E73] transition`}>Home</NavLink>
          </li>
          <li onClick={showSubMenu} className="cursor-pointer flex items-center">
            What We Do <FaCaretDown className="ml-1" />
          </li>
          {toggle && <SubMenu />}
          <li>
            <NavLink to="/about" className={({ isActive }) => `${isActive ? "active-menu" : ""} hover:text-[#EC3E73] transition`}>Who We Are</NavLink>
          </li>
          <li>
            <NavLink to="/careers" className={({ isActive }) => `${isActive ? "active-menu" : ""} hover:text-[#EC3E73] transition`}>Careers</NavLink>
          </li>
          <li>
            <NavLink to="/portfolio" className={({ isActive }) => `${isActive ? "active-menu" : ""} hover:text-[#EC3E73] transition`}>Portfolio</NavLink>
          </li>
          <li>
            <NavLink to="/reach-us" className={({ isActive }) => `${isActive ? "active-menu" : ""} hover:text-[#EC3E73] transition`}>Reach Us</NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
}
