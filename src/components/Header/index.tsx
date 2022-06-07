import { RiHeart3Fill, RiShoppingCart2Fill, RiSearchLine } from "react-icons/ri";

import styles from "./styles.module.scss";

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        {/* <img src="" alt="LOGO" /> */}
        <h2 style={{color: "#fff"}}>LOGO</h2>

        <div className={styles.searchContainer}>
          <input type="text" placeholder="Pesquisa" />
          <RiSearchLine size={20} color="#4b5c6b" />
        </div>

        <div className={styles.iconsContainer}>
          <RiHeart3Fill size={24} color="#fff" />
          <RiShoppingCart2Fill size={24} color="#fff" />
        </div>
      </div>
    </header>
  );
}
