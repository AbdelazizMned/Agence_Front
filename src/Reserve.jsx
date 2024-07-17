import React from "react";
import "./Reserve.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import MasterCard from "./assets/Icons/mastercard.svg";
import Visa from "./assets/Icons/visa.svg";
import slide1 from "./assets/Images/slide1.jpg";
import { IoStar } from "react-icons/io5";
import { ImLocation } from "react-icons/im";
import { FaCalendarAlt, FaLongArrowAltRight, FaTag } from "react-icons/fa";
import { BsMoonStarsFill } from "react-icons/bs";


function Reserve() {
  return (
    <>
      <Nav />
      <h1 className="ban-header">Home / Hotel / Reservation</h1>
      <p className="ban-text">Your reservation in just one click</p>
      <div className="reserve-parent">
        <div className="reserve-divide"></div>
        <div className="reserve-container">
          <div className="reserve-forms">
            <div className="reserve-forms-container">
              <div className="First-head">Passengers information</div>
              <p className="first-textt">
                if you are already a customer, identify yourself to obtain your
                data. <a href="#">Click here</a>
              </p>
              <form action="" method="get">
                <input
                  type="e-mail"
                  placeholder="E-mail"
                  className="email-form"
                ></input>
                <input
                  type="password"
                  placeholder="Password"
                  className="password-form"
                ></input>
                <button className="login-button">Log in</button>
              </form>
              <div className="gendre-radio">
                <div style={{}}>
                  <label className="containerf">
                    Mr
                    <input type="radio" checked="checked" name="radio"></input>
                    <span className="checkmarkf"></span>
                  </label>
                </div>
                <div style={{}}>
                  <label className="containerf">
                    Mrs
                    <input type="radio" checked="checked" name="radio"></input>
                    <span className="checkmarkf"></span>
                  </label>
                </div>
              </div>
              <div className="Second-head">Contact Information</div>
              <div className="info-forms">
                <div className="info-form">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="first-name-form formm"
                  ></input>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="last-name-form formm"
                  ></input>
                  <input
                    type="text"
                    placeholder="Nationality"
                    className="phone-form formm"
                  ></input>
                  <input
                    type="text"
                    placeholder="Email"
                    className="email-forms formm"
                  ></input>
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="city-form formm"
                  ></input>
                  <div className="dropdowng">
                    <button className="dropbtng">
                      <span class="fi fi-tr"></span>+90
                    </button>
                    <div className="dropdown-contentg">
                      <a href="#">
                        <span class="fi fi-tn"></span> tunis
                      </a>
                      <a href="#">
                        <span class="fi fi-tr"></span>Turkey
                      </a>
                      <a href="#">
                        <span class="fi fi-fr"></span>France
                      </a>
                    </div>
                    <input
                      type="text"
                      placeholder="Area Code"
                      className="city-form formms"
                    ></input>
                  </div>
                  <div className="Third-head">Occupancy information</div>
                  <div className="civility-section-parent">
                    <div className="civility-section">
                      <div className="civility-header">
                        1X PREMIUM DOUBLE ROOM 1 ULTRA ALL INCLUSIVE SOFT DRINK
                      </div>
                      <div className="civility-content">
                        <div className="gendres-form">
                          <form action="" method="get">
                            <label className="form-label">Civility</label>
                            <br />
                            <br />
                            <input
                              className="-gender-form"
                              type="text"
                              placeholder="Mr"
                            ></input>
                            <input
                              className="-gender-form"
                              type="text"
                              placeholder="Mrs"
                            ></input>
                          </form>
                        </div>
                        <div className="gendres-form">
                          <form action="" method="get">
                            <label className="form-label">First Name</label>
                            <br />
                            <br />
                            <input
                              className="-gender-form"
                              type="text"
                              placeholder="First Name"
                            ></input>
                            <input
                              className="-gender-form"
                              type="text"
                              placeholder="First Name"
                            ></input>
                          </form>
                        </div>
                        <div className="gendres-form">
                          <form action="" method="get">
                            <label className="form-label">Last Name</label>
                            <br />
                            <br />
                            <input
                              className="-gender-form"
                              type="text"
                              placeholder="Last Name"
                            ></input>
                            <input
                              className="-gender-form"
                              type="text"
                              placeholder="Last Name"
                            ></input>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="add-service">
                    <p>Do you want to add a service to your reservation ?</p>
                  </div>
                  <div className="payment-section-parent">
                    <div className="payment-section">
                      <div className="fourth-head">
                        how do you want to pay ?
                      </div>
                      <div className="payment-methods">
                        <div className="pay-title">
                          <p>Online Payment</p>
                        </div>
                        <div className="pay-method">
                          <label className="containerf">
                            I Pay The Full Amount
                            <input
                              type="radio"
                              checked="checked"
                              name="radio"
                            ></input>
                            <span className="checkmarkf"></span>
                          </label>
                          <div className="logos">
                            <img
                              src={MasterCard}
                              className="cards-img"
                              alt="MasterCard"
                            />
                            <img src={Visa} className="cards-img" alt="Visa" />
                          </div>
                        </div>
                      </div>
                      <label class="containera">
                        I agree to present the bank card used for payment if
                        necessary.
                        <input type="checkbox"></input>
                        <span class="checkmarka"></span>
                      </label>
                      <label class="containera">
                        Please check the box to confirm having read and accepted
                        the general conditions of sale and use.
                        <input type="checkbox"></input>
                        <span class="checkmarka"></span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="reserve-summary">
            <div className="summary-title">Your Reservation Summary</div>
            <div className="summary-content">
              <img src={slide1} alt="" className="summary-image" />
              <p className="Hotel-name-sum">
                Movenpick Resort & Marine Cairo Media City
              </p>
              <div className="stars-sum">
                <IoStar className="stars-sum-span" />
                <IoStar className="stars-sum-span" />
                <IoStar className="stars-sum-span" />
                <IoStar className="stars-sum-span" />
                <IoStar className="stars-sum-span" />
              </div>
              <div className="location-div">
                <ImLocation style={{ marginRight: "1rem" }} />
                El wahad Rd, First 6th of October, Third 6th of october, Giza
                Governorate 3280710, Egypte
              </div>
              <div className="location-div">
                <FaCalendarAlt style={{ marginRight: "1rem" }} />
                26 mai 2024 <FaLongArrowAltRight /> 12 juin 2024 <BsMoonStarsFill style={{marginLeft:'1rem',marginRight:'1rem'}}/> 17 Nights<br />you selected
              </div>
              <div className="location-div-spc">
                <FaTag style={{ marginRight: "1rem" }} />
                1X PREMIUM DOUBLE ROOM 1 ULTRA ALL INCLUSIVE SOFT DRINK<br />2 Adults
              </div>
              <div className="price-div-sum">
                <p className="sum-price-head">Summary of amount</p>
                <p className="sum-price">
                  total amount:<span className="price-summary">1 522$</span>
                </p>

              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Reserve;
