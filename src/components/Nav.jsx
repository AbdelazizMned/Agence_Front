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
            <button className="dropdown-toggle"><a style={{textDecoration:'none', color:'white'}} href="/">Home</a></button>
          </div>
          <div></div>
          <div className="dropdown pd">
            <button className="dropdown-toggle">List of hotels</button>
            <ul className="dropdown-menu">
              <li>
                <a href="/filter">All Hotels</a>
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
            <button className="dropdown-toggle">Types of holidays</button>
            <ul className="dropdown-menu">
              <li>
                <a href="result">Holiday1</a>
              </li>
              <li>
                <a href="#">Holiday1</a>
              </li>
              <li>
                <a href="#">Holiday1</a>
              </li>
            </ul>
          </div>
          <div className="dropdown pd">
            <button className="dropdown-toggle">special Offers</button>
            <ul className="dropdown-menu">
              <li>
                <a href="reserve">All Hotels</a>
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
            <div className="pd">
              <button className="dropdown-toggle"><a style={{textDecoration:'none', color:'white'}} href="/">Contact</a></button>
            </div>
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
