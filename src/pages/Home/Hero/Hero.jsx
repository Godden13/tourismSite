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
          <div className="guestst">
            <p>Guests</p>
            <span>2 Adults</span>
          </div>
          <div className="date">
            <p>Date</p>
            <span>12 - 13 April 2021</span>
          </div>
          <div className="package">
            <p>Package</p>
            <span>All</span>
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
