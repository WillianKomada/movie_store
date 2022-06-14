import { useContext } from "react";
import { RiHeartFill, RiStarSFill } from "react-icons/ri";
import { MovieContext } from "../../contexts/MovieContext";

import styles from "./styles.module.scss";

export default function CardMovie() {
  const { movies, addFavoriteMovie } = useContext(MovieContext);

  const image_path = "https://image.tmdb.org/t/p/w500";

  return (
    <main className={styles.mainContainer}>
      {movies.map((movie) => {
        return (
          <div key={movie.id} className={styles.cardMovieContainer}>
            <div className={styles.cardMovie}>
              <div></div>

              <RiHeartFill
                className={styles.heartIcon}
                onClick={() =>
                  addFavoriteMovie(movie.id)
                }
              />

              <img src={`${image_path}${movie.poster_path}`} alt={movie.title} />
              <span className={styles.releaseDate}>{movie.release_date}</span>
            </div>
            <div className={styles.cardMovieInfos}>
              <p>{movie.title}</p>
              <div className={styles.infosContent}>
                <RiStarSFill className={styles.starIcon} />
                <span className={styles.rate}>{movie.vote_average}</span>
                <span>Gênero</span>
              </div>
              <span>R$ 79,99</span>
            </div>
            <button>Adicionar</button>
          </div>
        );
      })}
    </main>
  );
}
