import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navigation from './components/Navigation'
import Home from './components/Home'
import Images from './components/Images'
import Footer from './components/Footer'
import End from './components/End'

function App() {


  return (
    <>
    <div className='bg-[#fafafc] font-[InterSB]'>
      <Navigation />
      <Home />
      <hr className='border-[#b6b6b7] mb-15'/>
      <Images />
      <hr className='border-[#b6b6b7] mb-15'/>
      <Footer />
      <hr className='border-[#b6b6b7] mb-15'/>
      <End />
      </div>
    </>
  )
}

export default App
