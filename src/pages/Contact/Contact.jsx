import PackageHero from '../Package/PackageHero/PackageHero';
import './Contact.css';
import ContactForm from './ContactFrom/ContactForm';

export default function Contact() {
  return (
    <div className="contact__container">
      <PackageHero smallText="Contact US" text="Home" title="Gallery" />
      <ContactForm />
    </div>
  );
}
