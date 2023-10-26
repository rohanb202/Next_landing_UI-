
import { gsap } from "gsap";
import { useEffect,useLayoutEffect,useRef } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import AOS from "aos";
import "aos/dist/aos.css";
import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
gsap.registerPlugin(ScrollTrigger);

export default function TimelineX() {
    const tml=useRef();
    const cont=useRef();
    
      
    useLayoutEffect(() => {
        AOS.init();
        AOS.refresh();
        
        
        

        
        
    },[]);


  return (
    <section className='p-10'>
        <div data-aos="zoom-out-right" data-aos-duration="500" className='flex flex-col space-y-2'>
            <h1 className='text-sm font-semibold md:text-3xl'>Wrong with self-improvemnet & how we're fixing it</h1>
            <h1 className='text-3xl font-bold md:text-6xl'>Self-improvemnet. Ugh.</h1>
        </div>
        <div ref={cont} className='flex flex-col items-start justify-start py-20 md:mx-40'>           
                <TimelineItem data-aos="fade" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                    <TimelineSeparator>
                    <TimelineDot variant="outlined" color="primary" />
                    <TimelineConnector />
                    </TimelineSeparator>
                    <div className="flex flex-col px-6 py-20">
                        <h1 className="text-3xl font-bold">It's not as easy as 1-2-3.</h1>
                       <h1 className="text-xl font-light">The journey of change may be long, but our sessions are quick. We get
to the point and tell you what you want to know (and nothing else). 
                       </h1>
                    </div>
                </TimelineItem>
                <TimelineItem data-aos="fade" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                    <TimelineSeparator>
                    <TimelineDot variant="outlined" color="primary" />
                    <TimelineConnector />
                    </TimelineSeparator>
                    <div className="flex flex-col px-6 py-20">
                        <h1 className="text-3xl font-bold">Old habits are hard to break.</h1>
                       <h1 className="text-xl font-light">And bad behaviors die hard. Fortunately, we give you great, science-
backed techniques to use. 
                       </h1>
                    </div>
                </TimelineItem>
                <TimelineItem data-aos="fade" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                    <TimelineSeparator>
                    <TimelineDot variant="outlined" color="primary" />
                    <TimelineConnector />
                    </TimelineSeparator>
                    <div className="flex flex-col px-6 py-20">
                        <h1 className="text-3xl font-bold">You and your motivation don't have a
long-term relationship.</h1>
                       <h1 className="text-xl font-light">Luckily, we can proactively prepare you for the marathon, not just the
race. Effective, memorable exerciseswill help you stick to your goals. 
                       </h1>
                    </div>
                </TimelineItem >
                <TimelineItem data-aos="fade" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                    <TimelineSeparator>
                    <TimelineDot variant="outlined" color="primary" />
                    <TimelineConnector />
                    </TimelineSeparator>
                    <div className="flex flex-col px-6 py-20">
                        <h1 className="text-3xl font-bold">Litt em up</h1>
                       <h1 className="text-xl font-light">Bad behaviors cling tenaciously, but with the power of science-backed strategies, they can be vanquished. 
                       </h1>
                    </div>
                </TimelineItem>
               
                

        </div>
        <div className='flex flex-col items-center justify-center my-20 space-y-20 md:mx-20 md:space-y-0 md:space-x-10 md:flex-row'>
            <div className='text-3xl font-bold text-center md:text-left md:w-1/3'>EQ beats IQ</div>
            <div className='text-lg text-center md:w-1/3 md:text-left'>People with high emotional
            intelligence (EQ) live more fulfilled
            lives. They tend to be happier and
            have healthier relationships.
            </div>
            <div className='text-lg text-center md:w-1/3 md:text-left'>They are more successful in their
            pursuits and make for inspiring
            leaders. According to science, they
            earn $29k a year.
            </div>

        </div>
    </section>
  )
}
