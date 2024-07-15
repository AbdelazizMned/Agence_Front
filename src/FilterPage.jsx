import React from 'react'
import './FilterPage.css'
import Nav from './components/Nav'
import Footer from './components/Footer'
import ImageGrid from './components/ImageGrid.jsx'
import Sections from './components/Sections.jsx'
import Equipment from './components/Equipment.jsx'
import Description from './components/Description.jsx'
import Selecter from './components/Selecter.jsx'
import RoomAdd from './components/RoomAdd.jsx'
import Map from './components/Map.jsx'
import RecomSlider from './components/RecomSlider.jsx'


function FilterPage() {
  return (
    <div>
        <Nav />
        <h1 className='title-sec'>Home / Egypt / Mevenpick Cairo Medina City</h1>
        <ImageGrid />
        <Sections />
        <Equipment />
        <Description />
        <Selecter />
        <RoomAdd />
        <Map />
        <h1 className='title-sec' style={{textAlign:'center', fontSize:'3.5rem'}}>Similar Hotels</h1>
        <RecomSlider />
        <Footer />
    </div>
  )
}

export default FilterPage