import React from 'react'
import './FilterPage.css'
import Nav from './components/Nav'
import Footer from './components/Footer'
import ImageGrid from './components/ImageGrid.jsx'
import Sections from './components/Sections.jsx'
import Equipment from './components/Equipment.jsx'
import Description from './components/Description.jsx'


function FilterPage() {
  return (
    <div>
        <Nav />
        <h1 className='title-sec'>Home / Egypt / Mevenpick Cairo Medina City</h1>
        <ImageGrid />
        <Sections />
        <Equipment />
        <Description />
    </div>
  )
}

export default FilterPage