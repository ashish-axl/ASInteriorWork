import React from 'react'
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP);

function Home() {
  useGSAP(() => {
    gsap.from('h1', {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      stagger: 0.3,
    });

  });

  return (
    <div className=' w-full mb-13 flex justify-start text-[#313236] font-[InterSB] '>
        <h1 className='md:text-4xl text-2xl
         md:max-w-200 max-w-80 pl-5 pt-[10rem] '>
            I'm <u>Anil Sharma,<br/></u>
<span className='text-[#b6b6b7]'>crafting interior spaces,
shaping experiences +
environments.</span>
        </h1>
    </div>
  )
}

export default Home