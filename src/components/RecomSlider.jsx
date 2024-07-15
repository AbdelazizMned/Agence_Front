import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import "./css/RecomSlider.css";
import star from "../assets/Icons/STARS.png";
import slide2 from "../assets/Images/slide2.jpg";
import slide3 from "../assets/Images/slide3.jpg";
import rec from "../assets/Images/rec1.jpg";

function RecomSlider() {
  return (
    <div className="recom-parent">
      <div className="recom-container">
        <div className="cards">
          <div className="imgdiv">
            <img className="img-card-recs" src={rec} alt="" />
            <div className="descriptions">
              <p className="titless">Royal Azur Thalassa</p>
            </div>
          </div>
        </div>
        <div className="cards">
          <div className="imgdiv">
            <img className="img-card-recs" src={slide2} alt="" />
            <div className="descriptions">
              <p className="titless">Iberostar kuriat palace</p>
            </div>
          </div>
        </div>
        <button className="ChangeImage" style={{ left: 0 }}>
          <FaArrowLeft />
        </button>
        <button className="ChangeImage" style={{ right: 0 }}>
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}

export default RecomSlider;
