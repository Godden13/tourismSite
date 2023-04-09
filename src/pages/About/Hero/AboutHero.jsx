import './AboutHero.css';

export default function AboutHero() {
  return (
    <div className="about__hero__container">
      <div className="about__container_compo">
        <h1>We are dedicated to providing the best travel experience.</h1>
        <p>Discover the Land of a Thousand Hills</p>
      </div>
      <div className="searchBar" id="About_searchBar">
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
