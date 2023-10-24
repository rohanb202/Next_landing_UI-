import Image from 'next/image'
import React from 'react'
import eyeglasses from '../assets/images/eye-glasses.png'

export default function Navbar(){
  return (
    <div className='flex content-center justify-around my-4 font-semibold text-md'>
    <Image src={eyeglasses} className='w-12' />
      <div className='flex content-center justify-center py-2 space-x-8'>
        <div >Emotions</div>
        <div>Manifesto</div>
        <div>Self-awareness test</div>
        <div>Work With Us</div>
      </div>
      
      
      
        <button className='px-4 py-2 text-white bg-black rounded-full'>Download App</button>
      
    </div>
  )
}
