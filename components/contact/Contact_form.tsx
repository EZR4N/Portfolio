'use client'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import React, { useContext, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { LanguagesContext } from '@/context/language_context'


const Contact_form = () => {

  const [error, setError] = useState('')
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [text, setText] = useState('')

  const context = useContext(LanguagesContext)
  if(!context) {
    throw new Error('fuera de context!')
  }
  const { english } = context

  const contactEnglish = [
    'Contact',
    'Your name',
    'Your e-mail',
    'Your message',
    'Send'
  ]

  const contactSpanish = [
    'Contacto',
    'Tu nombre',
    'Tu mail',
    'Tu mensaje',
    'Enviar'
  ]

  const form = useRef<HTMLFormElement>(null)

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault()

    if (!name || !email || !text) {  
    setError('Por favor complete todos los campos')
    return
    }

    if (!form.current) return
    
    emailjs
      .sendForm(
        'service_4isa5ll',      
        'template_33hqkgd',     
        form.current,         
        'UeN_HRJgjVxt0BKGD'      
      )
      .then(
        (result) => {
          console.log(result.text)
          toast.success(english ? 'Message sent successfully 🎉' : 'Mensaje enviado con éxito 🎉')
          form.current?.reset()
          setError('')
          setEmail('')
          setName('')
          setText('') 
        },
        (error) => {
          console.error(error.text)
          toast.error(english ? 'Error sending message ❌' : 'Error al enviar el mensaje ❌')
        }
      )
    
  }

  return (
    <section id='Contact' className='flex lg:w-full flex-col items-center scroll-mt-30'>
      <h2 className='text-[#3FC1E9] text-3xl font-bold mb-4'>
        {
          english
          ? contactEnglish[0]
          : contactSpanish[0]
        }
</h2>
    <form ref={form} onSubmit={sendEmail} className='flex lg:w-full flex-col gap-4 w-75 max-w-md mx-auto'>
      <input onChange={(e) => setName(e.target.value)} type='text' name='from_name' placeholder={english ? contactEnglish[1] : contactSpanish[1]} className='p-2 border border-[#61DAFB] active:border-[#3FC1E9] rounded' />
      <input onChange={(e) => setEmail(e.target.value)} type='email' name='reply_to' placeholder={english ? contactEnglish[2] : contactSpanish[2]} className='p-2 border border-[#61DAFB] active:border-[#3FC1E9]  rounded' />
      <textarea onChange={(e) => setText(e.target.value)}  name='message' placeholder={english ? contactEnglish[3] : contactSpanish[3]} className='p-2 border h-50 border-[#61DAFB] active:border-[#3FC1E9] rounded' />
      <button type='submit' className='bg-black border border-[#61DAFB] cursor-pointer text-[#61DAFB] p-2 rounded transition-transform ease-in-out duration-500 hover:scale-105 hover:bg-[#3c627986]'>
        {
          english
          ? contactEnglish[4]
          : contactSpanish[4]
        }
      </button>
      {
        error && <div className='rounded-2xl bg-[#e24151] '> <h2 className='pt-2 pb-2 pl-2'>{error}</h2></div>
      }
    </form>
    <ToastContainer position='bottom-right' autoClose={8000} />
    </section>
  )
}

export default Contact_form