import { Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Page from './Pages/Page';
import Footer from './components/Footer';
import Home from './Pages/Home';
import './index.css';

export default function App() {
  return (
    <>
      <Header />
      <nav style={{ display: 'flex', gap: '8px', margin: '12px 0' }}>
        <button>
          <Link to="/">Home</Link>
        </button>
        <button>
          <Link to="/page">Page</Link>
        </button>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page" element={<Page />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>

      <Footer />
    </>
  );
}
