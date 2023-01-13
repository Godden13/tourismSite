import './Footer.css';
import image from '../../assets/Home/footer/Rectangle 645.png';

export default function Footer() {
  return (
    <div className="Footer__totalbody">
      <div className="Footer__container">
        <div className="left_side">
          <h2>If you have any question, Let us help you</h2>
          <p>
            If you have any questions or would like to book a tour with us,
            please do not hesitate to contact us.
          </p>
          <p>
            Phone: +250 788 123 456 Email: info@rwandatourism.com Address:
            Kigali, Rwanda
          </p>
          <p>Subscribe to our newspaper</p>
          <div className="search_Bar">
            <input
              type="text"
              placeholder="Input your email here"
              className="search_Bar_input"
            />
            <button className="buttonStyle1" type="button">
              <i className="fa-solid fa-paper-plane-top" />
            </button>
          </div>
        </div>
        <div className="right__side">
          <div className="right__side__top">
            <img src={image} alt="" />
            <div className="socialMedia">
              <i className="fa-brands fa-facebook" />
              <i className="fa-brands fa-twitter" />
              <i className="fa-brands fa-linkedin" />
              <i className="fa-brands fa-instagram" />
            </div>
          </div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <div className="right__side__bottom">
            <div className="line_one">
              <p>Home</p>
              <p>Testimonials</p>
              <p>Destinations</p>
              <p>Signinn</p>
            </div>
            <div className="line_two">
              <p>About Us</p>
              <p>Packages</p>
              <p>Events</p>
              <p>Gallery</p>
            </div>
            <div className="line_three">
              <p>Our Team</p>
              <p>Blog</p>
              <p>Contact Us</p>
            </div>
          </div>
        </div>
      </div>
      <p className="bottom">Copyright Africa Wizzy Safari 2022</p>
    </div>
  );
}
