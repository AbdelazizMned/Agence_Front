import React from 'react'
import './css/LogoCard.css'
import beach from '../assets/Icons/BEACH.png'
import golf from '../assets/Icons/GOLF.png'
import kite from '../assets/Icons/KITESURFING.png'
import spa from '../assets/Icons/SPA.png'


function LogoCard() {
  return (
    <div className='LogoParent'>
        <div className='LogoCard'>
            <div className='mini-card'>
                <img className='card-img' src={beach} style={{width:'110'}}/>
                <p className='Label'>Beach</p>
            </div>
            <div className='mini-card'>
                <img className='card-img' src={spa}/>
                <p className='Label'>Well-being</p>
            </div>
            <div className='mini-card'>
                <img className='card-img' src={golf}/>
                <p className='Label'>Golf</p>
            </div>
            <div className='mini-card'>
                <img className='card-img' src={kite}/>
                <p className='Label'>Kitesurfing</p>
            </div>
        </div>
    </div>
  )
}

export default LogoCard