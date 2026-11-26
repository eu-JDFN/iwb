import styles from './SobreTema.module.css';
import CartaoDado from './CartaoDado.jsx';
import { dados, fontes, imagem } from '../tema.js';

export default function SobreTema({ aoResponder }) {
  return (
    <section>
      <h2>A IA já faz parte dos estudos?</h2>
      <p>
        Ferramentas como ChatGPT e Gemini são IAs generativas: elas produzem
        textos, resumos e explicações a partir de uma pergunta. Em poucos anos
        viraram parte da rotina escolar, muitas vezes antes de a escola
        combinar como usá-las.
      </p>

      <div className={styles.cartoes}>
        {dados.map((d) => (
          <CartaoDado
            key={d.numero}
            numero={d.numero}
            titulo={d.titulo}
            texto={d.texto}
          />
        ))}
      </div>

      <h3>Dá para confiar em tudo que ela responde?</h3>
      <p>
        Não necessariamente. Esses sistemas funcionam prevendo a próxima palavra
        mais provável, e não consultando um banco de fatos. Por isso podem
        produzir as chamadas "alucinações": informações falsas ditas com muita
        segurança, como referências de artigos que não existem. Especialistas
        dizem que dá para reduzir o problema, mas dificilmente eliminá-lo, e
        que conferir as fontes citadas ajuda a perceber o erro.
      </p>
      <p>
        Por isso esta pesquisa pergunta como você, aluno ou aluna do IFSP
        Araraquara, usa a IA e o quanto confia nela.
      </p>

      {imagem ? (
        <figure className={styles.figura}>
          <img src={imagem.src} alt={imagem.alt} />
          <figcaption>{imagem.credito}</figcaption>
        </figure>
      ) : null}

      <button type="button" className={styles.botao} onClick={aoResponder}>
        Quero responder →
      </button>

      <h3>Fontes</h3>
      <ul className={styles.fontes}>
        {fontes.map((f) => (
          <li key={f.url}>
            <a href={f.url} target="_blank" rel="noreferrer">
              {f.titulo}
            </a>
            <br />
            <small>{f.obs}</small>
          </li>
        ))}
      </ul>
    </section>
  );
}
