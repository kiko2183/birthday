import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import './Home.css';

function Home() {
  const fullText =
    'Бажаю тобі щастя, тепла, яскравих моментів і здійснення всіх мрій. Дякую, що ти є ❤️';
  const [displayedText, setDisplayedText] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const years = ['2022', '2023', '2024', '2025'];

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      {/* Full-screen mobile menu */}
      {menuOpen && (
        <div className="fullscreen-menu">
          <button
            onClick={() => setMenuOpen(false)}
            className="close-button"
            aria-label="Закрити меню"
          >
            ✕
          </button>
          <h2 className="fullscreen-menu-title">Спогади</h2>
          <div className="fullscreen-menu-links">
            {years.map((year) => (
              <Link
                key={year}
                to={`/memories/${year}`}
                className="memory-button"
                onClick={() => setMenuOpen(false)}
              >
                {year}
              </Link>
            ))}
            <Link
              to="/"
              className="back-button"
              onClick={() => setMenuOpen(false)}
            >
              ⬅ Назад до головної
            </Link>
          </div>
        </div>
      )}

      <div className="main-content">
        <h2 className="main-title">З Днем Народження, Любімка! 🎉</h2>
        <p className="typing-text">{displayedText}</p>

        {/* Desktop/Tablet menu */}
        <div className="desktop-menu">
          {years.map((year) => (
            <Link key={year} to={`/memories/${year}`} className="memory-button">
              {year}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;