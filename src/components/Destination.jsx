import React from "react";
import "./css/Destination.css";
import { FaArrowRight } from "react-icons/fa6";
import destination1 from "../assets/Images/destination1.jpg";
import destination2 from "../assets/Images/destination2.jpg";
import destination3 from "../assets/Images/destination3.jpg";

function Destination() {
  return (
    <div className="dest-parent">
      <div className="dest-container">
        <div
          className="dest-card"
          style={{ backgroundImage: `url(${destination3})` }}
        >
          <h2 className="dest-name">Egypt</h2>
          <a className="dest-arrow" href="#">
            <FaArrowRight />
          </a>
        </div>
        <div
          className="dest-card"
          style={{ backgroundImage: `url(${destination2})` }}
        >
          <h2 className="dest-name">Turkey</h2>
          <a className="dest-arrow" href="#">
            <FaArrowRight />
          </a>
        </div>
        <div
          className="dest-card"
          style={{ backgroundImage: `url(${destination1})` }}
        >
          <h2 className="dest-name">Tunisia</h2>
          <a className="dest-arrow" href="#">
            <FaArrowRight />
          </a>
        </div>
        <div className="parag">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde,
            voluptas similique! Deserunt earum ducimus ipsum odio maiores
            necessitatibus ea sint itaque voluptatem. Non a tempore dignissimos
            sint commodi fugit ipsam.
            similique! Deserunt earum ducimus ipsum odio maiores
            necessitatibus ea sint itaque voluptatem. Non a tempore dignissimos
            sint commodi fugit ipsam.similique! Deserunt earum
          </p>
        </div>
      </div>
    </div>
  );
}

export default Destination;
