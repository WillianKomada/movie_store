import { useContext } from "react";
import {
  RiHeart3Fill,
  RiShoppingCart2Fill,
  RiSearchLine,
} from "react-icons/ri";
import { PurchaseContext } from "../../contexts/PurchaseContext";

import styles from "./styles.module.scss";

export default function Header() {
  const { openCart, openFavorite } = useContext(PurchaseContext);

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        {/* <img src="" alt="LOGO" /> */}
        <h2 style={{ color: "#fff" }}>LOGO</h2>

        <div className={styles.searchContainer}>
          <input type="text" placeholder="Pesquisa" />
          <button>
            <RiSearchLine className={styles.searchIcon} />
          </button>
        </div>

        <div className={styles.iconsContainer}>
          <button onClick={openFavorite}>
            <RiHeart3Fill className={styles.heartIcon} />
          </button>
          <button onClick={openCart}>
            <span className={styles.notifyCart}>3</span>
            <RiShoppingCart2Fill className={styles.cartIcon} />
          </button>
        </div>
      </div>
    </header>
  );
}
