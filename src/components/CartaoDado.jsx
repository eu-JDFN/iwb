import styles from './CartaoDado.module.css';

// Componente reutilizado (props com desestruturação): cartão de número em destaque.
export default function CartaoDado({ numero, titulo, texto }) {
  return (
    <article className={styles.cartao}>
      <strong className={styles.numero}>{numero}</strong>
      <h3 className={styles.titulo}>{titulo}</h3>
      <p className={styles.texto}>{texto}</p>
    </article>
  );
}
