import { useContext } from "react";

import { PurchaseContext } from "../../contexts/PurchaseContext";
import styles from "./styles.module.scss";

interface ModalPurchaseProps {
  name: string;
}

export default function ModalPurchase({ name }: ModalPurchaseProps) {
  const { handleCloseModal } = useContext(PurchaseContext);

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <header>Obrigado {name}!</header>
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
