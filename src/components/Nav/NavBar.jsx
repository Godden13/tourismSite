import { Component } from 'react';
import { Link } from 'react-router-dom';
import image from '../../assets/Home/footer/Rectangle 645.png';
import './NavBar.css';
import '../button/button.css';

class NavBar extends Component {
  render() {
    return (
      <div className="containerNav">
        <div className="pages">
          <div className="links">
            <img src={image} alt="" />
            <Link to="/">Home</Link>
            <Link to="about">About</Link>
            <Link to="tourpackage">Tour PAckage</Link>
            <Link to="gallery">Gallery</Link>
            <a href="../">Blog</a>
            <a href="../">Contact Us</a>
          </div>
          <div className="button">
            <i className="fa-solid fa-magnifying-glass" />
            <button type="button" className="buttonStyle1">
              Sign In
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
