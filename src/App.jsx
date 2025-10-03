import { Routes, Route } from 'react-router-dom';
import Header from './components/Sections/Header';
import Footer from './components/Sections/Footer';
import Home from './Pages/Home';
import Character from './Pages/Character';
import Favorites from './Pages/Favorites';
import './index.css';

export default function App() {
  return (
    <div className="app-root">
      <Header />

      <main className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/character/:id" element={<Character />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<div>Not Found</div>} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
