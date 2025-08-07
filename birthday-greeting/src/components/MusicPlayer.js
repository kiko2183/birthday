import { useState, useEffect } from 'react';
import './MusicPlayer.css';

function MusicPlayer() {
  const [playing, setPlaying] = useState(false);
  const audioRef = useState(new Audio('/audio/lord-huron-the-night-we-met-(meloua.com).mp3'))[0];

  useEffect(() => {
    if (playing) {
      audioRef.play().catch((error) => {
        console.log('Помилка відтворення:', error);
      });
    } else {
      audioRef.pause();
    }

    return () => {
      audioRef.pause();
      audioRef.currentTime = 0;
    };
  }, [playing, audioRef]);

  return (
    <div className="music-player-container">
      <button
        onClick={() => setPlaying(!playing)}
        className="romantic-button"
        aria-label={playing ? 'Пауза музики' : 'Грати музику'}
      >
        {playing ? '⏸' : '🔊'}
      </button>
    </div>
  );
}

export default MusicPlayer;