import React from "react";
import './css/BookContainer.css'

function BookContainer() {
  return (
    <div className="bottom-container">
      <div className="main-text">
        <span className="notice">Total amount of stay</span>
        <span className="price-c">1 522$</span>
        <button className="book">Book</button>
      </div>
    </div>
  );
}

export default BookContainer;
