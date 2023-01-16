import AboutBody from './AboutBody/AboutBody';
import AboutHero from './Hero/AboutHero';

export default function About() {
  return (
    <div className="about__body">
      <AboutHero />
      <AboutBody />
    </div>
  );
}
