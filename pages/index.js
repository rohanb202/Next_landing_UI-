import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Carousel from '@/components/Carousel'
import MidHero from '@/components/MidHero'


export default function Home() {
  return (
      <div className='mx-10'>
          <Navbar/>   
          <Hero/>  
          <Carousel/>   
          <MidHero/> 
      </div>
  )
}
