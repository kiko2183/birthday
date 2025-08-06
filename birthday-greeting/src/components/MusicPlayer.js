import { useState } from 'react';

function MusicPlayer() {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-20">
      <button
        onClick={() => setPlaying(!playing)}
        className="romantic-button text-sm sm:text-base px-4 py-2 sm:px-6 sm:py-3"
      >
        {playing ? '⏸ Пауза' : '🔊 Грати'}
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

export default MusicPlayer;
