import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import './Memories.css';

function Memories() {
  const { year } = useParams();

  const dummyMemories = {
    'фотогалерея': [
      { date: '2018', text: 'В 2018 році тебе ще можна було витягнути позасмагати))', imgs: ['/photo/photo_1.jpg'] },
      { date: '15 червня 2025', text: 'Наша поїздка в Карпати', imgs: ['https://via.placeholder.com/300x200', 'https://via.placeholder.com/300x200', 'https://via.placeholder.com/300x200'] },
      { date: '28 лютого 2025', text: 'Зимова казка', imgs: ['https://via.placeholder.com/300x200'] },
    ],
  };

  const memories = dummyMemories[year] || [];

  return (
    <div className="memories-container">
      <Header menuOpen={false} setMenuOpen={() => {}} />
      <h2 className="memories-title">Фотогалерея 📸</h2>

      {memories.length === 0 ? (
        <p className="no-memories">На жаль, спогадів за цей рік ще немає 😢</p>
      ) : (
        <div className="memories-grid">
          {memories.map((m, i) => (
            <div key={i} className="memory-card">
              <div className="memory-images">
                {m.imgs.map((img, index) => (
                  <img key={index} src={img} alt={`${m.text} - фото ${index + 1}`} className="memory-image" />
                ))}
              </div>
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