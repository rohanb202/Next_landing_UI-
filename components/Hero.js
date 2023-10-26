import React from 'react'

export default function Hero() {
  return (
    <section className='h-screen my-6 text-white bg-purple-300 rounded-3xl'>
        <div className='flex flex-col content-center h-full md:justify-center'>
            <div className='flex flex-col items-center p-10 md:items-start'>
                <h2 className='text-3xl text-black'>Ahead app</h2>
                <h1 className='text-4xl font-bold text-center text-black md:text-left lg:text-8xl'> Master your life <br/> by  mastering <br/> emotions</h1>
            </div>
        </div>
    </section>
  )
}

