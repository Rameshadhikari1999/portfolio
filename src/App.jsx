import React from 'react'
import Header from './components/layout/headers/Header'
import Hero from './components/home/Hero'
import Services from './components/services/Services'



const App = () => {
  return (
    <div className='w-[98.7vw] bg-primary mx-auto overflow-x-hidden  font-Lato'>
      <header className='w-full fixed z-20'>
        <Header/>
      </header>
      <main id='home' className='w-full   text-white'>
        <Hero/>
        <Services/>
      </main>
    </div>
  )
}

export default App
