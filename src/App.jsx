import React from 'react'
import Header from './components/layout/headers/Header'
import Hero from './components/home/Hero'
import Services from './components/services/Services'
import Skills from './components/Skills/Skills'
import Projects from './components/project/Projects'

const App = () => {
  return (
    <div className='w-[98.7vw] bg-primary mx-auto overflow-x-hidden  font-Lato'>
      <header className='w-full fixed z-20'>
        <Header/>
      </header>
      <main  className='w-full   text-white'>
        <Hero/>
        <Services/>
        <Skills/>
        <Projects/>
      </main>
    </div>
  )
}

export default App
