import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

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
    <div className="min-h-screen flex flex-col items-center px-4 sm:px-6 lg:px-10 bg-gradient-to-br from-pink-50 to-green-50">
      {/* Top Bar with Title and Burger */}
      <div className="w-full max-w-5xl py-4 flex justify-between items-center">
        <h1 className="text-2xl sm:text-3xl font-bold text-pink-800">🎀 Привітання</h1>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-pink-800 text-3xl focus:outline-none sm:hidden"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="w-full max-w-5xl bg-white rounded-xl shadow-lg p-4 text-center mb-4 sm:hidden">
          <h2 className="text-xl font-semibold text-pink-800 mb-2">Спогади</h2>
          <div className="flex flex-col gap-3">
            {years.map((year) => (
              <Link
                key={year}
                to={`/memories/${year}`}
                className="memory-button w-full"
                onClick={() => setMenuOpen(false)}
              >
                {year}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="w-full max-w-5xl border-4 border-pink-300 rounded-2xl bg-white p-6 sm:p-10 shadow-xl text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-pink-800 mb-6">
          З Днем Народження, Кохана! 🎉
        </h2>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-pink-700 max-w-2xl mx-auto mb-8 typing-text">
          {displayedText}
        </p>

        {/* Desktop/Tablet Menu */}
        <div className="hidden sm:flex justify-center gap-4 mt-4">
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
