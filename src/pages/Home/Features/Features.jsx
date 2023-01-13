import './Features.css';
import image1 from '../../../assets/Home/arr2/1.png';
import image2 from '../../../assets/Home/arr2/2.png';
import image3 from '../../../assets/Home/arr2/3.png';
import image4 from '../../../assets/Home/arr2/4.png';

const images = [
  {
    src: image1,
    h2: 'Kigali',
    p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat elit sed pretium, egestas sed sit.',
  },
  {
    src: image2,
    h2: 'Huye',
    p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat elit sed pretium, egestas sed sit.',
  },
  {
    src: image4,
    h2: 'Rubavu',
    p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat elit sed pretium, egestas sed sit.',
  },
  {
    src: image3,
    h2: 'Musanze',
    p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat elit sed pretium, egestas sed sit.',
  },
];

export default function Features() {
  return (
    <div className="Features__Container">
      <div className="buttons">
        <button type="button" className="buttonStyle1">
          &lang;
        </button>
        <button type="button" className="buttonStyle1">
          &rang;
        </button>
      </div>
      <div className="Features__image" />
      <div id="imageCards">
        {images.map((image) => {
          return (
            <div id="card">
              <img src={image.src} alt={image.h2} id="image1" />
              <h2>{image.h2}</h2>
              <p> {image.p} </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
