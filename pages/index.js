import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Carousel from '@/components/Carousel'
import MidHero from '@/components/MidHero'
import TimelineX from '@/components/TimelineX'
import InnerSec from '@/components/InnerSec'
import Jobs from '@/components/Jobs'
import Privacy from '@/components/Privacy'


export default function Home() {
  return (
      <div className='relative flex justify-center overflow-x-hidden '>
        <div className='mx-3 max-w-[100rem] md:mx-10 bg-white'>
          <Navbar/>   
          <Hero/>  
          <Carousel/>   
          <MidHero/> 
          <TimelineX/>
          <Privacy/>
          <InnerSec/>
          <Jobs/>
        </div>
      </div>
  )
}
