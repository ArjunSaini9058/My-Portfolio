import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"
function Navbar() {
  const [show, setShow]=useState(false)
  return (
    <>
    <div className='nav-container'>
      <div className='logo'>
        <Link to='/'><img src='https://i.postimg.cc/3r4FQWWv/arjunlogo-min.png' alt='logo' height="40px" width="100px"/></Link>
      </div>
      <div className='links'>
        <div>
            <Link to='/' className='Link-tag'>Home</Link>
        </div>
        <div>
            <Link to='/' className='Link-tag'>About</Link>
        </div>
        <div>
            <Link to='/projects' className='Link-tag'>Projects</Link>
        </div>
        <div>
            <Link to='/' className='Link-tag'>Contact</Link>
        </div>
      </div>
      <div className='dawnload '>
      <Link to="https://drive.google.com/file/d/1yp-hFkd-3_86dK1vGFx76FH1zK9nCA88/view?usp=drive_link"><button className='dbtn'>Dawnload CV</button></Link>
      </div>
      {/* ------------media----------- */}
      <div className='nav-modal'>
        {
          show?        <div className='x'>
        <button  onClick={()=>{setShow(false)}}>X</button>
      </div>:<button onClick={()=>{setShow(true)}}>≡</button>
        }
      </div>
    </div>
    <div className='toggle-link'>
          {
      show?    <div className='drope-links'>
        <div>
            <Link to='/' className='drope-Link-tag'>Home</Link>
        </div>
        <div>
            <Link to='/' className='drope-Link-tag'>About</Link>
        </div>
        <div>
            <Link to='/projects' className='drope-Link-tag'>Project</Link>
        </div>
        <div>
            <Link to='/' className='drope-Link-tag'>Contact</Link>
        </div>     
        <div className='drope-dawnload'>
            <Link to="https://drive.google.com/file/d/1H0kcQhj_k2z18ObPxcoeX43YFkwPVMgP/view?usp=drivesdk"><button className='dbtn'>Dawnload CV</button></Link>
        </div>
    </div>:null
    }
    </div>


    </>
  )
}

export default Navbar
