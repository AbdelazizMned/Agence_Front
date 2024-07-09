import React from "react";
import "./css/Recom.css";
import star from '../assets/Icons/STARS.png'
import slide2 from "../assets/Images/slide2.jpg";
import slide3 from "../assets/Images/slide3.jpg";
import rec from '../assets/Images/rec1.jpg'

function Recom() {
  return (
    <div className="recom-parent">
      <div className="recom-container">
        <div className="card">
          <img
            className="img-card-rec"
            src={rec}
            alt=""
          />
          <div className="description">
            <p className="titles">Royal Azur Thalassa</p>
            <p className="text">Hammamet - Tunisia</p>
            <img className="star" src={star} alt="" />
          </div>
        </div>
        <div className="card">
          <img
            className="img-card-rec"
            src={slide2}
            alt=""
          />
          <div className="description">
            <p className="titles">Iberostar kuriat palace</p>
            <p className="text">Monastir - Tunisia</p>
            <img className="star" src={star} alt="" />
          </div>
        </div>
        <div className="card">
          <img
            className="img-card-rec"
            src={slide3}
            alt=""
          />
          <div className="description">
            <p className="titles">Anantara Tozeur Resort</p>
            <p className="text">Toseur - Tunisia</p>
            <img className="star" src={star} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recom;
