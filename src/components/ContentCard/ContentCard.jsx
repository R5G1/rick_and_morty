import { Link } from 'react-router-dom';
import styles from './styles/ContentCard.module.css';

export default function ContentCard({ character }) {
  const statusColor =
    character?.status === 'Alive'
      ? '#4caf50'
      : character?.status === 'Dead'
      ? '#e53935'
      : '#ffb300';

  return (
    <Link to={`/character/${character.id}`} className={styles.cardLink} aria-label={character.name}>
      <article className={styles.card}>
        <img src={character.image} alt={character.name} className={styles.image} />

        <div className={styles.content}>
          <h2 className={styles.name}>{character.name}</h2>

          <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 8 }}>
            <span className={styles.status}>
              <span className={styles.dot} style={{ background: statusColor }} />
              {character.status} - {character.species}
            </span>
          </div>

          <div className={styles.meta}>
            <div>
              <small style={{ color: '#9aa0a6' }}>Last known location:</small>
              <div>{character.location?.name || 'unknown'}</div>
            </div>

            <div style={{ marginTop: 8 }}>
              <small style={{ color: '#9aa0a6' }}>First seen in:</small>
              <div>{character.origin?.name || 'unknown'}</div>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
