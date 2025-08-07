import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import './Memories.css';

function Memories() {
  const { year } = useParams();

  const dummyMemories = {
    'фотогалерея': [
      { date: '2018', text: 'В 2018 році тебе ще можна було витягнути позасмагати))', imgs: ['/photo/photo_1.jpg'] },
      { date: 'Жовтень 2018', text: 'Пам`ятаєш той концерт?', imgs: ['/photo/photo_2.jpg'] },
      { date: 'Жовтень 2018', text: 'Наша сімейка', imgs: ['/photo/photo_3.jpg'] },
      { date: 'Січень 2019', text: 'Спочатку так боялась а потім було мало.))', imgs: ['/photo/photo_4.jpg'] },
      { date: 'Березень 2019', text: 'Класна була прогулянка.))', imgs: ['/photo/photo_5.jpg'] },
      { date: '24 серпня 2021', text: 'Наша перша відпустка))', imgs: ['/photo/photo_6.jpg'] },
      { date: '10 січня 2022', text: 'Піздата зима була звичайно, але без рукавичок було тяжко зліпити цей шедевр', imgs: ['/photos/photo_2022_1_10.jpg'] },
      { date: '12 серпня 2022', text: 'Ой що це коїться, ой що це коїться. Це ж легендарний день народження', imgs: ['/photos/photo_2022_8_12.jpg'] },
      { date: '16 серпня 2022', text: 'I`m a Barbie girl in a Barbie world Life in plastic, it`s fantastic', imgs: ['/photos/photo_2022_8_16.jpg'] },
      { date: '4 листопада 2022', text: 'Ярік гандон а Шрек  - це кохання', imgs: ['/photos/photo_2022_11_4.jpg'] },
      { date: '10 листопада 2022', text: 'Спочатку все було цивілізовано, ну а потім все як завжди, майстер Катерина ціни по домовленості', imgs: ['/photos/photo_2022_11_10.jpg'] },
      { date: '22 листопада 2022', text: 'Наша красотулька', imgs: ['/photos/photo_2022_11_22.jpg'] },
      { date: '22 листопада 2022', text: 'Перший виїзд за кордон і ти зразу знайшла собі друга.', imgs: ['/photos/photo_2022_11_22_1.jpg'] },
      { date: '23 грудня 2022', text: 'Було супер. Шкода що так і не сходили в музей який ти хотіла))', imgs: ['/photos/photo_2022_12_23.jpg', '/photos/photo_2022_12_23_2.jpg', '/photos/photo_2022_12_23_3.jpg', '/photos/photo_2022_12_23_4.jpg'] },
      { date: '24 грудня 2022', text: 'Не найкращий кадр, зате з харизмою на максимум', imgs: ['/photos/photo_2022_12_24.jpg'] },
      { date: '', text: '', imgs: ['/photos/photo_2022_11_22_1.jpg'] },
      { date: '', text: '', imgs: ['/photos/photo_2022_11_22_1.jpg'] },
      { date: '', text: '', imgs: ['/photos/photo_2022_11_22_1.jpg'] },
      { date: '', text: '', imgs: ['/photos/photo_2022_11_22_1.jpg'] },
      { date: '', text: '', imgs: ['/photos/photo_2022_11_22_1.jpg'] },
      { date: '', text: '', imgs: ['/photos/photo_2022_11_22_1.jpg'] },
      { date: '', text: '', imgs: ['/photos/photo_2022_11_22_1.jpg'] },
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