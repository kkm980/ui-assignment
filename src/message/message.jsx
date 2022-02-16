import React, { useState } from 'react'
import "./message.css"
import SenderBar from '../senderBar/senderBar';
import avatar from "../assets/avatar.png"
import Carousel from '../carousel/carousel';

const config=[ {msg:"Account"}, {msg:"Connect to Human Agent"}, {msg:"Product Demo"}, {msg:"Order"}];




function Message({request=config}) {
    const [userInteraction, setUserInteraction] =useState(false)

  return (
    <div className='_container'>
      <div className='_leftFloat'>
        <img src={avatar} alt="avatar" className='_avatar'></img>
        <div className='_textMsg'>How can I help you?</div>
        <div className='_subText'>Fusce Bot . Just now</div>
      </div>
      <div className='_reqOptions'>
        <div className={`${userInteraction ? "_firstChip" : "_chips"}`} onClick={() => { setUserInteraction(true) }}>Tell me about Fusce</div>
        {request.map(e => {
          return <div className='_chips' style={{
            display: userInteraction ? 'none' : 'block'
          }}>{e.msg}</div>
        })}
      </div>
      {
        userInteraction ?
          <div>
            <div className="_textMsg _caption">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae, sodales ullamcorper diam egestas metus sagittis ac arcu. Accumsan at sodales ut risus.</div>
            <Carousel/>
      <div className='_downSub'>
      <img src={avatar} alt="avatar" className='_avatar' style={{opacity:"1"}}></img>
      <div  style={{paddingTop:"10px", paddingLeft:"5px"}}>Fusce Bot . Just now</div>
      </div>
          </div>

          : null}
      
      <SenderBar />
    </div>
  )
}

export default Message