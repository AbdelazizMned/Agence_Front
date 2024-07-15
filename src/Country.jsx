import React from "react";
import "./Country.css";
import Nav from "./components/Nav";
import slide1 from "./assets/Images/slide1.jpg";
import slide2 from "./assets/Images/slide2.jpg";
import slide3 from "./assets/Images/slide3.jpg";
import Filter from "./components/Filter"
import Footer from './components/Footer'

function Country() {
  return (
    <>
    <Nav />
    <h1 className="sec-header">Home / Best Destination / Egypt</h1>
    <div className="country-parent">
          <div className="country-container">
              <div className="best-places-parent">
                  <div className="best-places">
                      <h1 className="headr">Which places to visit</h1>
                      <div className="linediv"></div>
                      <div className="description_div">
                          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, qui
                          ullam, totam, temporibus veritatis non perspiciatis inventore vitae
                          esse soluta reiciendis? Aliquam aut obct obcaecati sapiente voluptatem
                          quibusdam magnam dolorem? Tempora.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, qui
                          ullam, totam, temporibgnam dolorem? Tempora.Loaecati sapiente voluptatem
                          quibusdam magnam dolorem? Tempora.Lorem ipti sapieus veritatis non psum, dolor sit amet consectetur adipisicing elit. Odit, qui
                          ullam, totam, temporibus veritatis non perspiciatis inventore vitae
                          esse soluta reiciendis? Aliquam aurem ipsum, dolor sit amet consectetur adipisicing elit. Odit, qui
                          ullam, totam, temporibus veritatis non perspiciatis inventore vitae
                          esse soluta reiciendis? Aliquam aut obcaecaerspiciatis inventore vitae
                          esse soluta reiciendis? Aliquam aut obcaecati sapiente voluptatem
                          quibusdam mante voluptatem
                          quibusdam magnam dolorem? Tempora.
                      </div>
                  </div>
                  <div className="imgs">
                      <div className="img-flex-gap">
                          <img className="img-size" src={slide1} alt="" />
                      </div>
                      <div className="img-flex-gap">
                          <img className="img-size" src={slide2} alt="" />
                      </div>
                      <div className="img-flex-gap">
                          <img className="img-size" src={slide3} alt="" />
                      </div>
                  </div>
                  <div className="best-places">
                      <h1 className="headr">Best Hotels</h1>
                      <div className="linediv"></div>
                      <div className="description_div">
                          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, qui
                          ullam, totam, temporibus veritatis non perspiciatis inventore vitae
                          esse soluta reiciendis? Aliquam aut obct obcaecati sapiente voluptatem
                          qLorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, qui
                          ullam, totam, temporibus veritatis non perspiciatis inventore vitae
                          esse soluta reiciendis? Aliquam aut obct obcaecati sapiente voluptatem
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <Filter />
      <Footer />
      </>
  );
}

export default Country;
