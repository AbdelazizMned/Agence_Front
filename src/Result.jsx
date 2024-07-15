import React from "react";
import "./Result.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import GetInfo from "./components/GetInfo";
import Filter from "./components/Filter";

function Result() {
  return (
    <div>
      <Nav />
      <h1 className="sub-header">Home / Long Stays</h1>
      <GetInfo />
      <div className="result-text">
        <p className="header-t">76 offers Found</p>
        <p className="paragraph-t">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, deserunt
          animi numquam beatae exercitationem modi reprehenderit unde magni sed
          veritatis ipsum? Quae quos hic eius voluptate ipsum temporibus ducimus
          inventore!Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, deserunt
          animi numquam beatae exercitationem modi reprehenderit unde magni sed
          veritatis ipsum? Quae quos hic eius voluptate ipsum temporibus ducimus
          inventore!Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, deserunt
          animi numquam beatae exercitationem modi reprehenderit unde magni sed
          veritatis ipsum? Quae quos hic eius voluptate ipsum temporibus ducimus
          inventore!
        </p>
      </div>
      <div className="tri-div">
        <p>Trier</p>
        <form action="" typeof="text">
            <input className='form-tri' type="text" value="Filter by"></input>
        </form>
      </div>
      <Filter />
      <Footer />
    </div>
  );
}

export default Result;
