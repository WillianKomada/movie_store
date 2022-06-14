import { RiEmotionUnhappyLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import styles from '../../styles/Error.module.scss';

export default function Error() {
  return (
    <div className={styles.errorContainer}>
      <RiEmotionUnhappyLine />
      <h1>Página não encontrada!</h1>
      <Link to="/">
        Ir para a página inicial
      </Link>
    </div>
  );
}