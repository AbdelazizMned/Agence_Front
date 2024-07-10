import React from 'react'
import './css/Sections.css'

function Sections() {
  return (
    <div className='sections-parent'>
        <div className='sections-container'>
            <div className='sect name'>Movenpick Cairo Media City</div>
            <div className='sect sects'>Photos</div>
            <div className='sect sects'>Description</div>
            <div className='sect sects'>Prices and<br /> Reservation</div>
            <div className='sect sects'>Map</div>
        </div>
    </div>
  )
}

export default Sections