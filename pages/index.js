import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Carousel from '@/components/Carousel'
import MidHero from '@/components/MidHero'
import TimelineX from '@/components/TimelineX'
import InnerSec from '@/components/InnerSec'
import Jobs from '@/components/Jobs'


export default function Home() {
  return (
      <div className='mx-10'>
          <Navbar/>   
          <Hero/>  
          <Carousel/>   
          <MidHero/> 
          <TimelineX/>
          <InnerSec/>
          <Jobs/>
      </div>
  )
}
