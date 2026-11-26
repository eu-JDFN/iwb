import { useState } from 'react';
import styles from './App.module.css';
import SobreTema from './components/SobreTema.jsx';
import Formulario from './components/Formulario.jsx';
import Resultados from './components/Resultados.jsx';
import { titulo, subtitulo } from './tema.js';

const ABAS = [
  { id: 'sobre', rotulo: 'Sobre o tema' },
  { id: 'formulario', rotulo: 'Responder' },
  { id: 'resultados', rotulo: 'Resultados' },
];

export default function App() {
  const [aba, setAba] = useState('sobre');
  // Incrementado a cada envio, para a tela de resultados recarregar.
  const [versao, setVersao] = useState(0);

  let tela;
  if (aba === 'sobre') {
    tela = <SobreTema aoResponder={() => setAba('formulario')} />;
  } else if (aba === 'formulario') {
    tela = (
      <Formulario
        aoEnviar={() => setVersao((v) => v + 1)}
        aoVerResultados={() => setAba('resultados')}
      />
    );
  } else {
    tela = <Resultados versao={versao} />;
  }

  return (
    <div className={styles.app}>
      <header className={styles.cabecalho}>
        <h1>{titulo}</h1>
        <p>{subtitulo}</p>
      </header>

      <nav className={styles.abas} aria-label="Navegação">
        {ABAS.map((a) => (
          <button
            key={a.id}
            type="button"
            className={aba === a.id ? styles.abaAtiva : styles.aba}
            onClick={() => setAba(a.id)}
          >
            {a.rotulo}
          </button>
        ))}
      </nav>

      <main className={styles.principal}>{tela}</main>
    </div>
  );
}
