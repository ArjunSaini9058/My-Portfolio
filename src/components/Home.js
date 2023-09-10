import React from 'react'
import "./Home.css"
import Navbar from './navbar'
import Projects from './Projects'
import About from './About'
import Contact from './Contact'
function Home() {
  return (
    <div>
      <div className='first-container'>
        <div className='box1'>
          <Navbar />
        </div>
        <div className='box2'>
          <div className='content'>
            <h1 className='name'>Hi! I'M <br /> ARJUN SAINI</h1> <br /><h6>
              Passionate MERN Stack Enthusiast <br /> Creating dynamic web apps.</h6>
          </div>
          <div className='my-img'>
          </div>
        </div>
      </div>
      <div className='third-container'>
        <About />
      </div>
      <div className='second-container'>
        <Projects />
      </div>
      <div className='fourth-container'>
        <Contact />
      </div>
      <div className='my-footer'>
          <p>© Arjun Saini</p>
        </div> 
    </div> 

  )
}

export default Home
