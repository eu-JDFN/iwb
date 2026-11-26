import { useState } from 'react';
import styles from './Formulario.module.css';
import { supabase } from '../supabaseClient.js';
import { TEMA, perguntas } from '../tema.js';

export default function Formulario({ aoEnviar, aoVerResultados }) {
  const [resposta1, setResposta1] = useState('');
  const [resposta2, setResposta2] = useState('');
  const [resposta3, setResposta3] = useState('');
  // 'parado' | 'enviando' | 'enviado' | 'erro'
  const [estado, setEstado] = useState('parado');
  const [mensagemErro, setMensagemErro] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    setEstado('enviando');
    setMensagemErro('');

    try {
      if (!supabase) {
        throw new Error('App sem conexão com o banco (variáveis de ambiente ausentes).');
      }
      const { error } = await supabase.from('opinioes').insert({
        tema: TEMA,
        resposta_1: resposta1,
        resposta_2: Number(resposta2),
        resposta_3: resposta3.trim() === '' ? null : resposta3.trim(),
      });
      if (error) throw error;

      setEstado('enviado');
      setResposta1('');
      setResposta2('');
      setResposta3('');
      aoEnviar();
    } catch (err) {
      setMensagemErro(err.message || 'Erro desconhecido.');
      setEstado('erro');
    }
  }

  if (estado === 'enviado') {
    return (
      <section className={styles.sucesso}>
        <h2>✅ Resposta enviada!</h2>
        <p>Obrigado por participar.</p>
        <button type="button" className={styles.botao} onClick={aoVerResultados}>
          Ver resultados
        </button>
        <button
          type="button"
          className={styles.secundario}
          onClick={() => setEstado('parado')}
        >
          Enviar outra resposta
        </button>
      </section>
    );
  }

  const enviando = estado === 'enviando';

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2>Sua opinião</h2>
      <p className={styles.anonimo}>Anônimo: não pedimos nome nem e-mail.</p>

      <fieldset className={styles.pergunta} disabled={enviando}>
        <legend>1. {perguntas.p1.texto}</legend>
        {perguntas.p1.opcoes.map((op) => (
          <label key={op} className={styles.opcao}>
            <input
              type="radio"
              name="resposta1"
              value={op}
              checked={resposta1 === op}
              onChange={(e) => setResposta1(e.target.value)}
              required
            />
            {op}
          </label>
        ))}
      </fieldset>

      <fieldset className={styles.pergunta} disabled={enviando}>
        <legend>2. {perguntas.p2.texto}</legend>
        <div className={styles.escala}>
          {[1, 2, 3, 4, 5].map((n) => (
            <label key={n} className={styles.opcaoEscala}>
              <input
                type="radio"
                name="resposta2"
                value={n}
                checked={resposta2 === String(n)}
                onChange={(e) => setResposta2(e.target.value)}
                required
              />
              {n}
            </label>
          ))}
        </div>
        <small>1 = nada · 5 = muito</small>
      </fieldset>

      <div className={styles.pergunta}>
        <label htmlFor="resposta3">3. {perguntas.p3.texto} (opcional)</label>
        <textarea
          id="resposta3"
          rows={4}
          maxLength={500}
          value={resposta3}
          onChange={(e) => setResposta3(e.target.value)}
          disabled={enviando}
        />
      </div>

      <button type="submit" className={styles.botao} disabled={enviando}>
        {enviando ? 'Enviando...' : 'Enviar resposta'}
      </button>

      {estado === 'erro' ? (
        <p className={styles.erro} role="alert">
          ❌ Não foi possível enviar: {mensagemErro} Tente de novo.
        </p>
      ) : null}
    </form>
  );
}
