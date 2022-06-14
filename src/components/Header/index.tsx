import { useContext } from "react";
import {
  RiHeart3Fill,
  RiShoppingCart2Fill,
  RiSearchLine,
} from "react-icons/ri";
import { MovieContext } from "../../contexts/MovieContext";
import { PurchaseContext } from "../../contexts/PurchaseContext";

import styles from "./styles.module.scss";

export default function Header() {
  const { handleOpenCart, handleOpenFavorite } = useContext(PurchaseContext);
  const { myCartMovies } = useContext(MovieContext);

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <h2 style={{ color: "#fff" }}>LOGO</h2>

        <div className={styles.searchContainer}>
          <input type="text" placeholder="Pesquisa" />
          <button>
            <RiSearchLine className={styles.searchIcon} />
          </button>
        </div>

        <div className={styles.iconsContainer}>
          <button onClick={handleOpenFavorite}>
            <RiHeart3Fill className={styles.heartIcon} />
          </button>
          <button onClick={handleOpenCart}>
            <span className={styles.notifyCart}>{myCartMovies.length}</span>
            <RiShoppingCart2Fill className={styles.cartIcon} />
          </button>
        </div>
      </div>
    </header>
  );
}
