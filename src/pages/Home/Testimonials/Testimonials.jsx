import './Testimonials.css';
import image1 from '../../../assets/Home/footer/12.png';

const images = [
  {
    src: image1,
    h2: 'Emma Waston',
    p: 'I recently went on a tour with XYZ Tourism Company and was extremely impressed with the level of professionalism and organization.',
  },
  {
    src: image1,
    h2: 'Emma Waston',
    p: 'I recently went on a tour with XYZ Tourism Company and was extremely impressed with the level of professionalism and organization.',
  },
  {
    src: image1,
    h2: 'Emma Waston',
    p: 'I recently went on a tour with XYZ Tourism Company and was extremely impressed with the level of professionalism and organization.',
  },
];

export default function Testimonials() {
  return (
    <div className="test_body">
      <div className="card_Body">
        {images.map((pic) => {
          return (
            <div className="test_subBody">
              <img src={pic.src} alt="{pic.h2}" />
              <div className="test_text">
                <h2>{pic.h2}</h2>
                <p>{pic.p}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="emptyDiv">
        <div className="empty"> </div>
        <div className="empty"> </div>
        <div className="empty"> </div>
      </div>
    </div>
  );
}
