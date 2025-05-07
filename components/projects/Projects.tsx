'use client'

import React, { useContext } from 'react'
import { technologies } from '../tech_stack/Tech_stack'
import Project_card from './Project_card'
import { Tech } from '../tech_stack/Tech_stack'
import { LanguagesContext } from '@/context/language_context'
export interface Project {
 name: string,
 git: string,
 demo: string,
 img: string,
 description: string,
 tech: Tech[]
}

const Projects = () => {
    const context = useContext(LanguagesContext)

    if (!context) {
      throw new Error('Fuera de context')
    }

    const { english } = context

    
    const summoTechList = [
      technologies[0],
      technologies[1],
      technologies[2],
      technologies[4],
      technologies[6],
      technologies[15],
      technologies[13],
      technologies[11]
    ]

    const workappTechList = [
      technologies[0],
      technologies[1],
      technologies[2],
      technologies[6],
      technologies[10],
      technologies[12],
      technologies[13]
    ]

    const porfolioTechList = [
      technologies[0],
      technologies[1],
      technologies[3],
      technologies[4],
      technologies[14]
    ]

    const projectsEnglish = [
      'Responsive and modern e-commerce.',
      'Landing page with a CRUD made with express and mySQL',
      'Personal portfolio developed with Next.js, TypeScript and Tailwind.',
      'Projects'
    ]

    const projectsSpanish = [
      'E-commerce responsive y moderno.',
      'Landing page con un CRUD hecho con Express.js y mySQL',
      'Portfolio personal desarrollado con Next.js, TypeScript y Tailwind CSS',
      'Proyectos',
    ]


    const projectsList: Project[] = [
      {
      name: 'Summo Store', 
      git: 'https://github.com/EZR4N/Summo-Store',
      demo: 'https://summo-store.vercel.app/',
      img: '/images/Summo-Store.png',
      description: 'Responsive and modern e-commerce.',
      tech: summoTechList},
      {
        name: 'Workapp',
        git: 'https://github.com/JuanPousada/Workapp',
        demo: '/',
        img: '/images/Workapp.png',
        description: 'Landing page with a CRUD made with Express.js and mySQL',
        tech: workappTechList
      },
      {
        name: 'Personal Portfolio',
        git: 'https://github.com/EZR4N/Portfolio',
        demo: 'https://ezequielweb.dev',
        img: '/images/portfolio.png',
        description: 'Personal portfolio developed with Next.js, TypeScript and Tailwind CSS.',
        tech: porfolioTechList
      }
    ]

    if (english) {
      projectsList.forEach((proj, index) => {
        proj.description = projectsEnglish[index]
      })
    } else {
      projectsList.forEach((proj, index) => {
        proj.description = projectsSpanish[index]
      })
    }

  return (
    <section id='Projects' className='Projects flex flex-col items-center scroll-mt-30'>
      <h2 className='text-[#3FC1E9] text-3xl font-bold mb-4'>
        {
          english
          ? projectsEnglish[3]
          : projectsSpanish[3]
        } 
        </h2>
      <div className='projectsContainer lg:flex'>
        {
          projectsList.map( proj => (
            <Project_card key={proj.name} {...proj} />
          ))
        }
      </div>
    </section>
  )
}

export default Projects