import { createClient } from '@supabase/supabase-js';

const url = import.meta.env.VITE_SUPABASE_URL;
const key = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;
console.log(import.meta.env.VITE_SUPABASE_URL)
console.log(import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY)
export const configurado = Boolean(url && key);

// Se as variáveis não chegarem (ex.: faltou cadastrar no Netlify), não quebra a tela:
// o app mostra o erro de conexão nos estados da requisição.
export const supabase = configurado ? createClient(url, key) : null;
