import React, { useState } from 'react'
import "./navBar.css"

import MoreVertIcon from '@mui/icons-material/MoreVert';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';

import menu_icon from "../assets/menu_icon.svg"
import avatar from "../assets/avatar.png"


const config = {
    img: avatar,
    name: "Fruce Bot",
    description:"Welcome to Fusce help center. I am Fusce’s Virtual Assistant. "
}
    

function NavBar({data=config}) {
  const [click, setClick] = useState(false)

  
//   console.log("hhhhh",width);
  return (
      <div className='_wrapper'>

          <div className='_firstFlex'>
             <MoreVertIcon className='menu_icon' fontSize='large'/>
              <img className='menu_icon _avatarImg' alt="" src={data.img}></img>
              <p className='_p'>{data.name}</p>
              
          </div>
          <div className='_description' style={{
                display: click ? 'block' : 'none'
              }}>{data.description}</div>
          <div className='_secondFlex'>
             {click?<OpenInFullIcon onClick={()=>setClick(!click)} className="menu_icon" font-size="xl"/>:<CloseFullscreenIcon onClick={()=>setClick(!click)}  className="menu_icon" font-size="xl"/>}
              <KeyboardArrowDownIcon className="menu_icon" font-size="xl"/>
          </div>
      </div>
    
  )
}

export default NavBar