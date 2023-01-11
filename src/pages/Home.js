import Hero from '../components/Hero/Hero';
import NavBar from '../components/Nav/NavBar';
import StickyBar from '../components/StickyBar/StickyBar';

function Home() {
  return (
    <div>
      <StickyBar />
      <NavBar />
      <Hero />
    </div>
  );
}

export default Home;
