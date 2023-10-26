import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';

export default function Card({title, description})  {
    const cardRef = useRef(null);
    
    const [isHovered,setHover]=useState(false);
    useEffect(() => {
        const card=cardRef.current;
      let tl=gsap.timeline();
      tl.to(card,{
        duration:1,
        height:"+=5rem",
        ease:"power4.out",
        backgroundColor:`rgb(254 215 170)`,
      })
      
      card.addEventListener('mouseleave', () => {
        // console.log(isHovered)
        setTimeout(() => {setHover(false);},100)
        
        console.log('l');
        tl.reverse();
        
      });
  
      // Add an event listener to trigger the animation on hover
      card.addEventListener('mouseenter', () => {        
        console.log('e');
        setTimeout(() => {setHover(true);},100)
        tl.play();
      });
      
    }, []);
  
    return (
        <div
        ref={cardRef}
        className="overflow-hidden bg-orange-100 h-60 rounded-xl"
      >
        <div className="px-6 py-4">
          <div className="mb-2 text-2xl font-bold">{title}</div>
            <ul className='px-5 text-lg'>
                <li>Full time position</li>
                <li>Berlin or remote</li>
                <li>$65-80k, 0.5-1.50% equity share options</li>
                
            </ul>
        </div>
        {isHovered &&(
        <div className="px-6 pt-4 pb-2 text-center">
          <button className="px-4 py-2 font-bold text-white bg-black rounded-full">
            Learn More
          </button>
        </div>
      )}
      </div>
    );
};


