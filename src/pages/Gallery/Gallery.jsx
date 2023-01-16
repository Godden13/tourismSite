import './Gallery.css';
import Button from '../../components/button/Button';
import PackageHero from '../Package/PackageHero/PackageHero';
import GalleryCards from './GalleryCards/GalleryCards';

function Gallery() {
  return (
    <div className="Gallery_container">
      <PackageHero smallText="Gallery" text="Home" title="Gallery" />
      <div className="GalleryBtn">
        <Button text="Open Instagram" />
      </div>
      <GalleryCards />
    </div>
  );
}

export default Gallery;
