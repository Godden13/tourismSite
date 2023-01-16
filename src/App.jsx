import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import StickyBar from './components/StickyBar/StickyBar';
import NavBar from './components/Nav/NavBar';
import Footer from './components/Footer/Footer';
import Package from './pages/Package/Packages';
import Gallery from './pages/Gallery/Gallery';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <StickyBar />
        <NavBar />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route index path="/about" element={<About />} />
          <Route index path="/package" element={<Package />} />
          <Route index path="/gallery" element={<Gallery />} />
          <Route index path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
