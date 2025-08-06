import { useParams, Link } from 'react-router-dom';

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
    <div className="mt-12">
      <h2 className="text-3xl font-semibold text-pink-800 mb-6">Спогади за {year} 📸</h2>

      {memories.length === 0 ? (
        <p className="text-pink-600">На жаль, спогадів за цей рік ще немає 😢</p>
      ) : (
        <div className="flex flex-wrap justify-center gap-6">
          {memories.map((m, i) => (
            <div key={i} className="bg-white rounded-xl shadow-md p-4 max-w-xs">
              <img src={m.img} alt={m.text} className="rounded-md mb-3" />
              <h3 className="text-pink-700 font-semibold">{m.date}</h3>
              <p className="text-pink-600">{m.text}</p>
            </div>
          ))}
        </div>
      )}

      <Link to="/" className="mt-10 inline-block text-pink-700 underline hover:text-pink-900">
        ⬅ Назад до головної
      </Link>
    </div>
  );
}

export default Memories;
