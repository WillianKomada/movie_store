import { RiDeleteBin7Fill, RiImage2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

import styles from "../../styles/Checkout.module.scss";

export default function Checkout() {
  return (
    <div id={styles.checkout}>
      <div className={styles.container}>
        <main>
          <h1 className={styles.titleCheckout}>Finalizar Compra</h1>

          <form>
            <input type="text" placeholder="Nome Completo" />

            <div className={styles.groupInput}>
              <input type="text" placeholder="CPF" />
              <input type="text" placeholder="Celular" />
            </div>

            <input type="text" placeholder="E-mail" />

            <div className={styles.groupInput}>
              <input type="text" placeholder="CEP" />
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
              <tr>
                <td>
                  <div>
                    <RiImage2Fill size={20} color="#9eadba" />
                  </div>
                </td>
                <td>Nome do Filme</td>
                <td>1</td>
                <td>R$ 9,99</td>
                <td>
                  <RiDeleteBin7Fill size={20} color="#4b5c6b" />
                </td>
              </tr>

              <tr>
                <td>
                  <div>
                    <RiImage2Fill size={20} color="#9eadba" />
                  </div>
                </td>
                <td>Nome do Filme</td>
                <td>1</td>
                <td>R$ 9,99</td>
                <td>
                  <RiDeleteBin7Fill size={20} color="#4b5c6b" />
                </td>
              </tr>

              <tr>
                <td>
                  <div>
                    <RiImage2Fill size={20} color="#9eadba" />
                  </div>
                </td>
                <td>Nome do Filme</td>
                <td>1</td>
                <td>R$ 9,99</td>
                <td>
                  <RiDeleteBin7Fill size={20} color="#4b5c6b" />
                </td>
              </tr>
            </tbody>
          </table>

          <div>
            <div className={styles.priceContainer}>
              <span>Total:</span>
              <span className={styles.totalValue}>R$ 19,98</span>
            </div>

            <Link to="/checkout" className={styles.navigationCheckout}>
              Finalizar Compra
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
