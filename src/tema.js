// Dados do tema "Inteligência artificial" — perguntas conforme o enunciado do projeto.
export const TEMA = 'inteligencia_artificial';

export const titulo = '🤖 IA nos estudos';
export const subtitulo = 'Inteligência artificial · ARQIWEB2 · IFSP Araraquara';

export const perguntas = {
  p1: {
    texto: 'Com que frequência você usa IA nos trabalhos da escola?',
    opcoes: ['Sempre', 'Às vezes', 'Raramente', 'Nunca'],
  },
  p2: {
    texto: 'De 1 a 5, quanto você confia nas respostas que a IA te dá?',
  },
  p3: {
    texto:
      'Em que momento a IA já te deu uma resposta errada — e como você percebeu?',
  },
};

// Cartões de dados da tela "Sobre o tema" (texto próprio, resumindo as fontes abaixo).
export const dados = [
  {
    numero: '70%',
    titulo: 'dos estudantes do ensino médio',
    texto:
      'Entre os que usam a internet, 70% recorrem a ferramentas como ChatGPT e Gemini em pesquisas escolares.',
  },
  {
    numero: '32%',
    titulo: 'receberam orientação da escola',
    texto:
      'Só cerca de um terço dos alunos foi orientado sobre como usar essa tecnologia nos estudos.',
  },
  {
    numero: '40%',
    titulo: 'das reuniões com regras de IA',
    texto:
      'Entre as escolas que reuniram professores para falar de tecnologia, só 40% das conversas trataram de regras para IA.',
  },
];

export const fontes = [
  {
    titulo:
      'TIC Educação 2024 (15ª edição). Cetic.br/NIC.br, divulgada em 16/09/2025.',
    url: 'https://www.cnnbrasil.com.br/educacao/70-dos-alunos-do-ensino-medio-usam-ia-sem-preparo-nas-escolas-diz-estudo/',
    obs: 'Dados lidos na reportagem da CNN Brasil sobre a pesquisa.',
  },
  {
    titulo: 'O que é alucinação de IA. Canaltech.',
    url: 'https://canaltech.com.br/inteligencia-artificial/o-que-e-alucinacao-de-ia/',
    obs: 'Explicação de por que chatbots inventam informações.',
  },
];

// Imagem opcional: coloque o arquivo em /public/img, com licença livre, e preencha.
// Exemplo (Wikimedia Commons, CC BY-SA): { src: '/img/foto.jpg', alt: '...', credito: 'Autor, CC BY-SA 4.0, via Wikimedia Commons' }
export const imagem = null;
