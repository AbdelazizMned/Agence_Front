import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Banner from './components/Banner'
import MainBan from './components/MainBan'


function App() {
  return (
    <>
     <Nav />
     <Hero />
     <Banner />
     <MainBan />
     <Footer /> 
    </>
  )
}

export default App
