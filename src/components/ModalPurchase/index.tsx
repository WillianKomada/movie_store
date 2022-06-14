import { useContext } from "react";

import { PurchaseContext } from "../../contexts/PurchaseContext";
import styles from "./styles.module.scss";

export default function ModalPurchase() {
  const { handleCloseModal } = useContext(PurchaseContext);

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <header>Obrigado Willian Komada</header>
        <p>Sua compra foi finalizada com sucesso!</p>
        <a
          href="/"
          className={styles.finishPurchase}
          onClick={handleCloseModal}
        >
          Ir para loja
        </a>
      </div>
    </div>
  );
}
