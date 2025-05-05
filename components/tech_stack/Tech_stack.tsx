'use client'

import React, {  useContext } from 'react'
import Tech_stack_card from './Tech_stack_card'
import { LanguagesContext } from '@/context/language_context'

export interface Tech {
    title: string,
    src: string
}

export const technologies: Tech[] = [  
    {title: 'HTML5', src:'/images/html5-icon.png'},
    {title: 'CSS3', src:'/images/css3-icon.png'},
    {title: 'JavaScript', src:'/images/js-icon.png'},
    {title: 'TypeScript', src:'/images/ts-icon.png'},
    {title: 'React.js', src:'/images/react-icon.png'},
    {title: 'Next.js', src:'/images/next-icon.png'},
    {title: 'Node.js', src:'/images/node-icon.png'},
    {title: 'Git', src:'/images/git-icon.png'},
    {title: 'Github', src:'/images/github2-icon.png'},
    {title: 'Docker', src:'/images/docker-icon.png'},
    {title: 'MySQL', src:'/images/sql-icon.png'},
    {title: 'Firebase', src:'/images/firebase-icon.png'},
    {title: 'Express.js', src:'/images/express-icon.png'},
    {title: 'Bootstrap', src:'/images/bootstrap-icon.png'},
    {title: 'Tailwind', src:'/images/tailwind-icon.png'},
    {title: 'Sass', src:'/images/sass-icon.png'},
    {title: 'Java', src:'/images/java-icon.png'},
]

const techEnglish = 'Tech Stack'
const TechSpanish = 'Tecnologías'

const Tech_stack = () => {

    const context = useContext(LanguagesContext)
      
      if (!context) {
        throw new Error('Fuera de contexto');
      }
      
      const { english } = context

      
  return (
    <section id='TechStack' className='flex flex-col items-center scroll-mt-20'>
        <h2 id='TechStack' className='text-3xl text-[#61DAFB] mt-8 mb-5 font-bold'>
            {
                english
                ? techEnglish
                : TechSpanish
            }
        </h2>
        <div className='lg:pl-30 lg:pr-30 techstackIconsContainer flex flex-wrap items-center justify-center'>
            {
                technologies.map(tech =>(
                    <Tech_stack_card key={tech.title} {...tech}/>
                ))
            }
        </div>
    </section>
  )
}

export default Tech_stack