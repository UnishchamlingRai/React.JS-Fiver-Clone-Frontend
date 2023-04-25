import React from "react";
import "./Featured.scss";
const Featured = () => {
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h3>Find the perfect Freelance services <br/>For your business</h3>
          <div>
            <input type="search" placeholder="Search Here" className="search" />
            <button>Search</button>
            <div className='popular'>
                <ul className="popularList">
                    <span>Popular:</span>
                    <li>Web Design</li>
                    <li>WorldPress</li>
                    <li>Logo Design</li>
                    <li>Ai Services</li>
                </ul>
            </div>
          </div>
        </div>

        <div className="right">
          <img src="" alt="" />
          <h1>This is photot</h1>
        </div>
      </div>
    </div>
  );
};

export default Featured;
