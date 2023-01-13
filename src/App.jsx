import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import StickyBar from './components/StickyBar/StickyBar';
import NavBar from './components/Nav/NavBar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <StickyBar />
        <NavBar />
        <Routes>
          <Route index path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
