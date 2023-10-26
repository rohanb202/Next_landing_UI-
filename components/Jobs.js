import React from 'react'
import Card from './Card'
import Image from 'next/image'
import { MapIcon, EnvelopeIcon} from '@heroicons/react/24/solid'
import appstore from '../assets/images/appstore.png'
import eyeglasses from '../assets/images/eye-glasses.png'
export default function Jobs() {
    
  return (
    <div className='m-20'>
        <div className='flex flex-col space-y-10'>
            <h1 className='text-6xl font-bold'>Work with us</h1> 
            <div className='flex items-center justify-center space-x-5'>
                <Card title="Senior Full Stack Engineer"/>
                <Card title="Senior Full Stack Engineer"/>
                <Card title="Senior Full Stack Engineer"/>
            </div> 
            <hr></hr>
            <div >
                <div className='relative flex flex-col items-center justify-center m-auto'>
                    <Image className='w-20' src={eyeglasses}/>
                    <h1 className='text-3xl font-semibold text-yellow-600'>ahead</h1>
                </div>
                <div className='flex items-center justify-center m-10 space-x-7'>
                    <div className='flex items-center justify-center space-x-2'>
                        <MapIcon className='w-8 p-1 rounded-full bg-amber-300'/>
                        <h1>26 BakerStreet,10117 Berlin</h1>
                    </div>
                    <div className='flex items-center justify-center space-x-2'>
                        <EnvelopeIcon className='w-8 p-1 rounded-full bg-amber-300'/>
                        <h1>Hi@ahead-app.com</h1>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <Image className='w-40' src={appstore}/>                    
                </div>
                <div className='flex justify-center'>
                    <h2 className='pt-10 font-light'>&#169; 2023 xono All rights reserved</h2>                  
                </div>
                
            </div>
        </div>        
        
    </div>
  )
}
