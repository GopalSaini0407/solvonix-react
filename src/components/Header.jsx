import React from 'react'
import Navbar from './Navbar';
import HeaderBottom from './HeaderBottom';
export default function Header() {
  return (
    <header className='shadow-xl bg-[#01012B] pb-20'>
        <div className='max-w-[1200px] mx-auto'>
            <Navbar/>
        </div>
        <div className='max-w-[1200px] mx-auto'>
        <HeaderBottom/>
        </div>

    </header>
  )
}
