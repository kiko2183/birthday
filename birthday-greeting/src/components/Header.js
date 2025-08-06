import MusicPlayer from './MusicPlayer';
import styles from './Header.module.css';

function Header({ menuOpen, setMenuOpen }) {
  return (
    <div className={styles.headerContainer}>
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className={`${styles.burgerButton} lg:hidden`}
        aria-label="Відкрити меню"
      >
        ☰
      </button>
      <h1 className={styles.title}>🎀 Привітання</h1>
      <MusicPlayer />
    </div>
  );
}

export default Header;