import React from 'react'
import './css/MainBan.css'
import CardSlider from './CardSlider'
import Recom from './Recom'
import LogoCard from './LogoCard'
import Destination from './Destination'

function MainBan() {
  return (
    <div className='MainBan-wrapper'>
      <h1 className='title-promo'>SPECIAL OFFER AND PROMO</h1>
      <CardSlider />
      <h1 className='title-promo'>BEST RECOMMENDATIONS</h1>
      <LogoCard />
      <Recom />
      <h1 className='title-promo'>BEST DESTINATION</h1>
      <Destination />
    </div>
  )
}

export default MainBan