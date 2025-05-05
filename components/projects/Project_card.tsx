'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { Project } from './Projects'
import Link from 'next/link'

const Project_card = ({name, git, demo, img, description, tech}: Project) => {
  const [ onSelect, setOnSelect ] = useState(false)
  const [ isActive, setIsActive] = useState(false)
  const toggleClass = () => {
    setIsActive(!isActive)
  }
  return (
    <div
    onClick={() => {
      setOnSelect(!onSelect)
      toggleClass()
    }}
    className={`relative lg:mr-2.5 lg:ml-2.5 rounded-2xl h-55 mb-4 z-10 flex flex-col items-center mt-2 pt-3 pb-3 pl-1 pr-1 border border-[#3FC1E9] hover:bg-[#3FC1E9]/10 transition-colors cursor-pointer overflow-hidden ${
      isActive ? ' backdrop-blur-md' : ''
    }`}
  >
    <h3 className={`${isActive && 'opacity-0 ' } mb-2 text-lg font-bold'`}>{name}</h3>
    <Image className='mb-2' src={img} alt={name} width={250} height={250} />
    <div className='flex items-center'>
      {tech.map(tec => (
        <Image className='mr-1' key={tec.title} alt={`${tec.title} icon`} width={20} height={20} src={tec.src} />
      ))}
    </div>

    {isActive && (
      <div className="absolute inset-0 bg-[#0D111799] backdrop-blur-md flex flex-col items-center justify-center text-center p-4">
        <p className="text-gray-200 font-bold text-xl">{description}</p>
        <div className='flex mt-2'>
          <Link href={git}>
          <div className='bg-[#0D1117] cursor-pointer transition-transform ease-in-out hover:scale-110 mr-2 p-1 rounded-2xl border border-[#3FC1E9] hover:bg-[#181f2b]'>
            <Image src='/images/githubb-icon.png' alt='github icon' width={30} height={30}/> 
          </div>
          </Link>
          <Link href={demo}>
          <div className='bg-[#0D1117] cursor-pointer transition-transform ease-in-out hover:scale-110 p-1 rounded-2xl border border-[#3FC1E9] hover:bg-[#181f2b]'>
            <Image src='/images/play-icon.png' alt='play icon' width={30} height={30}/>
          </div>
          </Link>
        </div>
      </div>
    )}
  </div>
  )
}

export default Project_card