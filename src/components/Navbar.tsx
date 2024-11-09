"use client";

import React from 'react'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from 'react';
import Link from 'next/link';

const Nav = () => {
  const [isMenuOpen , setIsMenuOpen ] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <div className='pt-10 border-b-4 bg-yellow-400 sm:items-sm'>
        <div className='flex justify-between items-center'>
            <div className=' text-white font-bold h-15 text-5xl ml-5' data-aos="zoom-in-up" style={{backgroundPosition:"left 100px top 100px"}} >Azaan</div>

<ul className='gap-10 lg:gap-16 hidden md:flex font-bold mr-5'>
  <li> <Link href={'/'}>Home</Link></li>
  <li> <Link href={'/about'}>About</Link></li>
  <li> <Link href={'/contact'}>Contact</Link></li>
  
  
   </ul>
                <div className='md:hidden' onClick={toggleMenu}>
                    {isMenuOpen ? <AiOutlineClose size={30} /> :
                    <AiOutlineMenu size={30} />
                    }
                </div>
        </div>

        {isMenuOpen && (
          <ul className='flex gap-8 mt-4 md:hidden ml-[100px]'>
            <li><Link href={'/'} onClick={toggleMenu}>Home</Link></li>
            <li><Link href={'/about'} onClick={toggleMenu}>About</Link></li>
            <li><Link href={'/contact'} onClick={toggleMenu}>Contact</Link></li>
          </ul>
        )}
    </div>
  )
}

export default Nav