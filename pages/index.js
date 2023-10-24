import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Carousel from '@/components/Carousel'


export default function Home() {
  return (
      <div className='mx-10'>
          <Navbar/>   
          <Hero/>  
          <Carousel/>    
      </div>
  )
}
