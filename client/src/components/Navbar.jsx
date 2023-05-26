import React, { useState } from 'react'
import img from '../assets/logo.png'
import ChatGPT from './ChatGPT';
import DallE from './DallE';

const Navbar = () => {
    const [Nav , setNav] = useState(true);
    return (
        <>
        <div className='header'>
            <div className='header-nav' onClick={()=>{setNav(true)}}>
                Chat-GPT
            </div>
            <div className='header-nav' onClick={()=>{setNav(false)}}>
                Dall-E
            </div>
        </div>
        <div className="header-img">
            <img src={img} alt="header-img" />
        </div>
        {Nav ? <ChatGPT/> : <DallE/>}
        </>
    )
}

export default Navbar