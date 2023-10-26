import Image from 'next/image'
import React from 'react'
import ip from '../assets/images/ip.png'
export default function Hero() {
  return (
    <section className='h-screen mx-5 my-6 text-white bg-purple-300 md:mx-10 rounded-3xl'>
        <div className='flex flex-col items-center justify-between h-full md:justify-between md:flex-row'>
            <div data-aos="fade-right" data-aos-duration="500" className='flex flex-col items-center p-10 mt-2 md:items-start'>
                <h2 className='text-2xl text-black md:text-3xl'>Ahead app</h2>
                <h1 className='text-3xl font-bold text-center text-black md:text-left lg:text-7xl'> Master your life <br/> by  mastering <br/> emotions</h1>
            </div>
            <Image data-aos="fade" className='object-contain h-2/3' src={ip}/>
        </div>
    </section>
  )
}

