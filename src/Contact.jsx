import React from 'react'
import './Contact.css'
import Nav from './components/Nav'
import Footer from './components/Footer'
import { ImLocation } from 'react-icons/im'
import slider2 from './assets/Images/slide2.jpg'

function Contact() {
  return (
    <>
    <Nav />
    <h1 className="sec-header">Home / Contact</h1>
    <div className='main-section-parent'>
        <div className='main-section-container'>
            <div className='main-section'>
                <img src={slider2} className='main-section-div'/>
                <div className="text_section">
                    <p className=''>
                        Agence
                    </p>
                    <p className='location_section'><ImLocation style={{color:'#0C6661'}} />
                    Djerba</p>
                    <p className='Number_section'>(+000) 00 000 000</p>
                </div>
            </div>
            <div className='main-section'>
                <img src={slider2} className='main-section-div'/>
                <div className="text_section">
                    <p className=''>
                        Agence
                    </p>
                    <p className='location_section'><ImLocation style={{color:'#0C6661'}} />
                    Djerba</p>
                    <p className='Number_section'>(+000) 00 000 000</p>
                </div>
            </div>
            <div className='main-section'>
                <img src={slider2} className='main-section-div'/>
                <div className="text_section">
                    <p className=''>
                        Agence
                    </p>
                    <p className='location_section'><ImLocation style={{color:'#0C6661'}} />
                    Djerba</p>
                    <p className='Number_section'>(+000) 00 000 000</p>
                </div>
            </div>
            <div className='main-section'>
                <img src={slider2} className='main-section-div'/>
                <div className="text_section">
                    <p className=''>
                        Agence
                    </p>
                    <p className='location_section'><ImLocation style={{color:'#0C6661'}} />
                    Djerba</p>
                    <p className='Number_section'>(+000) 00 000 000</p>
                </div>
            </div>
        </div>
    </div>
    <Footer />
    </>
  )
}

export default Contact