import React from "react";
import { Routes, Route} from "react-router-dom"
import './App.css';
import Footer from "./components/Footer";
import Navbar from './components/Navbar';
import AboutUs from "./pages/AboutUs";
import BookStore from "./pages/BookStore";
import BraceletStore from "./pages/BraceletStore";
import CrystalStore from "./pages/CrystalStore";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <div className="App">

      <Navbar />

      <Routes>

        <Route path="/" element={<LandingPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/crystals" element={<CrystalStore />} />
        <Route path="/e-books" element={<BookStore />} />
        <Route path="/bracelets" element={<BraceletStore />} />

      </Routes>

      <Footer />

    </div>
  );
}

export default App;
