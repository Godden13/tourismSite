import Carousel from '../../components/Carousel/Carousel';
import Hero from './Hero/Hero';
import Features from './Features/Features';
import Justification from './Justification/Justification';
import Testimonials from './Testimonials/Testimonials';
import Body from '../../components/Body/Body';

function Home() {
  return (
    <div>
      <Hero />
      <Body
        smallText="Choose your Package"
        text="Select your Best Package for your Travel"
      />
      <Carousel />
      <Carousel />
      <Body
        smallText="Popular Destinations"
        text="Select Our Best Popular Destinations"
      />
      <Features />
      <Body smallText="Why us?" text="Why Travel with Africa wizzy Safari" />
      <Justification />
      <Body
        smallText="Our Traveller Say"
        text="What our clients say about us"
      />
      <Testimonials />
    </div>
  );
}

export default Home;
