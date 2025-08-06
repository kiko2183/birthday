import './HeartRain.css';

function HeartRain() {
  const hearts = new Array(20).fill(null);

  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      {hearts.map((_, i) => (
        <div
          key={i}
          className="heart"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${4 + Math.random() * 4}s`
          }}
        >❤️</div>
      ))}
    </div>
  );
}

export default HeartRain;
