import React from 'react'
import "./Contact.css"
import Message from './Message'
// import { Link } from 'react-router-dom'
function Contact() {
    return (
        <div className='contact-container'>
            <div className='myid'>
                <div>
                    <img src='https://i.postimg.cc/JzmsjLQD/4202011-email-gmail-mail-logo-social-icon.png' height={"40px"} width={"40px"} alt='..' />arjunsaini.ssn@gmail.com
                </div>
                <div>
                    <img src='https://i.postimg.cc/ZK699R6z/1220365-whatsapp-chat-communication-message-phone-icon.png' height={"40px"} width={"40px"} alt='..' />+91 9027475036
                </div>
            </div>
            <div className='message-comp'>
                <Message/>
            </div>
            <div className='myid'>
                <div>
                    <img src='https://i.postimg.cc/JzmsjLQD/4202011-email-gmail-mail-logo-social-icon.png' alt='..' /><a href="mailto:arjunsaini.ssn@gmail.com">Gmail</a>
                </div>
                <div>
                    <img src='https://i.postimg.cc/TPNh8Wvg/317750-linkedin-icon.png' alt='..' /><a href="https://www.linkedin.com/in/arjun-saini007">LinkedIn</a>
                </div>
                <div>
                    <img src='https://i.postimg.cc/HWqcs5ct/4202098-github-code-developer-logo-icon.png' alt='..' /><a href="https://github.com/your-github-id">GitHub</a>
                </div>
                <div>
                    <img src='https://i.postimg.cc/hGth316K/3225191-app-instagram-logo-media-popular-icon.png' alt='..' /><a href="https://www.instagram.com/your-instagram-id">Instagram</a>
                </div>
            </div>
        </div>
    )
}

export default Contact
