
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
        <div className='flex flex-col space-y-2'>
            <h1 className='text-3xl font-semibold'>Wrong with self-improvemnet & how we're fixing it</h1>
            <h1 className='text-6xl font-bold'>Self-improvemnet. Ugh.</h1>
        </div>
        <div ref={cont} className='flex flex-col items-start justify-start py-20 mx-40'>           
                <TimelineItem data-aos="fade" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                    <TimelineSeparator>
                    <TimelineDot variant="outlined" color="primary" />
                    <TimelineConnector />
                    </TimelineSeparator>
                    <div className="flex flex-col px-6 py-20">
                        <h1 className="text-3xl font-bold">Hello</h1>
                       <h1 className="text-xl font-light">Nulla fugiat ad proident aute et culpa proident et do cillum aliquip nisi eiusmod. Minim incididunt non quis esse laborum minim. Elit aliquip ad ullamco aliquip ipsum dolor irure excepteur ex id nostrud velit Lorem ex. Excepteur consectetur dolor velit laboris dolor et deserunt laborum eu enim sunt sit aute mollit. 
                       </h1>
                    </div>
                </TimelineItem>
                <TimelineItem data-aos="fade" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                    <TimelineSeparator>
                    <TimelineDot variant="outlined" color="primary" />
                    <TimelineConnector />
                    </TimelineSeparator>
                    <div className="flex flex-col px-6 py-20">
                        <h1 className="text-3xl font-bold">Hello</h1>
                       <h1 className="text-xl font-light">Nulla fugiat ad proident aute et culpa proident et do cillum aliquip nisi eiusmod. Minim incididunt non quis esse laborum minim. Elit aliquip ad ullamco aliquip ipsum dolor irure excepteur ex id nostrud velit Lorem ex. Excepteur consectetur dolor velit laboris dolor et deserunt laborum eu enim sunt sit aute mollit. 
                       </h1>
                    </div>
                </TimelineItem>
                <TimelineItem data-aos="fade" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                    <TimelineSeparator>
                    <TimelineDot variant="outlined" color="primary" />
                    <TimelineConnector />
                    </TimelineSeparator>
                    <div className="flex flex-col px-6 py-20">
                        <h1 className="text-3xl font-bold">Hello</h1>
                       <h1 className="text-xl font-light">Nulla fugiat ad proident aute et culpa proident et do cillum aliquip nisi eiusmod. Minim incididunt non quis esse laborum minim. Elit aliquip ad ullamco aliquip ipsum dolor irure excepteur ex id nostrud velit Lorem ex. Excepteur consectetur dolor velit laboris dolor et deserunt laborum eu enim sunt sit aute mollit. 
                       </h1>
                    </div>
                </TimelineItem >
                <TimelineItem data-aos="fade" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                    <TimelineSeparator>
                    <TimelineDot variant="outlined" color="primary" />
                    <TimelineConnector />
                    </TimelineSeparator>
                    <div className="flex flex-col px-6 py-20">
                        <h1 className="text-3xl font-bold">Hello</h1>
                       <h1 className="text-xl font-light">Nulla fugiat ad proident aute et culpa proident et do cillum aliquip nisi eiusmod. Minim incididunt non quis esse laborum minim. Elit aliquip ad ullamco aliquip ipsum dolor irure excepteur ex id nostrud velit Lorem ex. Excepteur consectetur dolor velit laboris dolor et deserunt laborum eu enim sunt sit aute mollit. 
                       </h1>
                    </div>
                </TimelineItem>
               
                

        </div>
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
    </section>
  )
}
