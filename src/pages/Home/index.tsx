import { useContext } from "react";
import {
  RiDeleteBin7Fill,
  RiImage2Fill,
  RiShoppingCart2Fill,
} from "react-icons/ri";
import { Link } from "react-router-dom";
import CardMovie from "../../components/CardMovie";
import { PurchaseContext } from "../../contexts/PurchaseContext";

import styles from "../../styles/Home.module.scss";

export default function Home() {
  const { isCartOpen, isFavoriteOpen } = useContext(PurchaseContext);

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

                <button>Esvaziar</button>
              </header>
              <ul>
                <li>
                  <div className={styles.containerPictureIcon}>
                    <RiImage2Fill size={20} color="#9eadba" />
                  </div>

                  <span>Nome do Filme</span>

                  <span>R$ 9,99</span>

                  <button>
                    <RiShoppingCart2Fill className={styles.cartIcon} />
                  </button>

                  <button>
                    <RiDeleteBin7Fill className={styles.deleteIcon} />
                  </button>
                </li>

                <li>
                  <div className={styles.containerPictureIcon}>
                    <RiImage2Fill size={20} color="#9eadba" />
                  </div>

                  <span>Nome do Filme</span>

                  <span>R$ 9,99</span>

                  <button>
                    <RiShoppingCart2Fill className={styles.cartIcon} />
                  </button>

                  <button>
                    <RiDeleteBin7Fill className={styles.deleteIcon} />
                  </button>
                </li>

                <li>
                  <div className={styles.containerPictureIcon}>
                    <RiImage2Fill size={20} color="#9eadba" />
                  </div>

                  <span>Nome do Filme</span>

                  <span>R$ 9,99</span>

                  <button>
                    <RiShoppingCart2Fill className={styles.cartIcon} />
                  </button>

                  <button>
                    <RiDeleteBin7Fill className={styles.deleteIcon} />
                  </button>
                </li>
              </ul>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}
