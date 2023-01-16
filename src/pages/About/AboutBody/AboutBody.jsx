import './AboutBody.css';
import img1 from '../../../assets/about/img1.png';
import img2 from '../../../assets/about/img2.png';
import img3 from '../../../assets/about/img3.png';

export default function AboutBody() {
  return (
    <div className="aboutBody__container">
      <h2>Welcome to Africa Wizzy Safari</h2>
      <div className="about__line_space"> </div>
      <div className="about__line">
        <div className="about__img">
          <img src={img1} alt="" />
          <p>
            Welcome to Africa Wizzy Safari, a leading tourism company based in
            Rwanda. We have been in business for over 5 years and are committed
            to providing top-quality tours and services to our clients. Our
            mission is to showcase the beauty and culture of Rwanda to visitors
            from around the world, and to contribute to the sustainable
            development of the country through responsible tourism practices.
          </p>
        </div>
        <div className="about__img">
          <p>
            At Africa Wizzy safari, we offer a wide range of tours and
            activities, including cultural and historical tours, wildlife
            safaris, mountain gorilla trekking, and more. Our experienced and
            knowledgeable guides will ensure that you have a safe and enjoyable
            experience while exploring the stunning landscapes and rich culture
            of Rwanda.
          </p>
          <img src={img2} alt="" />
        </div>
        <div className="about__img">
          <img src={img3} alt="" />
          <p>
            We are proud to have received numerous awards and accolades for our
            commitment to excellence, including the RDD award and the Excellence
            award. Thank you for choosing Africa Wizzy Safari for your travel
            needs in Rwanda. We look forward to welcoming you on one of our
            tours soon!
          </p>
        </div>
      </div>
    </div>
  );
}
