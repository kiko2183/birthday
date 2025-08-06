import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header'; // Added missing import
import './Memories.css';

function Memories() {
  const { year } = useParams();

  const dummyMemories = {
    '2022': [
      { date: '10 березня 2022', text: 'Наш перший пікнік 💕', img: 'https://via.placeholder.com/300x200' },
    ],
    '2023': [
      { date: '8 квітня 2023', text: 'Весняна прогулянка 🌸', img: 'https://via.placeholder.com/300x200' },
    ],
    '2024': [
      { date: '15 серпня 2024', text: 'Поїздка на озеро 🌊', img: 'https://via.placeholder.com/300x200' },
    ],
    '2025': [
      { date: '2 серпня 2025', text: 'Морське побачення', img: 'https://via.placeholder.com/300x200' },
      { date: '15 червня 2025', text: 'Наша поїздка в Карпати', img: 'https://via.placeholder.com/300x200' },
      { date: '28 лютого 2025', text: 'Зимова казка', img: 'https://via.placeholder.com/300x200' },
    ]
  };

  const memories = dummyMemories[year] || [];

  return (
    <div className="memories-container">
      <Header menuOpen={false} setMenuOpen={() => {}} /> {/* Now properly defined */}
      <h2 className="memories-title">Спогади за {year} 📸</h2>

      {memories.length === 0 ? (
        <p className="no-memories">На жаль, спогадів за цей рік ще немає 😢</p>
      ) : (
        <div className="memories-grid">
          {memories.map((m, i) => (
            <div key={i} className="memory-card">
              <img src={m.img} alt={m.text} className="memory-image" />
              <h3 className="memory-date">{m.date}</h3>
              <p className="memory-text">{m.text}</p>
            </div>
          ))}
        </div>
      )}

      <Link to="/" className="back-link">⬅ Назад до головної</Link>
    </div>
  );
}

export default Memories;