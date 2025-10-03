import { Link } from 'react-router-dom';
import styles from './styles/Header.module.css';
import logo from '../../assets/rick_and_morty_logo.png';

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        <img src={logo} className={styles.logo} alt="Rick & Morty Logo" />
        Rick & Morty{' '}
      </h1>
      <nav className={styles.nav}>
        <Link to="/" className={styles.link}>
          Home
        </Link>
        <Link to="/character/:id" className={styles.link}>
          Character
        </Link>
        <Link to="/favorites" className={styles.link}>
          Favorites
        </Link>
      </nav>
    </header>
  );
}
