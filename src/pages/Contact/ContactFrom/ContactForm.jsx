import Button from '../../../components/button/Button';
import './ContactForm.css';
import '../../../components/StickyBar/StickyBar.css';

export default function ContactForm() {
  return (
    <div className="contactForm__container">
      <div className="contactform__info">
        <h1>Get in Touch</h1>
        <p>
          We would love to hear from you! If you have any comments or
          suggestions about our website or our tours, please donot hesitate to
          get in touch. We are always looking for ways to improve and make your
          travel experience even better.
        </p>
      </div>
      <div className="contact__form">
        <h3>Contact Us</h3>
        <div className="contact__form_name">
          <div className="contact__form_name_fName">
            <h4>First Name</h4>
            <input
              type="text"
              placeholder="Input your First name in Here"
              className="name"
            />
          </div>
          <div className="contact__form_name_lName">
            <h4>Last Name</h4>
            <input
              type="text"
              placeholder="Input your Last name in Here"
              className="name"
            />
          </div>
        </div>
        <div className="contact__form_email">
          <h4>Email</h4>
          <input
            type="text"
            placeholder="Input your Email Address in Here"
            className="email"
          />
        </div>
        {/* <div className="contact__form_phone">
          
        </div> */}
        <div className="contact__form_message">
          <h4>Message</h4>
          <input
            type="text"
            placeholder="Input Your Message"
            className="message"
          />
        </div>
        <Button id="contact__form_button" text="Submit" />
      </div>
      <div className="contactinfo">
        <div className="contact_socialMedia">
          <h4>Social Media</h4>
          <div className="contact_socialMedia_icons">
            <i className="fa-brands fa-facebook" />
            <i className="fa-brands fa-twitter" />
            <i className="fa-brands fa-linkedin" />
            <i className="fa-brands fa-instagram" />
          </div>
        </div>
        <div className="contact__form_contact">
          <div className="contact_phone">
            <h4>Email & Phone</h4>
            <div className="contact_phone_info">
              <span>
                <i className="fa-sharp fa-solid fa-phone-flip" />
                +250 784 688 641
              </span>
              <span>
                <i className="fa-solid fa-envelope" />
                bbonteemma@gmail.com
              </span>
            </div>
          </div>
        </div>
        <div className="contactInfo_address">
          <h4>Address</h4>
          <div className="address_info">
            <p>
              kk 600 st <br /> Kigali, Rwanda
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
