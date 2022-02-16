import React from 'react'
import "./senderBar.css"

import send_icon from "../assets/send_icon.svg"
import attach_icon from "../assets/attach_icon.svg"

import AttachFileIcon from '@mui/icons-material/AttachFile';

function SenderBar() {
  return (
    <div className='_sendWrapper'>
    <img className='_send_icon' src={attach_icon} alt="send_icon"/>
     <input placeholder='Message...'></input>
     <img className='_send_icon' src={send_icon} alt="send_icon"/>
    </div>
  )
}

export default SenderBar