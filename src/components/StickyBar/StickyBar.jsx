import { Component } from 'react';
import './StickyBar.css';

class StickyBar extends Component {
  render() {
    return (
      <div className="containerSticky">
        <div className="contact">
          <span>
            <i className="fa-sharp fa-solid fa-phone-flip" />
            +250 784 688 641
          </span>
          <span>
            <i className="fa-solid fa-envelope" />
            bbonteemma@gmail.com
          </span>
        </div>
        <div className="socialMedia">
          <i className="fa-brands fa-facebook" />
          <i className="fa-brands fa-twitter" />
          <i className="fa-brands fa-linkedin" />
          <i className="fa-brands fa-instagram" />
        </div>
      </div>
    );
  }
}

export default StickyBar;
