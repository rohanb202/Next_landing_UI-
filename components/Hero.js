import Image from 'next/image'
import React from 'react'
import ip from '../assets/images/ip.png'
import appstore from '../assets/images/appstore.png'
import {StarIcon} from '@heroicons/react/24/solid'
export default function Hero() {
  return (
    <section className='h-screen mx-5 my-6 text-white bg-purple-300 md:mx-10 rounded-3xl'>
        <div className='flex flex-col items-center justify-between h-full md:justify-between md:flex-row'>
            <div data-aos="fade-right" data-aos-duration="500" className='flex flex-col items-center p-10 mt-2 md:space-y-6 md:items-start'>
                <h2 className='text-2xl text-black md:text-3xl'>Ahead app</h2>
                <h1 className='text-3xl font-bold text-center text-black md:text-left lg:text-7xl'> Master your life <br/> by  mastering <br/> emotions</h1>
               <div className='flex-col items-center justify-center hidden space-y-2 md:flex md:space-y-0 md:space-x-2 md:flex-row'>
                  <Image alt="apppstore"  className='pt-2 w-28 md:w-40 md:pt-0' src={appstore}></Image>
                  <div className='flex flex-col items-center md:items-start'>
                    <div className='flex items-center justify-center'>
                      <StarIcon className='w-5 text-yellow-400 '/>
                      <StarIcon className='w-5 text-yellow-400 '/>
                      <StarIcon className='w-5 text-yellow-400 '/>
                      <StarIcon className='w-5 text-yellow-400 '/>                  
                    </div>
                    <h1 className='text-sm text-black'>100+ appstore review</h1>
                  </div>               
               </div>
               
            </div>
            
            <Image alt="iphone mockup" data-aos="fade" className='object-contain h-2/3' src={ip}/>
        </div>
    </section>
  )
}

