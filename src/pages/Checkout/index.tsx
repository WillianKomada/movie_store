import { useContext } from "react";
import { RiDeleteBin7Fill } from "react-icons/ri";
import ModalPurchase from "../../components/ModalPurchase";
import { PurchaseContext } from "../../contexts/PurchaseContext";
import InputMask from "react-input-mask";

import styles from "../../styles/Checkout.module.scss";
import { MovieContext } from "../../contexts/MovieContext";

export default function Checkout() {
  const { handleOpenModal, isModalOpen } = useContext(PurchaseContext);
  const { myCartMovies, handleDeleteCartMovie } = useContext(MovieContext);

  const image_path = "https://image.tmdb.org/t/p/w500";

  return (
    <div id={styles.checkout}>
      <div className={styles.container}>
        <main>
          <h1 className={styles.titleCheckout}>Finalizar Compra</h1>

          <form>
            <input type="text" placeholder="Nome Completo" />

            <div className={styles.groupInput}>
              <InputMask mask="999.999.999-99" placeholder="CPF" />
              <InputMask mask="(99) 99999-9999" placeholder="Celular" />
            </div>

            <input type="email" placeholder="E-mail" />

            <div className={styles.groupInput}>
              <InputMask mask="99999-999" placeholder="CEP" />
              <input type="text" placeholder="Endereço" />
            </div>

            <div className={styles.groupInput}>
              <input type="text" placeholder="Cidade" />
              <input type="text" placeholder="Estado" />
            </div>
          </form>
        </main>

        <aside>
          <table>
            <thead>
              <tr>
                <th>Imagem</th>
                <th>Nome</th>
                <th>Qtd</th>
                <th>Preço</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {myCartMovies.map((cartMovie) => {
                return (
                  <tr className={styles.divisionTable} key={cartMovie.id}>
                    <td>
                      <div className={styles.containerPicture}>
                        <img
                          src={`${image_path}${cartMovie.poster_path}`}
                          alt="movie"
                        />
                      </div>
                    </td>
                    <td className={styles.movieTitle}>{cartMovie.title}</td>
                    <td>1</td>
                    <td>R$ 79,99</td>
                    <td>
                      <RiDeleteBin7Fill
                        className={styles.deleteIcon}
                        onClick={() => handleDeleteCartMovie(cartMovie.id)}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

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

            <button className={styles.finishCheckout} onClick={handleOpenModal}>
              Finalizar
            </button>
          </div>
        </aside>
      </div>

      {isModalOpen && <ModalPurchase />}
    </div>
  );
}
