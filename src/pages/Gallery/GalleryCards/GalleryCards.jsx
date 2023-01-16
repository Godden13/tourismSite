import './GalleryCards.css';
import img1 from '../../../assets/gallery/1.png';
import img2 from '../../../assets/gallery/2.png';
import img3 from '../../../assets/gallery/3.png';
import img4 from '../../../assets/gallery/4.png';
import img5 from '../../../assets/gallery/5.png';
import img6 from '../../../assets/gallery/6.png';
import img7 from '../../../assets/gallery/7.png';
import img8 from '../../../assets/gallery/8.png';
import img9 from '../../../assets/gallery/9.png';
import img10 from '../../../assets/gallery/10.png';
import img11 from '../../../assets/gallery/11.png';
import img12 from '../../../assets/gallery/12.png';
import img13 from '../../../assets/gallery/13.png';
import img14 from '../../../assets/gallery/14.png';
import img15 from '../../../assets/gallery/15.png';
import img16 from '../../../assets/gallery/16.png';
import img17 from '../../../assets/gallery/17.png';
import img18 from '../../../assets/gallery/18.png';
import img19 from '../../../assets/gallery/19.png';
import img20 from '../../../assets/gallery/20.png';
import img21 from '../../../assets/gallery/21.png';
import img22 from '../../../assets/gallery/22.png';
import img23 from '../../../assets/gallery/23.png';
import img24 from '../../../assets/gallery/24.png';

const images = [
  { src: img1 },
  { src: img2 },
  { src: img3 },
  { src: img4 },
  { src: img5 },
  { src: img6 },
  { src: img7 },
  { src: img8 },
  { src: img9 },
  { src: img10 },
  { src: img11 },
  { src: img12 },
  { src: img13 },
  { src: img14 },
  { src: img15 },
  { src: img16 },
  { src: img17 },
  { src: img18 },
  { src: img19 },
  { src: img20 },
  { src: img21 },
  { src: img22 },
  { src: img23 },
  { src: img24 },
];

export default function GalleryCards() {
  return (
    <div className="GalleryImages">
      {images.map((image) => {
        return (
          <div className="galleryCards">
            <img src={image.src} alt="" />;
          </div>
        );
      })}
    </div>
  );
}
