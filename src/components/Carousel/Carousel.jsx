import './Carousel.css';
import img1 from '../../assets/Home/image1.png';
import img2 from '../../assets/Home/image2.png';
import img3 from '../../assets/Home/imge3.png';
import '../button/button.css';

const images = [
  {
    src: img1,
    h2: 'Akagera National Park',
    p: 'Visitors to Akagera National Park can take part in a range of activities, including game drives, boat safaris, bird watching, and nature walks.',
  },

  {
    src: img2,
    h2: 'Bisoke Hike',
    p: 'The Bisoke hike is a popular mountain trek in Rwanda, located in the Volcanoes National Park. It is one of the most challenging hikes in the park.',
  },

  {
    src: img3,
    h2: 'Lake Kivu trip',
    p: 'A trip to Lake Kivu can be a truly unique and memorable experience.',
  },

  {
    src: img1,
    h2: 'Akagera National Park',
    p: 'Visitors to Akagera National Park can take part in a range of activities, including game drives, boat safaris, bird watching, and nature walks.',
  },

  {
    src: img2,
    h2: 'Bisoke Hike',
    p: 'The Bisoke hike is a popular mountain trek in Rwanda, located in the Volcanoes National Park. It is one of the most challenging hikes in the park.',
  },

  {
    src: img3,
    h2: 'Lake Kivu trip',
    p: 'A trip to Lake Kivu can be a truly unique and memorable experience.',
  },
];

export default function Carousel() {
  return (
    <div className="Carousel__container">
      <div className="imageCards">
        {images.map((image) => {
          return (
            <div className="card">
              <img src={image.src} alt={image.h2} id="image" />
              <div className="text">
                <h2>{image.h2}</h2>
                <p> {image.p} </p>
              </div>
              <button type="button" className="buttonStyle1" id="one">
                Load more
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
