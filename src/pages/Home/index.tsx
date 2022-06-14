import { useContext } from "react";
import { RiDeleteBin7Fill, RiShoppingCart2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import CardMovie from "../../components/CardMovie";
import { MovieContext } from "../../contexts/MovieContext";
import { PurchaseContext } from "../../contexts/PurchaseContext";

import styles from "../../styles/Home.module.scss";

export default function Home() {
  const { isCartOpen, isFavoriteOpen } = useContext(PurchaseContext);
  const {
    myCartMovies,
    myMovies,
    handleDeleteMovie,
    handleDeleteCartMovie,
    handleClearMovieStorage,
    handleClearMovieCartStorage,
    AddMovieToCart,
  } = useContext(MovieContext);

  const image_path = "https://image.tmdb.org/t/p/w500";

  return (
    <>
      <div className={styles.mainContainer}>
        <CardMovie />

        {isCartOpen ? (
          <div className={styles.sideContainer}>
            <div>
              <header className={styles.cartHeader}>
                <h1>Meu Carrinho</h1>

                <button onClick={handleClearMovieCartStorage}>Esvaziar</button>
              </header>
              <ul>
                {myCartMovies.map((cartMovie) => {
                  return (
                    <li key={cartMovie.id}>
                      <div className={styles.containerPictureIcon}>
                        <img
                          src={`${image_path}${cartMovie.poster_path}`}
                          alt="movie"
                        />
                      </div>

                      <span className={styles.movieTitle}>
                        {cartMovie.title}
                      </span>

                      <span>1</span>

                      <span>R$ 79,99</span>

                      <button
                        onClick={() => handleDeleteCartMovie(cartMovie.id)}
                      >
                        <RiDeleteBin7Fill className={styles.deleteIcon} />
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div>
              <div className={styles.priceContainer}>
                <span>Total:</span>
                <span className={styles.totalValue}>
                  {new Intl.NumberFormat("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  }).format(myCartMovies.length * 79.99)}
                </span>
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
              <ul>
                {myMovies.map((movie) => {
                  return (
                    <li key={movie.id}>
                      <div className={styles.containerPictureIcon}>
                        <img
                          src={`${image_path}${movie.poster_path}`}
                          alt="movie"
                        />
                      </div>

                      <span className={styles.movieTitle}>{movie.title}</span>

                      <span>R$ 79,99</span>

                      <button onClick={() => AddMovieToCart(movie.id)}>
                        <RiShoppingCart2Fill className={styles.cartIcon} />
                      </button>

                      <button onClick={() => handleDeleteMovie(movie.id)}>
                        <RiDeleteBin7Fill className={styles.deleteIcon} />
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}
