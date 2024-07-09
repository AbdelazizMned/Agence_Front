import React, { useState } from "react";
import "./css/Hero.css";
import slide1 from "../assets/Images/slide1.jpg";
import slide2 from "../assets/Images/slide2.jpg";
import slide3 from "../assets/Images/slide3.jpg";
import socialmedia from "../assets/Icons/socialmedia.png";
import { Search, ChevronDown } from "lucide-react";
var Images = [slide1, slide2, slide3];

function Hero() {
  const [ImageIndex, setImageIndex] = useState(0);
  const [count, setCount] = useState("");
  function showNextImage() {
    setImageIndex((index) => {
      if (index === 0) return Images.length - 1;
      return index - 1;
    });
  }
  function showPrevImage() {
    setImageIndex((index) => {
      if (index === Images.length - 1) return 0;
      return index + 1;
    });
  }
  var options = ["Tunis", "Turkey", "Paris"];
  return (
    <div className="slide-container">
      <img className="socialmedia" src={socialmedia} />
      <div className="wrapper">
        {Images.map((url) => {
          return (
            <img
              key={url}
              src={url}
              alt="slide"
              className="slide-img"
              style={{ translate: `${-100 * ImageIndex}%` }}
            />
          );
        })}
      </div>
      <div className="buttons">
        {Images.map((_, index) => (
          <button
            key={index}
            className={index === ImageIndex ? "flat-button" : "button-white"}
            onClick={() => setImageIndex(index)}
          ></button>
        ))}
      </div>
      <div className="picker">
        <div
          className="lists dropdown-container"
          style={{ color: "white", fontSize: "15px" }}
        >
          destination
          <div class="dropdown">
            <button class="dropbtn">
              {count === "" ? "Tunis" : count}
              <ChevronDown style={{ height: "15px", width: "15px", paddingLeft:"7px" }} />
            </button>
            <div class="dropdown-content">
              {options.map((option) => (
                <a onClick={() => setCount(option)} key={option}>
                  {option}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="lineb"></div>
        <div
          className="lists dropdown-container"
          style={{ color: "white", fontSize: "15px" }}
        >
          destination
          <div class="dropdown">
            <button class="dropbtn">
              {count === "" ? "Tunis" : count}
              <ChevronDown style={{ height: "15px", width: "15px", paddingLeft:"7px" }} />
            </button>
            <div class="dropdown-content">
              {options.map((option) => (
                <a onClick={() => setCount(option)} key={option}>
                  {option}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="lineb"></div>
        <div
          className="lists dropdown-container"
          style={{ color: "white", fontSize: "15px" }}
        >
          destination
          <div class="dropdown">
            <button class="dropbtn">
              {count === "" ? "Tunis" : count}
              <ChevronDown style={{ height: "15px", width: "15px", paddingLeft:"7px" }} />
            </button>
            <div class="dropdown-content">
              {options.map((option) => (
                <a onClick={() => setCount(option)} key={option}>
                  {option}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="lineb"></div>
        <div
          className="lists dropdown-container"
          style={{ color: "white", fontSize: "15px" }}
        >
          destination
          <div class="dropdown">
            <button class="dropbtn">
              {count === "" ? "Tunis" : count}
              <ChevronDown style={{ height: "15px", width: "15px", paddingLeft:"7px" }} />
            </button>
            <div class="dropdown-content">
              {options.map((option) => (
                <a onClick={() => setCount(option)} key={option}>
                  {option}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="lineb"></div>
        <div
          className="lists dropdown-container"
          style={{ color: "white", fontSize: "15px" }}
        >
          destination
          <div class="dropdown">
            <button class="dropbtn">
              {count === "" ? "Tunis" : count}
              <ChevronDown style={{ height: "15px", width: "15px", paddingLeft:"7px" }} />
            </button>
            <div class="dropdown-content">
              {options.map((option) => (
                <a onClick={() => setCount(option)} key={option}>
                  {option}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="lineb"></div>
        <div
          className="lists dropdown-container"
          style={{ color: "white", fontSize: "15px" }}
        >
          destination
          <div class="dropdown">
            <button class="dropbtn">
              {count === "" ? "Tunis" : count}
              <ChevronDown style={{ height: "15px", width: "15px", paddingLeft:"7px" }} />
            </button>
            <div class="dropdown-content">
              {options.map((option) => (
                <a onClick={() => setCount(option)} key={option}>
                  {option}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="lineb"></div>
        <div>
          <button
            style={{
              backgroundColor: "white",
              width: "65px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "25px",
              borderRadius: "50px",
              borderStyle: "none",
              cursor: "pointer",
            }}
          >
            <Search
              style={{ height: "15px", width: "15px", color: "#0C6661" }}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
