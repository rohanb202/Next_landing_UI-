import React from 'react'
import Image from 'next/image'
import eyeglasses from '../assets/images/eye-glasses.png'
export default function MidHero() {
  return (
    <section className='my-6 bg-orange-100 md:h-screen rounded-3xl'>
      <div className='flex flex-col items-center p-10 md:items-start md:p-20'>
        <h1 className='text-xl text-black'>Built out of frustration</h1>
        <h1 className='text-4xl font-bold text-center text-black md:text-left md:text-6xl'>Meet the ahead app</h1>
      </div>
      <div className='flex flex-col items-center justify-between my-10 md:flex-row'>
            <Image src={eyeglasses} className='object-contain h-60 animate-bounce md:w-2/4 md:h-80'/>
            <div className='px-10 mx-auto my-5 text-lg text-center text-black md:my-0 md:text-xl md:text-left md:w-2/4'>A personalized pocket coach that provides bite-
            sized, science-driven tools to boost emotional
            intelligence.
            <br/>
            Think of it as a pocket cheerleader towards a
            better, more fulfilling.
            </div>
      </div>
    </section>
  )
}