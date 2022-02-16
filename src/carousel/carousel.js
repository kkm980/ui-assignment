import React, { useEffect, useState } from 'react'
import "./carousel.css"

import img1 from "../assets/img1.png"
import img2 from "../assets/img2.png"

import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';


const config=[
    {img:img1,
    title:"Omnichannel AI services",
    content:"Automatically resolve customer inquiries at industry’s highest rate over messeging",
    subText:"Book a Demo"
    },

    {img:img2,
    title:"Omnichannel AI for customer services",
    subText:"Book a Demo"
    },

    {
    title:"Omnichannel AI for customer services",
    content:"Automatically resolve customer inquiries at industry’s highest rate over messeging, chat, email and voice ",
    subText:`Exlplore`,
    }
   
  

]

const Card=({img, title,content, subText, cls})=>{
    return <div className={`_card ${cls}`}>
       <img className='_img' src={img}></img>
        <div className='_title'>{title}</div>
        <div className='_content'>{content}</div>
        <div style={{position:"absolute", bottom:"0", height:"30px", borderTop:"0.25px solid gray", width:"100%", textAlign:"center", paddingTop:"5px"}}>{subText} </div>
        
    </div>
}

function Carousel({data=config}) {
    const [previous, setPrevious] =useState(0);
    const [current, setCurrent] =useState(1);
    const [upcoming, setUpcoming] =useState(2);
    useEffect(()=>{
        const next=(current+1)%data.length;
        const id=setInterval(() => {
            setCurrent(next);
            setPrevious(current);
            if(next+1==data.length){
                setUpcoming(0);
            }else{
                setUpcoming(next+1);
            }
            
        }, 2000);
        return ()=>clearInterval(id);
    },[current])

    const prev=()=>{
        if(current===0){
            setCurrent(2);
            setPrevious(1);
            setUpcoming(0);
        }else if(current===1){
            setCurrent(0);
            setPrevious(2);
            setUpcoming(1);
        }
        else{
            setCurrent(1);
            setPrevious(0);
            setUpcoming(2);
        }
    }
    const next=()=>{
        if(current===0){
            setCurrent(1);
            setPrevious(0);
            setUpcoming(2);
        }else if(current===1){
            setCurrent(2);
            setPrevious(1);
            setUpcoming(0);
        }
        else{
            setCurrent(0);
            setPrevious(2);
            setUpcoming(1);
        }
    }
    
    // console.log(data[current]);
  return (
      <div className='_frame'>
        <Card cls="_prevData" img={data[previous].img && data[previous].img} title={data[previous].title && data[previous].title} content={data[previous].content && data[previous].content} subText={data[previous].subText && data[previous].subText} />
        <Card cls="_currData" img={data[current].img && data[current].img} title={data[current].title && data[current].title} content={data[current].content && data[current].content} subText={data[current].subText && data[current].subText} />
        <Card cls="_upcomingData" img={data[upcoming].img && data[upcoming].img} title={data[upcoming].title && data[upcoming].title} content={data[upcoming].content && data[upcoming].content} subText={data[upcoming].subText && data[upcoming].subText}/>
        <div className='_circular _prevBtn'>
          <ArrowLeftIcon onClick={prev} fontSize="large"/>
        </div>
        <div className='_circular _nextBtn'>
         <ArrowRightIcon onClick={next} fontSize="large"/>
        </div>
      </div>
   
  )
}

export default Carousel