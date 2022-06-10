import { useContext } from "react";
import { Link } from "react-router-dom";

import { PurchaseContext } from "../../contexts/PurchaseContext";
import styles from "./styles.module.scss";

export default function ModalPurchase() {
  const { closeModal } = useContext(PurchaseContext);

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <header>Obrigado Willian Komada</header>
        <p>Sua compra foi finalizada com sucesso!</p>
        <Link to="/" className={styles.finishPurchase} onClick={closeModal}>
          Ir para loja
        </Link>
      </div>
    </div>
  );
}
