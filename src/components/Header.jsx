import React from 'react'
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import HeaderBottom from './HeaderBottom';

export default function Header() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <header className={`bg-[#01012B] pb-20 ${isHome ? 'home' : ''}`}>
      <div className='max-w-[1200px] mx-auto'>
        <HeaderBottom/>
      </div>
    </header>
  )
}

