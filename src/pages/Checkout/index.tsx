import { useContext } from "react";
import { RiDeleteBin7Fill, RiImage2Fill } from "react-icons/ri";
import ModalPurchase from "../../components/ModalPurchase";
import { PurchaseContext } from "../../contexts/PurchaseContext";
import InputMask from "react-input-mask";

import styles from "../../styles/Checkout.module.scss";

export default function Checkout() {
  const { handleOpenModal, isModalOpen } = useContext(PurchaseContext);

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

            <input type="text" placeholder="E-mail" />

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
              <tr className={styles.divisionTable}>
                <td>
                  <div className={styles.containerPicture}>
                    <RiImage2Fill className={styles.pictureIcon} />
                  </div>
                </td>
                <td>Nome do Filme</td>
                <td>1</td>
                <td>R$ 9,99</td>
                <td>
                  <RiDeleteBin7Fill className={styles.deleteIcon} />
                </td>
              </tr>

              <tr className={styles.divisionTable}>
                <td>
                  <div className={styles.containerPicture}>
                    <RiImage2Fill className={styles.pictureIcon} />
                  </div>
                </td>
                <td>Nome do Filme</td>
                <td>1</td>
                <td>R$ 9,99</td>
                <td>
                  <RiDeleteBin7Fill className={styles.deleteIcon} />
                </td>
              </tr>

              <tr className={styles.divisionTable}>
                <td>
                  <div className={styles.containerPicture}>
                    <RiImage2Fill className={styles.pictureIcon} />
                  </div>
                </td>
                <td>Nome do Filme</td>
                <td>1</td>
                <td>R$ 9,99</td>
                <td>
                  <RiDeleteBin7Fill className={styles.deleteIcon} />
                </td>
              </tr>
            </tbody>
          </table>

          <div>
            <div className={styles.priceContainer}>
              <span>Total:</span>
              <span className={styles.totalValue}>R$ 19,98</span>
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
