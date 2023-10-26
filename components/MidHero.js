import React from 'react'
import Image from 'next/image'
import eyeglasses from '../assets/images/eye-glasses.png'
export default function MidHero() {
  return (
    <section className='h-screen my-6 text-white bg-orange-100 rounded-3xl'>
      <div className='flex flex-col p-20'>
        <h1 className='text-xl text-black'>Built out of frustration</h1>
        <h1 className='text-6xl font-bold text-black'>Meet the ahead app</h1>
      </div>
      <div className='flex content-center justify-between'>
            <Image src={eyeglasses} className='object-contain w-2/4 h-80'/>
            <div className='w-2/4 px-10 mx-auto my-auto text-xl text-black'>A personalized pocket coach that provides bite-
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