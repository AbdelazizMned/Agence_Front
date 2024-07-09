import React from "react";
import "./css/Nav.css";
import { IoPerson } from "react-icons/io5";
import samigo from "../assets/Icons/samigo.png";

function Nav() {
  return (
    <>
      <nav className="parent">
        <div className="logo">
          <img src={samigo} className="logoimg" />
        </div>
        <div className="links">
            <div className="pd">
          <button className="dropdown-toggle">Home</button>
          </div>
            <div className="dropdown pd">
              <button className="dropdown-toggle">List of Hotels</button>
              <ul className="dropdown-menu">
                <li>
                  <a href="#">All Hotels</a>
                </li>
                <li>
                  <a href="#">Beach Resorts</a>
                </li>
                <li>
                  <a href="#">City Breaks</a>
                </li>
              </ul>
            </div>
            <div className="dropdown pd">
              <button className="dropdown-toggle">Holiday Types</button>
              <ul className="dropdown-menu">
                <li>
                  <a href="#">All Hotels</a>
                </li>
                <li>
                  <a href="#">Beach Resorts</a>
                </li>
                <li>
                  <a href="#">City Breaks</a>
                </li>
              </ul>
            </div>
            <div className="dropdown pd">
              <button className="dropdown-toggle">special Offers</button>
              <ul className="dropdown-menu">
                <li>
                  <a href="#">All Hotels</a>
                </li>
                <li>
                  <a href="#">Beach Resorts</a>
                </li>
                <li>
                  <a href="#">City Breaks</a>
                </li>
              </ul>
            </div>
            <div>
            <div className="pd"><button className="dropdown-toggle">Contact</button></div>
            </div>

        </div>
        <div className="lang">
          <a href="#" className="language">
            EN
          </a>
          <button className="NavButton">
            <IoPerson /> Log in
          </button>
        </div>
      </nav>
    </>
  );
}

export default Nav;
