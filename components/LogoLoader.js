import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
//import ScrollTrigger from "gsap/ScrollTrigger";

function sizeTextToBar(size) {
  return (size * 4) / 7;
}
function LogoLoder({ size,begin }) {
  const line = useRef(null);
  const box1 = useRef(null);
  const box2 = useRef(null);
 
  const [c,setC] = useState(0);
  useEffect(() => {
    
    let tl = gsap.timeline();
    let tl2 = gsap.timeline();
    let tl3 = gsap.timeline();
    
    if(begin && c==0){
        tl.to(line.current, { rotateZ: "90", duration: 1 })
      .to(line.current, {
        rotateZ: "180",
        duration: 1,
      })
      .to(line.current, {
        rotateZ: "270",
        duration: 1,
      })
      .to(line.current, {
        rotateZ: "360",
        duration: 1,
      })
      .to(line.current, {
        rotateZ: "0",
        duration: 1,
      });
    tl2
      .to(box1.current, { x: "27px", duration: 1 })
      .to(box1.current, { y: "35px", duration: 1 })
      .to(box1.current, { x: "-35px", duration: 1 })
      .to(box1.current, { y: "0px", duration: 1 })
      .to(box1.current, { x: "0px", duration: 1 });
    tl3
      .to(box2.current, { x: "-27px", duration: 1 })
      .to(box2.current, { y: "-35px", duration: 1 })
      .to(box2.current, { x: "+35px", duration: 1 })
      .to(box2.current, { y: "0px", duration: 1 })
      .to(box2.current, { x: "0px", duration: 1 });
      setC(1);
      
    }
    
    
    

  }, [begin]);

  return (
    <div className={` flex flex-col justify-center items-center text-[20px] text-[#242423]  BGB`}>
      <div ref={box1}>XO</div>
      <div ref={line} className="inline-block h-1 bg-[#242423] w-[30px]"></div>
      <div ref={box2}>NO</div>
    </div>
  );
}

export default LogoLoder;
