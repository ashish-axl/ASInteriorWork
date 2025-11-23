import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP);


export const Footer = () => {
    useGSAP(() => {
   
     gsap.from('label',{
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      stagger: 0.3,
    });
     gsap.from('.send',{
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      stagger: 0.3,
    });

  });

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_gwcnxvd', 'template_hc2dty6', form.current, {
        publicKey: 'B3c09CyEvuXeFF_Ki',
      })
      .then(
        () => {
          toast('SUCCESS!');
          if (form.current) form.current.reset();
        },
        (error) => {
          toast.error('FAILED...', error.text);
        },
      );
  };

  return (
    <div className='w-full h-[30rem] grid grid-cols-1 md:grid-cols-2 font-[InterM] bg-[#fafafc]'>
        <div className=" h-full w-full flex justify-start md:items-center items-end">
        <h1 className='text-[#313236] font-[InterSB] md:text-[1.3rem] text-2xl pl-5 '>Contact</h1>
      </div>

      <div className="h-full w-full flex flex-col md:justify-center justify-start md:pt-0 pt-5 items-start gap-y-2 text-[#b6b6b7] md:pl-0 pl-5 text-[1.1rem] ">
        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-3 w-full max-w-xs">
          
          <label className="flex flex-col w-full">
             
            <input type="text" name="from_name" className="mt-1 p-2 rounded-2xl border border-gray-300 text-[.9rem] " placeholder='NAME'/>
            
          </label>
          <label className="flex flex-col w-full">
            
            <input type="email" name="from_email" className="mt-1 p-2 rounded-2xl border border-gray-300 text-[.9rem]" placeholder='EMAIL' />
          </label>
          <label className="flex flex-col w-full">
            
            <textarea name="message" placeholder="TYPE YOUR MESSAGE HERE" className="text-[.9rem] mt-1 p-2 rounded border border-gray-300 rounded-2xl" />
          </label>
          <input
            type="submit"
            value="Send"
            className=" send mt-2 px-4 py-2 bg-[#313236] text-white rounded cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95 rounded-2xl"
          />
        </form>
      </div>
    <ToastContainer/>

    </div>
  );
};

export default Footer;