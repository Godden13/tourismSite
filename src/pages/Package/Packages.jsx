import CarouselBody from '../../components/Body/Body';
import Carousel from '../../components/Carousel/Carousel';
import PackageBtn from './PackageBtn/PackageBtn';
import PackageHero from './PackageHero/PackageHero';

export default function Package() {
  return (
    <div className="PackageBody">
      <PackageHero text="Home" smallText="Tour Package" title="Tour Package" />
      <CarouselBody
        smallText="Choose your Package"
        text="Select your Best Package for your Travel"
      />
      <Carousel />
      <Carousel />
      <Carousel />
      <Carousel />
      <PackageBtn />
    </div>
  );
}
