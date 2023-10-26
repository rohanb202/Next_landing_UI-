import Image from 'next/image'
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';

import eyeglasses from '../assets/images/eye-glasses.png'
import { Bars3Icon} from '@heroicons/react/24/solid'

export default function Navbar(){
  const [state, setState] = React.useState(false);
  const toggleDrawer=(ele)=>(e)=>{
    setState(ele);
  }
  
  return (
    <div className='fixed z-10 flex content-center justify-between w-full mx-5 font-semibold bg-white md:py-3 md:justify-around text-md'>
    <Image src={eyeglasses} className='w-12' />
      <div className='items-center justify-center hidden py-2 space-x-8 md:flex'>
        <div >Emotions</div>
        <div>Manifesto</div>
        <div>Self-awareness test</div>
        <div>Work With Us</div>
      </div>
      
      
      
        <button className='hidden px-4 py-3 text-white bg-black rounded-full md:flex'>Download App</button>
        <Button className='sm:hidden' onClick={toggleDrawer(true)}>
          <Bars3Icon className='w-10 mx-5 sm:hidden'/>
        </Button>
          <Drawer            
            open={state}
            anchor={'right'}
            onClose={toggleDrawer(false)}
          >
             <div className='flex flex-col items-start justify-center px-2 py-2 pt-10 m-5 space-y-8 '>
              <div >Emotions</div>
              <div>Manifesto</div>
              <div>Self-awareness test</div>
              <div>Work With Us</div>
              

            </div>
            <button className='px-4 py-3 mx-2 mt-6 text-white bg-black rounded-full '>Download App</button>   
          </Drawer>
    </div>
  )
}
