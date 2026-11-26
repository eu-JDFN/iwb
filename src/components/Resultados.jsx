import { useEffect, useState } from 'react';
import styles from './Resultados.module.css';
import { supabase } from '../supabaseClient.js';
import { TEMA, perguntas } from '../tema.js';

export default function Resultados({ versao }) {
  const [linhas, setLinhas] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState('');

  useEffect(() => {
    let ativo = true;

    async function carregar() {
      setCarregando(true);
      setErro('');
      try {
        if (!supabase) {
          throw new Error('App sem conexão com o banco (variáveis de ambiente ausentes).');
        }
        const { data, error } = await supabase
          .from('opinioes')
          .select('resposta_1, resposta_2, resposta_3, criado_em')
          .eq('tema', TEMA)
          .order('criado_em', { ascending: false });
        if (error) throw error;
        if (ativo) setLinhas(data);
      } catch (err) {
        if (ativo) setErro(err.message || 'Erro desconhecido.');
      } finally {
        if (ativo) setCarregando(false);
      }
    }

    carregar();
    return () => {
      ativo = false;
    };
  }, [versao]);

  if (carregando) {
    return <p>Carregando resultados...</p>;
  }

  if (erro) {
    return (
      <p className={styles.erro} role="alert">
        ❌ Erro ao carregar os resultados: {erro}
      </p>
    );
  }

  if (linhas.length === 0) {
    return (
      <section>
        <h2>Resultados</h2>
        <p>Ainda não há respostas. Seja a primeira pessoa a responder na aba "Responder"!</p>
      </section>
    );
  }

  const total = linhas.length;
  const contagem = perguntas.p1.opcoes.map((op) => ({
    opcao: op,
    qtd: linhas.filter((l) => l.resposta_1 === op).length,
  }));
  const media = linhas.reduce((soma, l) => soma + l.resposta_2, 0) / total;
  const comentarios = linhas.filter((l) => l.resposta_3);

  return (
    <section>
      <h2>Resultados ({total} {total === 1 ? 'resposta' : 'respostas'})</h2>

      <h3>{perguntas.p1.texto}</h3>
      <ul className={styles.barras}>
        {contagem.map((c) => (
          <li key={c.opcao}>
            <span>
              {c.opcao}: <strong>{c.qtd}</strong> ({Math.round((c.qtd / total) * 100)}%)
            </span>
            <div className={styles.trilho}>
              <div
                className={styles.preenchido}
                style={{ width: `${(c.qtd / total) * 100}%` }}
              />
            </div>
          </li>
        ))}
      </ul>

      <h3>{perguntas.p2.texto}</h3>
      <p className={styles.media}>
        Média: <strong>{media.toFixed(1)}</strong> / 5
      </p>

      <h3>{perguntas.p3.texto}</h3>
      {comentarios.length === 0 ? (
        <p>Nenhum comentário ainda.</p>
      ) : (
        <ul className={styles.comentarios}>
          {comentarios.map((c) => (
            <li key={c.criado_em + c.resposta_3}>{c.resposta_3}</li>
          ))}
        </ul>
      )}
    </section>
  );
}
