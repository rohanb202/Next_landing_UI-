import React from 'react'
import { gsap } from "gsap";
import { useEffect,useLayoutEffect,useRef } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import SlideCard from './SlideCard';
import smile from "../assets/images/smile.png"
gsap.registerPlugin(ScrollTrigger);
export default function Carousel() {
    
    const component = useRef();
    const slider = useRef();   
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
          let panels = gsap.utils.toArray(".panel");
          gsap.to(panels, {
            xPercent: -100 * (panels.length - 1),
            ease: "none",
            scrollTrigger: {
              trigger: slider.current,
              pin: true,
              scrub: 2,
              snap: 1 / (panels.length - 1),
              
              start:"-=50%",
            //   end:"+=100%",
              end: () => "+=" + slider.current.offsetWidth/(2),
            //   markers: true
            }
          });
        }, component);
        return () => ctx.revert();
      },[]);
  return (
    <div ref={component} className='overflow-hidden '>
        <div className='flex flex-col items-center justify-center mx-20 my-20 space-y-20 md:space-y-0 md:space-x-10 md:flex-row'>
            <div className='text-3xl font-bold text-center md:text-left md:w-1/3'>EQ beats IQ</div>
            <div className='text-lg text-center md:text-left md:w-1/3'>People with high emotional
            intelligence (EQ) live more fulfilled
            lives. They tend to be happier and
            have healthier relationships.
            </div>
            <div className='text-lg text-center md:text-left md:w-1/3'>They are more successful in their
            pursuits and make for inspiring
            leaders. According to science, they
            earn $29k a year.
            </div>

        </div>
        <div ref={slider}  className='my-10 '>
            <div>
                <h3 data-aos="zoom-out-right" data-aos-duration="500" className='mx-5 text-3xl font-bold md:text-5xl'>Does this sound familiar...</h3>
            </div>
            <div className='flex justify-center w-screen my-10 space-x-10 '>
                
                <div className='w-96 shrink-0 rounded-3xl h-60 bg-slate-300 panel'></div>
                <SlideCard img={smile} color={`bg-amber-200`} title={`You argue with a colleague`} desc={`You get angry and defensive, instead of
    staying open and working towards
    common ground.`}/>

                <SlideCard color={`bg-sky-200`} img={smile} title={`You get a promotion at work`} desc={`You question yourself and wonder when
they'll realize you're an unqualified
imposter, instead of trusting yourself &
your abilities.`}/>
                <SlideCard rot={1} img={smile} color={`bg-fuchsia-200`} title={`You argue with a colleague`} desc={`You get angry and defensive, instead of
    staying open and working towards
    common ground.`}/>

                <SlideCard color={`bg-green-200`} img={smile} title={`You get a promotion at work`} desc={`You question yourself and wonder when
they'll realize you're an unqualified
imposter, instead of trusting yourself &
your abilities.`}/>
            </div>
        </div>
    </div>
  )
}

