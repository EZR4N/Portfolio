import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='h-40 mt-5 flex items-center justify-center bg-black'>
        <div className='footerIcons mt-1 flex w-20 justify-center'>
            <Link href='https://github.com/EZR4N'>
                    <Image
                    className='transition-transform duration-300 transform hover:scale-110 ease-in border border-[#3FC1E9] hover:bg-[#3FC1E9] cursor-pointer hover:shadow-[0_1px_14px_#3FC1E9] w-14 p-3 rounded-lg mr-4'
                    src='/images/github-icon.png' 
                    alt='github icon'
                    width={30}
                    height={30}/>
            </Link>

            <Link href='https://www.linkedin.com/in/ezequiel-orellana/'>
                    <Image
                    className='ml-4 transition-transform duration-300 transform hover:scale-110 ease-in border border-[#3FC1E9] hover:bg-[#3FC1E9] cursor-pointer hover:shadow-[0_1px_14px_#3FC1E9] w-14 p-3 rounded-lg'
                    src='/images/linkedin-icon.png'
                    alt='linkedin icon'
                    width={30}
                    height={30}/>
            </Link>
                </div>
    </footer>
  )
}

export default Footer