import React, { useEffect, useState } from 'react'
import logo from '/src/assets/logo.jpg';
import { useRef } from 'react';
function Navigation() {
  
    

    useEffect(() => {
      if (typeof window === 'undefined') return;
      // Disable custom cursor on touch devices
      if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return;

      // Create the cursor element if it doesn't exist
      let cursor = document.getElementById('circle-cursor');
      if (!cursor) {
        cursor = document.createElement('div');
        cursor.id = 'circle-cursor';
        cursor.className = 'circle-cursor';
        document.body.appendChild(cursor);
      }

      const moveCursor = (e) => {
        if (!cursor) return;
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
      };

      const handleMouseOver = (e) => {
        if (!cursor) return;
        try {
          if (e.target && e.target.closest && e.target.closest('a, button, input, textarea, select, label, [role="button"]')) {
            cursor.classList.add('cursor--hover');
          }
        } catch (err) {
          // ignore
        }
      };

      const handleMouseOut = (e) => {
        if (!cursor) return;
        try {
          if (e.target && e.target.closest && e.target.closest('a, button, input, textarea, select, label, [role="button"]')) {
            cursor.classList.remove('cursor--hover');
          }
        } catch (err) {
          // ignore
        }
      };

      const handleMouseDown = () => cursor && cursor.classList.add('cursor--active');
      const handleMouseUp = () => cursor && cursor.classList.remove('cursor--active');

      document.addEventListener('mousemove', moveCursor);
      document.addEventListener('mouseover', handleMouseOver);
      document.addEventListener('mouseout', handleMouseOut);
      document.addEventListener('mousedown', handleMouseDown);
      document.addEventListener('mouseup', handleMouseUp);

      // Hide the default cursor
      document.body.style.cursor = 'none';

      return () => {
        document.removeEventListener('mousemove', moveCursor);
        document.removeEventListener('mouseover', handleMouseOver);
        document.removeEventListener('mouseout', handleMouseOut);
        document.removeEventListener('mousedown', handleMouseDown);
        document.removeEventListener('mouseup', handleMouseUp);
        if (cursor) cursor.remove();
        document.body.style.cursor = '';
      };
    }, []);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div
        className={`main ${scrolled ? 'bg-white' : 'bg-[#fafafc]'} grid grid-cols-10 font-[Inter] transition-all duration-300 z-50 sticky md:top-5 top-0
          ${scrolled ? 'md:max-w-xl md:mx-auto md:w-auto md:px-4 md:py-2 md:rounded-full w-full' : 'w-full'}`}
        style={{ minHeight: '70px' }}
      >
        <div className="h-full w-full md:col-span-2 col-span-5 flex flex-row justify-start items-center gap-2">
          <img
            src={logo}
            alt=""
            className={`transition-all duration-500 ml-5 h-[50px] w-[60px] mb-3 ${scrolled ? 'md:opacity-100' : 'md:opacity-100'} opacity-100`}
          />
          <h1
            className={`font-[InterSB] text-[#313236] text-[0.8rem] whitespace-nowrap transition-all duration-500 ${scrolled ? 'md:opacity-100' : 'md:opacity-100'} opacity-100 ${scrolled ? 'md:text-[0.9rem]' : 'md:text-[1.1rem]'}`}
          >
            AS Interior Work
          </h1>
        </div>

        <div className="h-full w-full md:col-span-6 col-span-1"></div>

        <div className="h-full w-full md:col-span-2 col-span-4 flex justify-end items-center">
          <button
            className={`bg-[#313236] text-white px-7 py-3 rounded-full text-[.85rem] mr-5 transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95 ${scrolled ? 'md:opacity-100' : 'md:opacity-100'} opacity-100`}
            onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
          >
            Contact
          </button>
        </div>
      </div>
      {/* No spacer needed for sticky navbar */}
    </>
  );
}

export default Navigation