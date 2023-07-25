import React from 'react'
import "./Contact.css"
import { Link } from 'react-router-dom'
import Message from './Message'
// import { Link } from 'react-router-dom'
function Contact() {
    return (
        <div className='contact-container'>
                  <div className='dawnload myid'>
      <Link to="https://drive.google.com/file/d/1H0kcQhj_k2z18ObPxcoeX43YFkwPVMgP/view?usp=drivesdk"><button className='dbtn'>Dawnload Resume</button></Link>
      </div>
            <div className='myid'>
                <div>
                    <img src='https://i.postimg.cc/vDRkpRxP/1-4-min.png'  alt='..' /><a href="mailto:arjunsaini.ssn@gmail.com">arjunsaini.ssn@gmail.com</a>
                </div>
                <div>
                    <img src='https://i.postimg.cc/gcwJFv6R/1-1-min.png'  alt='..' />+91 9027475036
                </div>
            </div>
            <div className='message-comp'>
                <Message/>
            </div>
            <div className='myid'>
                <div>
                    <img src='https://i.postimg.cc/vDRkpRxP/1-4-min.png' alt='..' /><a href="mailto:arjunsaini.ssn@gmail.com">Gmail</a>
                </div>
                <div>
                    <img src='https://i.postimg.cc/5yFh8psq/317750-linkedin-icon-min.png' alt='..' /><a href="https://www.linkedin.com/in/arjun-saini007">LinkedIn</a>
                </div>
                <div>
                    <img src='https://i.postimg.cc/5yQD79yY/1-3-min.png' alt='..' /><a href="https://github.com/ArjunSaini9058">GitHub</a>
                </div>
                <div>
                    <img src='https://i.postimg.cc/hjjkm1q0/1-2-min.png' alt='..' /><a href="https://www.instagram.com/arjun_saiini/">Instagram</a>
                </div>
            </div>
        </div>
    )
}

export default Contact
