import { Component } from 'react';
import './Hero.css';
import '../../../components/button/button.css';

class Hero extends Component {
  render() {
    return (
      <div className="BigHeroContainer">
        <div className="containerHero">
          <div>
            <h1>Experience the beauty of Rwanda with us</h1>
            <p>Discover the town of a Thousand Hills</p>
          </div>
          <div className="angleBr">
            <span className="left">&rang;</span>
            <span className="right">&lang;</span>
          </div>
        </div>
        <div className="searchBar">
          <input
            type="search"
            placeholder="Search activities Or destinations"
          />
          <div className="guests">
            <p>Guests</p>
            <select name="2 Adults">
              <option value="2 Adults">2 Adults</option>
            </select>
          </div>
          <div className="guests">
            <p>Date</p>
            <select>
              <option value="date">12 - 13 April 2021</option>
            </select>
          </div>
          <div className="guests">
            <p>Package</p>
            <select>
              <option value="All">All</option>
            </select>
          </div>
          <button type="button" className="buttonStyle1">
            Book Now
          </button>
        </div>
      </div>
    );
  }
}

export default Hero;
