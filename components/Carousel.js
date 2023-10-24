import React from 'react'

export default function Carousel() {
  return (
    <div>
        <div className='flex content-center justify-center mx-20 my-20 space-x-10'>
            <div className='w-1/3 text-3xl font-bold'>EQ beats IQ</div>
            <div className='w-1/3'>People with high emotional
            intelligence (EQ) live more fulfilled
            lives. They tend to be happier and
            have healthier relationships.
            </div>
            <div className='w-1/3'>They are more successful in their
            pursuits and make for inspiring
            leaders. According to science, they
            earn $29k a year.
            </div>

        </div>
        <div className='my-10'>
            <div>
                <h3 className='text-5xl font-bold'>Does this sound familiar...</h3>
            </div>
        </div>
    </div>
  )
}

