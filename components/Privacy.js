import React from 'react'
import LogoLoder from './LogoLoader'
import { useState,useEffect,useRef } from 'react'

import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
// import vid1 from '../assets/vids/vid1.mp4'
gsap.registerPlugin(ScrollTrigger);

export default function Privacy() {
    let sec=useRef(null);
    const [onPage,setOnPage]=useState(false);
    useEffect(() => {
        ScrollTrigger.create({
            trigger: sec.current,
            start:"+=10%",
            onEnter: () => setOnPage(true),
            onLeave: () => setOnPage(false),
            onEnterBack: () => setOnPage(true),
            onLeaveBack: () => setOnPage(false),
            // markers: true,
          });
       
    },[]);
  return (
    <section ref={sec} className='h-screen'>
        <div className='flex flex-col items-center justify-center h-full space-y-3'>
            <h1 data-aos="fade-up" className='font-semibold text-md md:text-lg'>We take privacy seriously</h1>
            <h1 data-aos="fade-up" className='text-3xl font-bold md:text-4xl'>Before you get started</h1>
            <p data-aos="fade-up" className='text-xl text-center md:text-2xl'>"We won't share your answers with anyone and won't ever tell <br/>
                you which friends said what about you"
            </p>
            <div data-aos="fade-up" className='flex flex-col items-center justify-center space-y-2'>
                <h1 className=''>with love,</h1>
                <LogoLoder begin={onPage} />
                
            </div>
            <div data-aos="fade-up" data-aos-duration="500" className='flex flex-col items-center justify-center space-y-5'>
                <button className='p-3 px-6 text-white transition-all duration-100 bg-black rounded-full hover:scale-110'>Start a test</button>
                <h1 className='text-sm'>Takes only 5 minutes</h1>
            </div>
        </div>
    </section>
  )
}

