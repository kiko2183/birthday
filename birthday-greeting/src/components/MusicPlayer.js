import { useState } from 'react';
import './MusicPlayer.css';

function MusicPlayer() {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="music-player-container">
      <button
        onClick={() => setPlaying(!playing)}
        className="romantic-button"
        aria-label={playing ? 'Пауза музики' : 'Грати музику'}
      >
        {playing ? '⏸' : '🔊'}
      </button>

      {playing && (
        <iframe
          width="0"
          height="0"
          src="https://www.youtube.com/embed/KtlgYxa6BMU?autoplay=1"
          title="The Night We Met - Lord Huron"
          allow="autoplay"
          style={{ display: 'none' }}
        ></iframe>
      )}
    </div>
  );
}
