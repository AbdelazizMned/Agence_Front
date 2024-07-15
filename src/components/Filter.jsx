import React from "react";
import "./css/Filter.css";
import MultiRangeSlider from "./MultiRangeSlider";
import { FaStar } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { GiForkKnifeSpoon } from "react-icons/gi";
import slide2 from '../assets/Images/slide2.jpg'
function Filter() {
  return (
    <div className="Filter-parent">
      <div className="Filter-container">
        <div className="Filter-">
          <div className="first-section">
            <p style={{ fontFamily: "calibri", fontSize: "1.3rem" }}>
              Select Hotel
            </p>
            <div className="line-sect"></div>
            <form className="search-input">
              <input type="text" className="search-form" />
              <button type="submit" className="search-button">
                Search
              </button>
            </form>
          </div>
          <div className="second-section">
            <p
              style={{
                fontFamily: "calibri",
                fontSize: "1.3rem",
                marginTop: "1rem",
              }}
            >
              Price
            </p>
            <div className="line-sect" style={{ marginBottom: "3rem" }}></div>
            <MultiRangeSlider
              min={0}
              max={1000}
              onChange={({ min, max }) =>
                console.log(`min = ${min}, max = ${max}`)
              }
            />
          </div>
          <div className="third-section">
            <p
              style={{
                fontFamily: "calibri",
                fontSize: "1.3rem",
                marginTop: "4rem",
              }}
            >
              Stars
            </p>
            <div className="line-sect" style={{ marginBottom: "3rem" }}></div>
            <label className="containerq">
              <FaStar style={{ fill: "#FFAC32" }} />
              <FaStar style={{ fill: "#FFAC32" }} />
              (32)
              <input type="checkbox"></input>
              <span className="checkmarkq"></span>
            </label>
            <label className="containerq">
              <FaStar style={{ fill: "#FFAC32" }} />
              <FaStar style={{ fill: "#FFAC32" }} />
              <FaStar style={{ fill: "#FFAC32" }} />
              (32)
              <input type="checkbox"></input>
              <span className="checkmarkq"></span>
            </label>
            <label className="containerq">
              <FaStar style={{ fill: "#FFAC32" }} />
              <FaStar style={{ fill: "#FFAC32" }} />
              <FaStar style={{ fill: "#FFAC32" }} />
              <FaStar style={{ fill: "#FFAC32" }} />
              (32)
              <input type="checkbox"></input>
              <span className="checkmarkq"></span>
            </label>
            <label className="containerq">
              <FaStar style={{ fill: "#FFAC32" }} />
              <FaStar style={{ fill: "#FFAC32" }} />
              <FaStar style={{ fill: "#FFAC32" }} />
              <FaStar style={{ fill: "#FFAC32" }} />
              <FaStar style={{ fill: "#FFAC32" }} />
              (32)
              <input type="checkbox"></input>
              <span className="checkmarkq"></span>
            </label>
          </div>
          <div className="fourth-section">
            <p
              style={{
                fontFamily: "calibri",
                fontSize: "1.3rem",
                marginTop: "2rem",
              }}
            >
              Boards
            </p>
            <div className="line-sect" style={{ marginBottom: "1rem" }}></div>
            <label className="containerq" style={{ fontFamily: "calibri" }}>
              All inclusive(34)
              <input type="checkbox"></input>
              <span className="checkmarkq"></span>
            </label>
            <label className="containerq" style={{ fontFamily: "calibri" }}>
              Bed and Breakfast(34)
              <input type="checkbox"></input>
              <span className="checkmarkq"></span>
            </label>
            <label className="containerq" style={{ fontFamily: "calibri" }}>
              Full Board(34)
              <input type="checkbox"></input>
              <span className="checkmarkq"></span>
            </label>
            <label className="containerq" style={{ fontFamily: "calibri" }}>
              Half Board(34)
              <input type="checkbox"></input>
              <span className="checkmarkq"></span>
            </label>
            <label className="containerq" style={{ fontFamily: "calibri" }}>
              Room only(34)
              <input type="checkbox"></input>
              <span className="checkmarkq"></span>
            </label>
            <label className="containerq" style={{ fontFamily: "calibri" }}>
              Uncategorized(34)
              <input type="checkbox"></input>
              <span className="checkmarkq"></span>
            </label>
          </div>
          <div className="fourth-section">
            <p
              style={{
                fontFamily: "calibri",
                fontSize: "1.3rem",
                marginTop: "2rem",
              }}
            >
              Theme
            </p>
            <div className="line-sect" style={{ marginBottom: "1rem" }}></div>
          </div>
          <div className="fifth-section">
            <p
              style={{
                fontFamily: "calibri",
                fontSize: "1.3rem",
                marginTop: "2rem",
              }}
            >
              Facilities
            </p>
            <div className="line-sect" style={{ marginBottom: "1rem" }}></div>
          </div>
          <div className="fifth-section">
            <p
              style={{
                fontFamily: "calibri",
                fontSize: "1.3rem",
                marginTop: "2rem",
              }}
            >
              cities
            </p>
            <div className="line-sect" style={{ marginBottom: "1rem" }}></div>
          </div>
        </div>
        <div className="Filtered">
          <div className="result-card">
            
            <div className="intern">
              <div className="result-card-img">
                <img className="img-props" src={slide2} />
              </div>
              <div className="info-sec">
                <div className="location-info">
                  <ImLocation style={{color:'#0C6661'}} />
                  Djerba
                </div>
                <div className="stay-info">
                  long Sejour el mouradi djerba menzel 4*, All inclusive(11 nuits)
                </div>
                <div className="star-info">
                  <FaStar style={{ fill: "#FFAC32" }} />
                  <FaStar style={{ fill: "#FFAC32" }} />
                  <FaStar style={{ fill: "#FFAC32" }} />
                  <FaStar style={{ fill: "#FFAC32" }} />
                  <FaStar style={{ fill: "#FFAC32" }} />
                </div>
                <div className="bonus-info">
                <GiForkKnifeSpoon /> All inclusive
                </div>
              </div>
              <div className="price-sec">
                <div className="promo-bubble">35%</div>
                <div className="prev-price"><span>1045$</span></div>
                <div className="actual-price">
                  a partir de
                  <span className="price-stl">679$</span>
                </div>
                <button className="offre-link">See offer</button>
              </div>
            </div>
          </div>
          <div className="result-card">
            
            <div className="intern">
              <div className="result-card-img">
                <img className="img-props" src={slide2} />
              </div>
              <div className="info-sec">
                <div className="location-info">
                  <ImLocation style={{color:'#0C6661'}} />
                  Djerba
                </div>
                <div className="stay-info">
                  long Sejour el mouradi djerba menzel 4*, All inclusive(11 nuits)
                </div>
                <div className="star-info">
                  <FaStar style={{ fill: "#FFAC32" }} />
                  <FaStar style={{ fill: "#FFAC32" }} />
                  <FaStar style={{ fill: "#FFAC32" }} />
                  <FaStar style={{ fill: "#FFAC32" }} />
                  <FaStar style={{ fill: "#FFAC32" }} />
                </div>
                <div className="bonus-info">
                <GiForkKnifeSpoon /> All inclusive
                </div>
              </div>
              <div className="price-sec">
                <div className="promo-bubble">35%</div>
                <div className="prev-price"><span>1045$</span></div>
                <div className="actual-price">
                  a partir de
                  <span className="price-stl">679$</span>
                </div>
                <button className="offre-link">See offer</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
