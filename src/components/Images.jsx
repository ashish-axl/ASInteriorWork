import React from 'react'
import ImageOne from '/src/assets/New.jpg'
import ImageTwo from '/src/assets/New.jpg'
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Sofa from '/src/assets/Sofa.jpg'
import Table from '/src/assets/Table.jpg'
import Ac from '/src/assets/Ac.jpg'
import Main from '/src/assets/New.jpg'
gsap.registerPlugin(useGSAP);
function Images() {
  useGSAP(() => {
    gsap.from('.images', {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      stagger: 0.3,
      scrollTrigger: '.images',
    })
  });
  return (
    <div className=" w-full flex 
     gap-x-4 gap-y-2 flex-wrap justify-center-safe items-start content-start p-2 mt-10 bg-[#fafafc] pb-20 ">
      <div className=" w-100 h-60 drop-shadow-md/10 rounded-3xl ">
       <img src={Sofa} alt="" className='images hover:scale-50 w-[100%] h-[100%] size-fit rounded-3xl'/>
      </div>
      <div className=" w-100 h-60 rounded-3xl drop-shadow-md/10">
        <img src={Table} alt="" className='images w-[100%] h-[100%] size-fit rounded-3xl'/>
      </div>
      <div className=" w-100 h-60 rounded-3xl drop-shadow-md/10">
        <img src={Ac} alt="" className='images w-[100%] h-[100%] size-fit rounded-3xl'/>
      </div>
      <div className=" w-100 h-60 rounded-3xl drop-shadow-md/10">
        <img src={Main} alt="" className='images w-[100%] h-[100%] size-fit rounded-3xl'/>
      </div>
    </div>
  )
}

export default Images