import React from 'react'
import './css/Banner.css'
import phone from "../assets/Images/PHONE.png"
import sac from "../assets/Images/SAC.png"
import { Phone } from 'lucide-react'
import { BsDisplay } from 'react-icons/bs'

function Banner() {
  return (
    <div style={{display:'flex', justifyContent:'center'}}>
    <div className='banner-parent'>
        <img className='img sac' src={sac} alt="" />
        <div className='textdiv'>
            <p className='titletext'>Experience the essence of effort and convenience</p><br/>
            <p className='texttext'>We are commited to making your stay<br/>as pleasent as possible</p><br/>
            <button className='buttontext'>Vue more</button>
        </div>
        <img className='img phone' src={phone} alt="" />
    </div>
    </div>
  )
}

export default Banner