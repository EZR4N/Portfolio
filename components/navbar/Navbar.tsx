'use client'
import React, {useContext, useState} from 'react'
import Image from 'next/image'
import { LanguagesContext } from '@/context/language_context'
import Link from 'next/link'

const Navbar = () => {

    const context = useContext( LanguagesContext )
    const [isOpen, setIsOpen] = useState(false);
    
    if (!context) {
      throw new Error("useContext debe usarse dentro de LanguagesProvider");
    }

    const { english, changetoEnglish, changetoSpanish } = context

    const navbarEnglish = [
      'About Me',
      'Tech Stack',
      'Projects',
      'Contact'
    ]

    const navbarSpanish = [
      'Sobre mi',
      'Tecnologías',
      'Proyectos',
      'Contacto'
    ]

    return (
    <nav className=' w-full flex flex-row h-25 justify-end items-center  '>
        <div className='flex'>
            <Image
            onClick={ () => {
              changetoEnglish()
            }} 
            className='transition-transform duration-500 rounded-3xl hover:scale-105 hover:opacity-80 ease-in-out cursor-pointer mr-1'
            src='/images/icono-eeuu.png'
            alt='ee uu button'
            width={40}
            height={40}/>

            <Image
            onClick={ () => {
              changetoSpanish()
            }}
            className='transition-transform duration-500 hover:scale-105 hover:opacity-80 ease-in-out cursor-pointer'
            src='/images/icono-arg.png'
            alt='argentina button'
            width={40}
            height={40}
            />
        </div>

    <div className='navbarBurgerButtonContainer'>      
    <nav className=" rounded-4xl  mr-2  text-white px-4 ml-2 py-3 relative">
      <div className="flex items-center justify-between">
        
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isOpen
                  ? 'M6 18L18 6M6 6l12 12' // X
                  : 'M4 6h16M4 12h16M4 18h16' // ☰
              }
            />
          </svg>
        </button>

        <ul className="hidden md:flex space-x-6">
          <li><Link href="#AboutMe"  className="hover:text-[#3FC1E9] font-bold"> {english ? navbarEnglish[0] : navbarSpanish[0]}</Link></li>
          <li><Link href="#TechStack" className="hover:text-[#3FC1E9] font-bold">{english ? navbarEnglish[1] : navbarSpanish[1]}</Link></li>
          <li><Link href="#Projects" className="hover:text-[#3FC1E9] font-bold">{english ? navbarEnglish[2] : navbarSpanish[2]}</Link></li>
          <li><Link href="#Contact" className="hover:text-[#3FC1E9] font-bold">{english ? navbarEnglish[3] : navbarSpanish[3]}</Link></li>
        </ul>
      </div>

      
      <div
        className={`
          fixed top-0 right-0 h-full w-2/3 bg-[#0D1117]  text-white z-50 transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
          md:hidden
        `}
      >
        <div className="p-4 flex flex-col space-y-4">
          <button
            className="self-end"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            ✖
          </button>
          <Link  className="hover:underline text-3xl font-bold text-[#3FC1E9]" onClick={() => setIsOpen(false)} href="#AboutMe">{english ? navbarEnglish[0] : navbarSpanish[0]}</Link>
          <Link href="#TechStack" className="hover:underline text-2xl font-bold text-[#3FC1E9]" onClick={() => setIsOpen(false)}>{english ? navbarEnglish[1] : navbarSpanish[1]}</Link>
          <Link href="#Projects" className="hover:underline text-2xl font-bold text-[#3FC1E9]" onClick={() => setIsOpen(false)}>{english ? navbarEnglish[2] : navbarSpanish[2]}</Link>
          <Link href="#Contact" className="hover:underline text-2xl font-bold text-[#3FC1E9]" onClick={() => setIsOpen(false)}>{english ? navbarEnglish[3] : navbarSpanish[3]}</Link>        
        </div>
      </div>
    </nav>
        </div>
    </nav>
  )
}

export default Navbar