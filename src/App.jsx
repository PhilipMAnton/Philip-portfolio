import './App.css'
import Header from './compounds/1-header/Header'
import Main from './compounds/4-main/Main'
import Footer from './compounds/6-footer/Footer'
import Contact from './compounds/5-contact/Contact'
import Hero from './compounds/3-hero/Hero'
// @ts-ignore
import Mentors from './compounds/2-mentors/Mentors'
import { useEffect, useState } from 'react'

function App() {
  const [showscrollButton , setShowScrollbuttton] = useState(false)
  useEffect(()=>{
    window.addEventListener("scroll" , ()=>{
      if(window.scrollY > 500){
        setShowScrollbuttton(true)
      }else{
        setShowScrollbuttton(false)
      }
    })
  },[])
  return (
    <div className='container' id='up'>
      <Header />
      <Hero />
      <div className='divider hero-style'></div>
      <Mentors/>
      <div className='divider'></div>
      <Main />
      <div className='divider'></div>
      <Contact />
      <div className='divider'></div>
      <Footer />
      <a href="#up" style={{all: "unset"}}>
      <button style={{opacity : showscrollButton ? 1 : 0 , transition : "1s"}} className="icon-keyboard_arrow_up scroll-to-top"></button>
      </a>
    </div>
  )
}

export default App
