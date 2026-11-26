# IA nos estudos — Projeto Final ARQIWEB2

App em React + Vite sobre **inteligência artificial**, com formulário de opinião gravado no Supabase e resultados agregados na própria tela. Publicação no Netlify.

## Rodar localmente

```bash
npm install
cp .env.example .env   # preencha com a URL e a publishable key do seu Supabase
npm run dev
```

Reinicie o `npm run dev` sempre que mudar o `.env`.

## Banco

Rode `supabase/schema.sql` no SQL Editor do Supabase (cria a tabela `opinioes`, ativa RLS e cria só as políticas de insert e select).

## Netlify

- Build command: `npm run build`
- Publish directory: `dist`
- Environment variables: `VITE_SUPABASE_URL` e `VITE_SUPABASE_PUBLISHABLE_KEY`

## Estrutura

- `src/components/SobreTema.jsx`: texto do tema, fontes, imagem opcional
- `src/components/Formulario.jsx`: formulário controlado, estados enviando/enviado/erro
- `src/components/Resultados.jsx`: useEffect + agregação + `.map()` com `key`
- `src/components/CartaoDado.jsx`: componente reutilizado com props
- `src/tema.js`: perguntas, dados e fontes (é aqui que o tema é definido)
