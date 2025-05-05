import React from 'react'
import { Tech } from './Tech_stack'
import Image from 'next/image'
const Tech_stack_card = ({ title, src }: Tech) => {
  return (
    <div className='pr-10 pl-10 mb-8'>
        <Image
        className='w-20 transition-transform ease-in-out duration-300 hover:scale-105'
        src={src}
        alt='`icono de ${title}`'
        width={200}
        height={200}
        />
        <h3 className='text-center'>{title}</h3>
    </div>
  )
}

export default Tech_stack_card