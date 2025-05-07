'use client'
import React, { useContext } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Typewriter } from 'react-simple-typewriter'
import { LanguagesContext } from '@/context/language_context'

const aboutMeEnglish = [
  'Hi! I´m',
  'I’m a web developer and Systems Engineering student with experience building web applications using technologies like React, Next.js, Node.js, and SQL. I’m passionate about creating dynamic, responsive websites and always give my best in every project. I enjoy exploring new technologies and learning throughout the process. I’m currently looking for my first opportunity in the tech industry, aiming to grow professionally and contribute as a valuable team member',
  'Download CV',
  'Web Developer',
  '/cv/CV Orellana E.pdf'
]

const aboutMeSpanish = [
  'Hola! soy',
  'Soy desarrollador web y estudiante de Ingeniería en Sistemas, con experiencia en la creación de aplicaciones web utilizando tecnologías como React, Next.js, Node.js y SQL. Me apasiona construir sitios dinámicos y responsive, y disfruto dar lo mejor de mí en cada proyecto. Siempre estoy explorando nuevas tecnologías y aprendiendo en el camino. Actualmente, estoy en busca de mi primera oportunidad en el mundo IT, con el objetivo de seguir creciendo profesionalmente y aportar valor como parte de un equipo de desarrollo.',
  'Descargar CV',
  'Desarrollador Web',
  '/cv/Curriculum Orellana Ezequiel.pdf'
]


        

const About_me = () => {
  const context = useContext(LanguagesContext)
  
  if (!context) {
    throw new Error('fuera de context')
  }
  
  const { english } = context
  return (
    <article id='AboutMe' className='lg:flex aboutmeArticle mt-30 scroll-mt-30 '>
        <figure className='lg:mt-7'>
            <Image className='w-80 rounded-4xl shadow-[0_1px_14px_#3FC1E9]' src={'/images/ezequiel.png'} alt='ezequiel photo' width={500} height={500}/>
        </figure>
        <div className='lg:ml-15'>
        <h2 className='text-4xl mt-5'>{
          english 
          ? aboutMeEnglish[0]
          : aboutMeSpanish[0]
          }</h2>
        <h1 className='--font-sans text-4xl text-[#61DAFB]  mt-2'>Ezequiel Orellana</h1>
        <h2 className='text-2xl mt-1'>
        <span style={{ color: '#FFFFFF', fontWeight: 'bold' }}>
          
          <Typewriter
            words={[english ? aboutMeEnglish[3] : aboutMeSpanish[3]]}
            loop={800000}
            cursor
            cursorStyle='_'
            typeSpeed={150}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
        </h2>
        <p className='w-75 mt-1'>
          {
            english
            ? aboutMeEnglish[1]
            : aboutMeSpanish[1]
          }
        </p>

        <div className='lg:flex'>
        <div className='aboutmeIcons mt-4 flex w-30 justify-around'>
        <Link className='mr-2' href='https://github.com/EZR4N'>
            <Image
            className='transition-transform duration-300 transform hover:scale-110 ease-in border border-[#3FC1E9] hover:bg-[#3FC1E9] cursor-pointer hover:shadow-[0_1px_14px_#3FC1E9] w-12 p-2 h-12 rounded-lg mr-2'
            src='/images/github-icon.png' 
            alt='github icon'
            width={30}
            height={30}/>
        </Link>

        <Link href='https://www.linkedin.com/in/ezequiel-orellana/'>
            <Image
            className='transition-transform duration-300 transform hover:scale-110 ease-in border border-[#3FC1E9] hover:bg-[#3FC1E9] cursor-pointer hover:shadow-[0_1px_14px_#3FC1E9] w-12 p-2 h-12 rounded-lg'
            src='/images/linkedin-icon.png'
            alt='linkedin icon'
            width={300}
            height={300}/>
        </Link>
        </div>

        <a href={
          english
          ? aboutMeEnglish[4]
          : aboutMeSpanish[4]
        } download>
        <div className=' lg:ml-5 downloadCv transition-transform duration-500 transform hover:scale-105 hover:shadow-[0_1px_14px_#3FC1E9] cursor-pointer flex flex-row justify-center items-center w-40 h-15 mt-2 bg-black border border-[#3FC1E9] rounded-lg'>
              <h3 className='text-[#3FC1E9]'>
                {
                  english
                  ? aboutMeEnglish[2]
                  : aboutMeSpanish[2]
                }
                </h3>
        </div>
        </a>
        </div>
        </div>
    </article>
  )
}

export default About_me