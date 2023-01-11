import { Component } from 'react';
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
            <a href="../">Home</a>
            <a href="../">About</a>
            <a href="../">Tour PAckage</a>
            <a href="../">Gallery</a>
            <a href="../">Blog</a>
            <a href="../">Contact Us</a>
          </div>
          <div className="button">
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
