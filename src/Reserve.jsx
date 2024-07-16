import React from "react";
import "./Reserve.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "/node_modules/flag-icons/css/flag-icons.min.css";
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
                      <button className="dropbtng"><span class="fi fi-tr"></span>+90</button>
                      <div className="dropdown-contentg">
                        <a href="#"><span class="fi fi-tn"></span> tunis</a>
                        <a href="#"><span class="fi fi-tr"></span>Turkey</a>
                        <a href="#"><span class="fi fi-fr"></span>France</a>
                      </div>
                    <input
                      type="text"
                      placeholder="Area Code"
                      className="city-form formms"
                    ></input>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
          <div className="reserve-summary"></div>
        </div>
      </div>
    </>
  );
}

export default Reserve;
