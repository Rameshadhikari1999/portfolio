import React,{useEffect, useState} from 'react'
import Header from './components/layout/headers/Header'
import Hero from './components/home/Hero'
import Services from './components/services/Services'
import Skills from './components/Skills/Skills'
import Projects from './components/project/Projects'
import ContactUs from './components/contactus/ContactUs'
import Footer from './components/layout/footer/Footer'
import TopScroll from './utility/TopScroll'


const App = () => {
  const [showScroll, setShowScroll] = useState(false);

    

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.scrollY > 100) {
        setShowScroll(true);
      } else if (showScroll && window.scrollY <= 100) {
        setShowScroll(false);
      }
    };

    window.scrollTo({ top: 100 });
    window.addEventListener('scroll', checkScrollTop);
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, []);

  return (
    <div className='w-[98.7vw] bg-primary mx-auto overflow-x-hidden  font-Lato'>
      <header className='w-full fixed z-30'>
        <Header/>
      </header>
      <main  className='w-full   text-white'>
        <Hero/>
        <Services/>
        <Skills/>
        <Projects/>
        <ContactUs/>
        <Footer/>
        {showScroll && <TopScroll/>}
      </main>
    </div>
  )
}

export default App
