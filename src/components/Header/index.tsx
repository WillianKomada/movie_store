import {
  RiHeart3Fill,
  RiShoppingCart2Fill,
  RiSearchLine,
} from "react-icons/ri";

import styles from "./styles.module.scss";

export default function Header() {
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
          <button>
            <RiHeart3Fill className={styles.heartIcon} />
          </button>
          <button>
            <span className={styles.notifyCart}>3</span>
            <RiShoppingCart2Fill className={styles.cartIcon} />
          </button>
        </div>
      </div>
    </header>
  );
}
