import React from 'react'
import { useState } from 'react'
import "./Message.css"
function Message() {
    const [msg,setMsg]=useState()
  const  addMsg=()=>{
    console.log(msg)
    setMsg('')
  }
  return (
    <div className='msg-box'>
        <h1 className='msg-title' >Message Me</h1>
           <textarea className="textarea" name="msg" onChange={(e)=>{setMsg(e.target.value)}} placeholder="write your Message..." />
            <div className="dbtn" onClick={(e)=>{addMsg(e)}}>Send Message</div>
        <h1 className='msg-title'>Or Mail me ↧</h1>

    </div>

  )
}

export default Message
