import React from 'react'
import './css/Equipment.css'
import { FaRegStar } from "react-icons/fa6";
import { FaSwimmingPool } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";
import { FaCoffee } from "react-icons/fa";
import { FaGlassMartiniAlt } from "react-icons/fa";



function Equipment() {
  return (
    <div className='equip-parent'>
        <div className='equip-container'>
            <div className='info'>
                <div className='stars'>
                    <FaRegStar />
                    <FaRegStar />
                    <FaRegStar />
                
                </div>
                <div className='hotel-name'>Movenpick Cairo Medina City</div>
                <div className='location'>Lorem ipsum, dolor sit amet consectetur adi ad libero voluptas oia!
                    <br/>dolor sit amet consectetur dolor sit amet
                </div>
            </div>
            <div className='equipment'>
                <p className='head-equip'>Service & Equipement</p>
                <div className='things'>
                    <div style={{display:'flex', alignItems:'center'}}><FaSwimmingPool/>Piscine</div>
                    <div style={{display:'flex', alignItems:'center'}}><FaWifi />Wifi</div>
                    <div style={{display:'flex', alignItems:'center'}}><FaGlassMartiniAlt />Bar</div>
                    <div>parking</div>
                    <div>Air Conditionne</div>
                    <div>Salle de Reunion</div>
                    <div>Navette</div>
                    <div style={{display:'flex', alignItems:'center'}}><FaCoffee/>Petit-dejeuner</div>
                    <div>Service de Chamb</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Equipment