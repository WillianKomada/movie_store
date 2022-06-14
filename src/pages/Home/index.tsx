import { useContext, useEffect, useState } from "react";
import {
  RiDeleteBin7Fill,
  RiImage2Fill,
  RiShoppingCart2Fill,
} from "react-icons/ri";
import { Link } from "react-router-dom";
import CardMovie from "../../components/CardMovie";
import { PurchaseContext } from "../../contexts/PurchaseContext";

import { getMoviesSave, removeMovie } from "../../services/storeMovies";

import styles from "../../styles/Home.module.scss";

interface MovieProps {
  id: string;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: string;
}

export default function Home() {
  const [myMovies, setMyMovies] = useState<MovieProps[]>([]);

  const { isCartOpen, isFavoriteOpen } = useContext(PurchaseContext);

  useEffect(() => {
    async function getMovies() {
      const result = await getMoviesSave("@MovieStore");

      setMyMovies(result);
    }

    getMovies();
  }, [myMovies]);

  async function handleDeleteMovie(id: string) {
    const result = await removeMovie(myMovies, id);

    setMyMovies(result);
  }

  function handleClearMovieStorage() {
    localStorage.clear();
  }

  return (
    <>
      <div className={styles.mainContainer}>
        <CardMovie />

        {isCartOpen ? (
          <div className={styles.sideContainer}>
            <div>
              <header className={styles.cartHeader}>
                <h1>Meu Carrinho</h1>

                <button>Esvaziar</button>
              </header>
              <ul>
                <li>
                  <div className={styles.containerPictureIcon}>
                    <RiImage2Fill size={20} color="#9eadba" />
                  </div>

                  <span>Nome do Filme</span>

                  <span>1</span>

                  <span>R$ 9,99</span>

                  <button>
                    <RiDeleteBin7Fill className={styles.deleteIcon} />
                  </button>
                </li>

                <li>
                  <div className={styles.containerPictureIcon}>
                    <RiImage2Fill size={20} color="#9eadba" />
                  </div>

                  <span>Nome do Filme</span>

                  <span>1</span>

                  <span>R$ 9,99</span>

                  <button>
                    <RiDeleteBin7Fill className={styles.deleteIcon} />
                  </button>
                </li>

                <li>
                  <div className={styles.containerPictureIcon}>
                    <RiImage2Fill size={20} color="#9eadba" />
                  </div>

                  <span>Nome do Filme</span>

                  <span>1</span>

                  <span>R$ 9,99</span>

                  <button>
                    <RiDeleteBin7Fill className={styles.deleteIcon} />
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <div className={styles.priceContainer}>
                <span>Total:</span>
                <span className={styles.totalValue}>R$ 19,98</span>
              </div>

              <Link to="/checkout" className={styles.navigationCheckout}>
                Finalizar Compra
              </Link>
            </div>
          </div>
        ) : null}

        {isFavoriteOpen ? (
          <div className={styles.sideContainer}>
            <div>
              <header className={styles.cartHeader}>
                <h1>Meus Favoritos</h1>

                <button onClick={handleClearMovieStorage}>Esvaziar</button>
              </header>
              {myMovies.map((movie) => {
                return (
                  <ul key={movie.id}>
                    <li>
                      <div className={styles.containerPictureIcon}>
                        <img src={movie.poster_path} alt="movie" />
                      </div>

                      <span className={styles.movieTitle}>{movie.title}</span>

                      <span>R$ 79,99</span>

                      <button>
                        <RiShoppingCart2Fill className={styles.cartIcon} />
                      </button>

                      <button onClick={() => handleDeleteMovie(movie.id)}>
                        <RiDeleteBin7Fill className={styles.deleteIcon} />
                      </button>
                    </li>
                  </ul>
                );
              })}
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}
