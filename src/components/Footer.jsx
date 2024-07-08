import React from 'react'
import './Footer.css'
import samigo from '../assets/Icons/samigo.png'

function Footer() {
  return (
    <>
        <footer className='footer-wrapper'>
            <div className="logodiv">
                <img className='logoimg' src={samigo} alt=''/>
            </div><div className="emtydiv"></div>
            <div className="aboutdiv">
            <p className='title'>About Us</p>
                <div className='line'></div>
                <ul className='list'>
                    <li>About us</li>
                    <li>General conditions</li>
                    <li>Site Plan</li>
                </ul>
            </div>
            <div className="destinydiv">
                <p className='title'>Destiny</p>
                <div className='line'></div>
                <ul className='list'>
                    <li>Tunisia</li>
                    <li>Egypt</li>
                    <li>Turkey</li>
                </ul>
            </div>
            <div className="contactdiv">
            <p className='title'>Contact Us</p>
                <div className='line'></div>
                <ul className='list'>
                    <li>Adress</li>
                    <li>Phone</li>
                    <li>E-mail</li>
                </ul>
            </div>
        </footer>
    </>
  )
}

export default Footer