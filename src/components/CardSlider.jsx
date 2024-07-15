import React from 'react'
import './css/CardSlider.css'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";



function CardSlider() {
  return (
    <div className='slider-parent'>
        <div className="slider-container">
            <div className='card'>
                <img className='img-card' src="https://placehold.co/350x250/png" alt="" />
            </div>
            <div className='card'>
                <img className='img-card' src="https://placehold.co/350x250/png" alt="" />
            </div>
            <div className='card'>
                <img className='img-card' src="https://placehold.co/350x250/png" alt="" />
            </div>
            <button className='ChangeImage' style={{ left : 0 }}>
                <FaArrowLeft />
            </button>
            <button className='ChangeImage' style={{ right : 0 }}>
                <FaArrowRight />
            </button>
        </div>
    </div>
  )
}

export default CardSlider