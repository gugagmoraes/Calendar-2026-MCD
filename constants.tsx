import { VideoData, ChecklistItem } from './types';
import { Flame, Trophy, TrendingUp } from 'lucide-react';
import React from 'react';

// Helper for dates
const createDate = (day: number) => `2026-01-${day.toString().padStart(2, '0')}`;

const GENERIC_CHECKLIST = (mainRefId?: string): ChecklistItem[] => [
  { id: 'c1', text: mainRefId ? `Assisti referência principal (ID: ${mainRefId})` : 'Assisti vídeo de referência principal', checked: false },
  { id: 'c2', text: 'Estudei o hook inicial (primeiros 30s)', checked: false },
  { id: 'c3', text: 'Câmera e iluminação configuradas', checked: false },
  { id: 'c4', text: 'Energia ALTA desde o início', checked: false },
  { id: 'c5', text: 'Thumbnail com contraste e cores fortes', checked: false },
  { id: 'c6', text: 'Título com números e Emoji', checked: false },
  { id: 'c7', text: 'Descrição com timestamps e Tags', checked: false }
];

const MANUAL_VIDEOS: VideoData[] = [
  // SEMANA 1
  {
    id: 'v1',
    date: createDate(7),
    dayOfWeek: 'QUARTA',
    displayDate: '07 JAN',
    theme: 'PERNAS',
    title: '8 EXERCÍCIOS SIMPLES Para Pernas GROSSAS e DEFINIDAS em 4 Semanas!',
    status: 'TODO',
    structure: ['8 exercícios (coxas + panturrilhas)', '60 segundos cada', 'Sem equipamento', '~10-12 minutos'],
    why: ['Pernas = MELHOR conversão (32.65/10k)', '"Pernas Grossas" = #1 conversão', 'Terça = ótimo dia'],
    references: [
      { id: 'CeEEU2N8xFk', title: '7 Exercícios PODEROSOS (Hook)', metrics: '128.26 conv.', note: 'Copie os primeiros 30s', link: 'https://studio.youtube.com/video/CeEEU2N8xFk/analytics' },
      { id: 'EIwndVX7DlY', title: '8 Minutos... (Thumbnail)', metrics: 'CTR 14.24%', note: 'Copie estilo da Thumb', link: 'https://studio.youtube.com/video/EIwndVX7DlY/analytics' },
      { id: '45BYCOv9GRs', title: '9 MINUTOS (Energia)', metrics: '1.1M views', note: 'Copie o ritmo', link: 'https://studio.youtube.com/video/45BYCOv9GRs/analytics' }
    ],
    production: { thumbnail: 'Pernas em destaque, texto amarelo "PERNAS GROSSAS", "4 SEMANAS"', music: 'Energética', tags: ['pernas grossas', 'pernas definidas', 'tonificar pernas', 'treino pernas casa'], publishTime: '07:00' },
    checklist: GENERIC_CHECKLIST('CeEEU2N8xFk')
  },
  {
    id: 'v2',
    date: createDate(8),
    dayOfWeek: 'QUINTA',
    displayDate: '08 JAN',
    theme: 'GLUTEOS',
    title: 'FAÇA ISSO POR 7 DIAS: 8 Exercícios Para GLÚTEOS GRANDES 🍑 (8 Minutos)',
    status: 'TODO',
    structure: ['8 exercícios glúteos', '50s trabalho / 10s transição', 'Ênfase em ativação', '8 minutos exatos'],
    why: ['"FAÇA ISSO" = 49.1% retenção', 'Glúteos = 11.7M views', 'Formato viral'],
    references: [
      { id: 'tt3tqQWGZeU', title: '10 DIAS | 8 MINUTOS', metrics: '892k views', note: 'Primeiros 15s perfeitos', link: 'https://studio.youtube.com/video/tt3tqQWGZeU/analytics' },
      { id: '45BYCOv9GRs', title: '9 MINUTOS', metrics: 'CTR 11.13%', note: 'Thumbnail: Ângulo lateral + 🍑', link: 'https://studio.youtube.com/video/45BYCOv9GRs/analytics' }
    ],
    production: { thumbnail: 'De lado mostrando glúteo, "FAÇA ISSO POR 7 DIAS", emoji 🍑', music: 'Pop motivacional', tags: ['faça isso', 'aumentar glúteos', 'bumbum grande', '7 dias'], publishTime: '18:00' },
    checklist: GENERIC_CHECKLIST('tt3tqQWGZeU')
  },
  {
    id: 'v3',
    date: createDate(9),
    dayOfWeek: 'SEXTA',
    displayDate: '09 JAN',
    theme: 'ABDOMINAIS',
    title: '15 ABDOMINAIS EM PÉ Para Perder Barriga em 7 Dias | Treino Matinal 20 Min',
    status: 'TODO',
    structure: ['15 variações em pé', '60s cada + 10s descanso', 'Progressão: fácil → difícil', '~20 minutos'],
    why: ['Abd em Pé = 40.6% retenção', 'Modelo viral ID: oAh1MT_z4rQ (1M views)', 'Treino Matinal'],
    references: [
      { id: 'oAh1MT_z4rQ', title: '10 ABDOMINAIS EM PÉ', metrics: '1M views', note: 'REPLIQUE TUDO DESTE VÍDEO', link: 'https://studio.youtube.com/video/oAh1MT_z4rQ/analytics' },
      { id: 'fccuPeLx5n8', title: '16 Abdominais em Pé', metrics: 'CTR 8.84%', note: 'Tom matinal motivacional', link: 'https://studio.youtube.com/video/fccuPeLx5n8/analytics' }
    ],
    production: { thumbnail: 'Fazendo abdominal em pé, "15 ABDOMINAIS EM PÉ", sol nascendo', music: 'Energética matinal', tags: ['abdominais em pé', 'perder barriga', 'treino matinal', '7 dias'], publishTime: '06:30' },
    checklist: GENERIC_CHECKLIST('oAh1MT_z4rQ')
  },
  {
    id: 'v4',
    date: createDate(10),
    dayOfWeek: 'SÁBADO',
    displayDate: '10 JAN',
    theme: 'HIIT',
    title: 'Como Perder Barriga e Ganhar Pernas + Glúteos em 7 Dias: Treino de 10 Min 🔥',
    status: 'TODO',
    structure: ['10 exercícios compostos', '50s trabalho / 10s transição', 'Combina 3 objetivos', '10 minutos'],
    why: ['ID: tVQDe1YxihE = MAIOR VIRAL (1.5M)', 'Combo = dobro do apelo', 'Sexta = treino rápido'],
    references: [
      { id: 'tVQDe1YxihE', title: 'Como Perder Barriga...', metrics: '1.5M views', note: 'COPIE ESTE VÍDEO QUASE INTEIRO', link: 'https://studio.youtube.com/video/tVQDe1YxihE/analytics' }
    ],
    production: { thumbnail: 'Split screen (barriga + glúteo + perna), "10 MIN", "7 DIAS", emoji 🔥', music: 'Vibe tVQDe1YxihE', tags: ['perder barriga', 'aumentar glúteos', 'pernas definidas', 'treino 10 minutos'], publishTime: '18:30' },
    checklist: GENERIC_CHECKLIST('tVQDe1YxihE')
  },

  // SEMANA 2
  {
    id: 'v5',
    date: createDate(13),
    dayOfWeek: 'TERÇA',
    displayDate: '13 JAN',
    theme: 'ABDOMINAIS',
    title: 'FAÇA ISSO TODA MANHÃ Para Perder Barriga 3X Mais Rápido! 🔥 [15 Min]',
    status: 'TODO',
    structure: ['12-15 exercícios variados', 'Formato "acordar e treinar"', 'Ritmo energético', '15 minutos'],
    why: ['"FAÇA ISSO MANHÃS" = até 241% retenção', 'Segunda matinal = busca alta'],
    references: [
      { id: 'Qq8k9Lus9OU', title: 'FAÇA ISSO TODA MANHÃ', metrics: '241% RETENÇÃO', note: 'Estude o segredo da retenção', link: 'https://studio.youtube.com/video/Qq8k9Lus9OU/analytics' },
      { id: 'slhHa4RTZR0', title: 'FAÇA ISSO (Volume)', metrics: '747k views', note: 'Hook inicial MATADOR', link: 'https://studio.youtube.com/video/slhHa4RTZR0/analytics' }
    ],
    production: { thumbnail: 'Acordando/alongando, sol nascendo, "FAÇA ISSO TODA MANHÃ"', music: 'Energética motivacional', tags: ['faça isso toda manhã', 'perder barriga rápido', 'treino matinal', '3x mais rápido'], publishTime: '06:00' },
    checklist: GENERIC_CHECKLIST('Qq8k9Lus9OU')
  },
  {
    id: 'v6',
    date: createDate(14),
    dayOfWeek: 'QUARTA',
    displayDate: '14 JAN',
    theme: 'GLUTEOS',
    title: '10 Exercícios Para Glúteos Redondos e Firmes em Apenas 10 Minutos! 🍑',
    status: 'TODO',
    structure: ['10 exercícios glúteos', '50s cada + 10s transição', 'Foco glúteo médio/máximo', '10 minutos exatos'],
    why: ['CTR 12.75% (2º melhor do canal)', '"10 em 10" = fórmula pegajosa'],
    references: [
      { id: 'P0DbKoHS-2A', title: '10 Exercícios Para Glúteos', metrics: 'CTR 12.75%', note: 'COPIE A THUMBNAIL EXATA', link: 'https://studio.youtube.com/video/P0DbKoHS-2A/analytics' },
      { id: 'VddfR0tMNmk', title: '10 Minutos É TUDO', metrics: '222k views', note: 'Ritmo perfeito', link: 'https://studio.youtube.com/video/VddfR0tMNmk/analytics' }
    ],
    production: { thumbnail: 'Ângulo lateral do glúteo, "10 EXERCÍCIOS", "10 MIN", emoji 🍑', music: 'Pop energético', tags: ['glúteos redondos', 'glúteos firmes', '10 exercícios', '10 minutos'], publishTime: '18:00' },
    checklist: GENERIC_CHECKLIST('P0DbKoHS-2A')
  },
  {
    id: 'v7',
    date: createDate(15),
    dayOfWeek: 'QUINTA',
    displayDate: '15 JAN',
    theme: 'PERNAS',
    title: '7 Exercícios Que Vão Esculpir Suas Pernas e Glúteos em 4 Semanas! (10 Min)',
    status: 'TODO',
    structure: ['7 exercícios compostos', '60s cada + 20s descanso', 'Intensidade progressiva', '~10 minutos'],
    why: ['ID: YSkBxGXsNog sucesso', 'Pernas + Glúteos = duplo apelo', '"Esculpir" = palavra forte'],
    references: [
      { id: 'YSkBxGXsNog', title: '7 Exercícios que vão Esculpir', metrics: '95.44 conv.', note: 'Copie a estrutura', link: 'https://studio.youtube.com/video/YSkBxGXsNog/analytics' }
    ],
    production: { thumbnail: 'Pernas + glúteo em ação, "7 EXERCÍCIOS", "4 SEMANAS"', music: 'Energética', tags: ['esculpir pernas', 'pernas e gluteos', 'treino completo', '4 semanas'], publishTime: '19:00' },
    checklist: GENERIC_CHECKLIST('YSkBxGXsNog')
  },
  {
    id: 'v8',
    date: createDate(16),
    dayOfWeek: 'SEXTA',
    displayDate: '16 JAN',
    theme: 'GLUTEOS',
    title: 'FAÇA ISSO POR 10 DIAS: 5 Exercícios Para GLÚTEOS PERFEITOS 🍑 (8 Min Diários)',
    status: 'TODO',
    structure: ['5 exercícios mais efetivos', '2 rounds completos', '8 min total', 'Sensação de "desafio"'],
    why: ['"10 DIAS" = compromisso realista', 'Quinta = início de desafio'],
    references: [
      { id: 'tt3tqQWGZeU', title: '10 DIAS | 8 MINUTOS', metrics: '892k views', note: 'Modelo perfeito de desafio', link: 'https://studio.youtube.com/video/tt3tqQWGZeU/analytics' },
      { id: 'BOgmzq3an8o', title: 'Os 5 Melhores', metrics: '86.05 conv.', note: 'Pegue os 5 exercícios daqui', link: 'https://studio.youtube.com/video/BOgmzq3an8o/analytics' }
    ],
    production: { thumbnail: 'Before/after sugerido, "10 DIAS", "5 EXERCÍCIOS", emoji 🍑', music: 'Motivacional desafiadora', tags: ['desafio 10 dias', 'glúteos perfeitos', '5 exercícios', 'bumbum grande'], publishTime: '17:30' },
    checklist: GENERIC_CHECKLIST('tt3tqQWGZeU')
  },
  {
    id: 'v9',
    date: createDate(17),
    dayOfWeek: 'SÁBADO',
    displayDate: '17 JAN',
    theme: 'HIIT',
    title: '30 MIN Para Perder Barriga e Afinar Cintura em 7 Dias 🔥 [HIIT Completo]',
    status: 'TODO',
    structure: ['30 minutos HIIT', '40s trabalho / 20s descanso', 'Baixo impacto (sem pulos)', 'Alternância corpo todo'],
    why: ['30 min = alto watch time', 'Sexta = treino intenso', 'ID: sMN1zUIg5d8 viralizou'],
    references: [
      { id: 'sMN1zUIg5d8', title: '30 MIN Para Perder Barriga', metrics: '496k views', note: 'Replique este exato formato', link: 'https://studio.youtube.com/video/sMN1zUIg5d8/analytics' }
    ],
    production: { thumbnail: 'Você suando em ação, cronômetro "30:00", "7 DIAS", emoji 🔥', music: 'Alta energia HIIT', tags: ['treino hiit', '30 minutos', 'perder barriga', 'queimar gordura'], publishTime: '18:00' },
    checklist: GENERIC_CHECKLIST('sMN1zUIg5d8')
  },

  // SEMANA 3
  {
    id: 'v10',
    date: createDate(20),
    dayOfWeek: 'TERÇA',
    displayDate: '20 JAN',
    theme: 'GLUTEOS',
    title: 'Bumbum dos SONHOS 🍑: Treino Secreto de 10 Minutos (TESTADO E APROVADO!)',
    status: 'TODO',
    structure: ['8-10 exercícios "secretos"', 'Ênfase conexão mente-músculo', '10 minutos intensos', 'Tom de "segredo revelado"'],
    why: ['852k views (6º maior)', '"Bumbum dos Sonhos" = título sedutor', 'Segunda = reinício'],
    references: [
      { id: 'j5T8A0FeYuk', title: 'Bumbum dos Sonhos', metrics: '82.3% RETENÇÃO', note: 'Estude a retenção insana', link: 'https://studio.youtube.com/video/j5T8A0FeYuk/analytics' }
    ],
    production: { thumbnail: 'Resultado impressionante de glúteo, "SONHOS", "10 MIN", emoji 🍑', music: 'Mesma do ID j5T8A0FeYuk', tags: ['bumbum dos sonhos', 'treino secreto', 'glúteos perfeitos', '10 minutos'], publishTime: '07:00' },
    checklist: GENERIC_CHECKLIST('j5T8A0FeYuk')
  },
  {
    id: 'v11',
    date: createDate(21),
    dayOfWeek: 'QUARTA',
    displayDate: '21 JAN',
    theme: 'ABDOMINAIS',
    title: '6 Exercícios FÁCEIS Para Afinar Cintura e Aumentar Quadril em 3 Semanas! (8 Min)',
    status: 'TODO',
    structure: ['6 exercícios cintura', 'Movimentos laterais + torções', '50s cada + 10s transição', '8 minutos'],
    why: ['"Afinar Cintura" = 3.2M views', 'ID: FnvMpkbZUoo = 1.1M views', 'Público feminino ama'],
    references: [
      { id: 'FnvMpkbZUoo', title: 'Faça Isso... Afinar Cintura', metrics: '1.1M views', note: 'Por que viralizou?', link: 'https://studio.youtube.com/video/FnvMpkbZUoo/analytics' }
    ],
    production: { thumbnail: 'Ênfase na cintura, marcação visual, "CINTURA FINA"', music: 'Elegante e motivacional', tags: ['afinar cintura', 'cintura fina', 'aumentar quadril', 'perder pneuzinhos'], publishTime: '19:00' },
    checklist: GENERIC_CHECKLIST('FnvMpkbZUoo')
  },
  {
    id: 'v12',
    date: createDate(22),
    dayOfWeek: 'QUINTA',
    displayDate: '22 JAN',
    theme: 'ABDOMINAIS',
    title: '20 Abdominais Em Pé Para Perder Barriga em 7 Dias! [Treino Matinal 25 Min]',
    status: 'TODO',
    structure: ['20 exercícios abdominais em pé', '60s cada + 10s descanso', 'Progressão gradual', '25 minutos'],
    why: ['Abdominais em Pé = 40.6% retenção', 'Quarta matinal', 'Campeão absoluto'],
    references: [
      { id: 'oAh1MT_z4rQ', title: '10 ABDOMINAIS EM PÉ', metrics: '1M views', note: 'Replique TUDO, só aumente exercícios', link: 'https://studio.youtube.com/video/oAh1MT_z4rQ/analytics' }
    ],
    production: { thumbnail: 'Você em movimento, "20 ABDOMINAIS EM PÉ", sol nascendo', music: 'Energética matinal', tags: ['20 abdominais', 'abdominais em pé', 'treino matinal', 'perder barriga'], publishTime: '06:30' },
    checklist: GENERIC_CHECKLIST('oAh1MT_z4rQ')
  },
  {
    id: 'v13',
    date: createDate(23),
    dayOfWeek: 'SEXTA',
    displayDate: '23 JAN',
    theme: 'PERNAS',
    title: '8 Exercícios Simples Para Perder Gordura da Coxa em 4 Semanas (10 Min)',
    status: 'TODO',
    structure: ['8 exercícios coxas (internas/externas)', '60s cada', 'Foco ativação', '10 minutos'],
    why: ['119.80 conv. (2ª MELHOR)', '"Gordura da Coxa" = nicho específico'],
    references: [
      { id: '78zJH2Ehhvw', title: '6 Exercícios Fáceis', metrics: '119.80 conv.', note: 'Formato MATADOR', link: 'https://studio.youtube.com/video/78zJH2Ehhvw/analytics' }
    ],
    production: { thumbnail: 'Foco nas coxas, antes/depois sugerido, "COXA FINA"', music: 'Energética', tags: ['perder gordura da coxa', 'afinar coxas', 'coxas finas', 'exercícios coxa'], publishTime: '18:30' },
    checklist: GENERIC_CHECKLIST('78zJH2Ehhvw')
  },
  {
    id: 'v14',
    date: createDate(24),
    dayOfWeek: 'SÁBADO',
    displayDate: '24 JAN',
    theme: 'GLUTEOS',
    title: '9 MINUTOS | 9 Exercícios Para GLÚTEOS GRANDES + Pernas Firmes! 🍑 (RÁPIDO!)',
    status: 'TODO',
    structure: ['9 exercícios (5 glúteos + 4 pernas)', '50s cada + 10s transição', 'Intensidade alta', '9 minutos'],
    why: ['ID: 45BYCOv9GRs = 1.1M views (3º MAIOR)', '"X MIN | X EXERCÍCIOS" funciona'],
    references: [
      { id: '45BYCOv9GRs', title: '9 MINUTOS | 9 Exercícios', metrics: '111.78 conv.', note: 'MODELO PERFEITO', link: 'https://studio.youtube.com/video/45BYCOv9GRs/analytics' }
    ],
    production: { thumbnail: 'Ângulo lateral glúteo + perna, "9 MIN | 9 EXERCÍCIOS", emoji 🍑', music: 'Mesma do ID 45BYCOv9GRs', tags: ['9 minutos 9 exercícios', 'glúteos grandes', 'pernas firmes', 'treino rápido'], publishTime: '18:00' },
    checklist: GENERIC_CHECKLIST('45BYCOv9GRs')
  },

  // SEMANA 4
  {
    id: 'v15',
    date: createDate(27),
    dayOfWeek: 'TERÇA',
    displayDate: '27 JAN',
    theme: 'GLUTEOS',
    title: 'Os 5 Melhores Exercícios Para Glúteos Perfeitos (em 2026!) 🍑 Experimente AGORA',
    status: 'TODO',
    structure: ['5 exercícios "secretos"', 'Explicar POR QUÊ funciona', '3 rounds de cada', '12-15 minutos'],
    why: ['"Os X Melhores" = autoridade', '"2026" = atualizado', 'ID: BOgmzq3an8o sucesso'],
    references: [
      { id: 'BOgmzq3an8o', title: 'Os 5 Melhores Exercícios', metrics: '440k views', note: 'Replique mudando para 2026', link: 'https://studio.youtube.com/video/BOgmzq3an8o/analytics' }
    ],
    production: { thumbnail: 'Lista numerada 1-5, emoji 🍑, "2026!" em destaque', music: 'Profissional e energética', tags: ['melhores exercícios', 'glúteos perfeitos', '2026', 'os 5 melhores'], publishTime: '07:00' },
    checklist: GENERIC_CHECKLIST('BOgmzq3an8o')
  },
  {
    id: 'v16',
    date: createDate(28),
    dayOfWeek: 'QUARTA',
    displayDate: '28 JAN',
    theme: 'HIIT',
    title: '🔥 12 Min Para Perder Barriga + Aumentar Glúteos e Pernas! [TREINO COMPLETO]',
    status: 'TODO',
    structure: ['12 exercícios compostos', '40s trabalho / 20s descanso', 'Corpo todo', '12 minutos'],
    why: ['Combina 3 temas fortes', '12 min = duração ideal', 'Baseado no maior viral'],
    references: [
      { id: 'tVQDe1YxihE', title: 'Como Perder Barriga...', metrics: '1.5M views', note: 'Seu maior sucesso', link: 'https://studio.youtube.com/video/tVQDe1YxihE/analytics' }
    ],
    production: { thumbnail: 'Ação dinâmica múltiplos músculos, "12 MIN", "3 OBJETIVOS", 🔥', music: 'Alta energia', tags: ['treino completo', 'perder barriga', 'glúteos pernas', '12 minutos'], publishTime: '18:30' },
    checklist: GENERIC_CHECKLIST('tVQDe1YxihE')
  },
  {
    id: 'v17',
    date: createDate(29),
    dayOfWeek: 'QUINTA',
    displayDate: '29 JAN',
    theme: 'GLUTEOS',
    title: 'DESAFIO 14 DIAS Para GLÚTEOS DE AÇO 🍑: Dia 1 | 10 Min Por Dia!',
    status: 'TODO',
    structure: ['8-10 exercícios', 'Formato "Dia 1 de 14"', 'Criar expectativa', '10 minutos'],
    why: ['Formato "DESAFIO" gera compromisso', 'Série potencial'],
    references: [
      { id: 'KUO_gf2hVNE', title: 'DESAFIO 30 DIAS', metrics: '87.28 conv.', note: 'Formato de série funciona', link: 'https://studio.youtube.com/video/KUO_gf2hVNE/analytics' }
    ],
    production: { thumbnail: '"DIA 1/14", emoji 🍑, sua imagem motivada, "DESAFIO"', music: 'Desafiadora', tags: ['desafio 14 dias', 'glúteos de aço', 'dia 1', 'treino diário'], publishTime: '07:30' },
    checklist: GENERIC_CHECKLIST('KUO_gf2hVNE')
  },
  {
    id: 'v18',
    date: createDate(30),
    dayOfWeek: 'SEXTA',
    displayDate: '30 JAN',
    theme: 'PERNAS',
    title: '8 EXERCÍCIOS BRUTAIS Para Ter Pernas GROSSAS em 21 Dias! (12 Min)',
    status: 'TODO',
    structure: ['8 exercícios intensos', '60s cada / 20s descanso', 'Foco hipertrofia', '12 minutos'],
    why: ['Pernas = MELHOR conversão', 'Quinta pré-sexta', 'Brutal = atrativo'],
    references: [
      { id: 'CeEEU2N8xFk', title: '7 Exercícios PODEROSOS', metrics: '128.26 conv.', note: 'CAMPEÃO ABSOLUTO DE CONVERSÃO', link: 'https://studio.youtube.com/video/CeEEU2N8xFk/analytics' }
    ],
    production: { thumbnail: 'Pernas tensionadas, "PERNAS GROSSAS", "21 DIAS", "BRUTAL"', music: 'Pesada e intensa', tags: ['pernas grossas', 'pernas brutais', 'hipertrofia pernas', '21 dias'], publishTime: '18:00' },
    checklist: GENERIC_CHECKLIST('CeEEU2N8xFk')
  },
  {
    id: 'v19',
    date: createDate(31),
    dayOfWeek: 'SÁBADO',
    displayDate: '31 JAN',
    theme: 'GLUTEOS',
    title: 'FAÇA ISSO POR 10 DIAS: 4 Exercícios Para TURBINAR Seus GLÚTEOS! 🍑 (Sem Impacto)',
    status: 'TODO',
    structure: ['4 exercícios poderosos', '3 rounds de cada', 'Sem impacto', '8-10 minutos'],
    why: ['"FAÇA ISSO" = campeão', 'Sem impacto = público amplo', '329k views'],
    references: [
      { id: 'Zb1SGLxCzFo', title: 'FAÇA ISSO... TURBINAR', metrics: '329k views', note: 'Modelo exato', link: 'https://studio.youtube.com/video/Zb1SGLxCzFo/analytics' }
    ],
    production: { thumbnail: 'Resultado de glúteo, "FAÇA ISSO POR 10 DIAS", "4 EXERCÍCIOS", 🍑', music: 'Motivacional', tags: ['faça isso', '10 dias', 'turbinar glúteos', 'sem impacto'], publishTime: '17:00' },
    checklist: GENERIC_CHECKLIST('Zb1SGLxCzFo')
  }
];

export const INITIAL_VIDEOS: VideoData[] = MANUAL_VIDEOS.sort((a, b) => a.date.localeCompare(b.date));

export const REFERENCE_VIDEOS = [
  {
    id: 'tVQDe1YxihE',
    views: '1.5M',
    metric: '82.69 conv.',
    title: 'Como Perder Barriga e Ganhar Pernas em 7 Dias',
    icon: <Trophy className="w-5 h-5 text-yellow-500" />,
    desc: 'Seu MAIOR Viral. Estude o Hook inicial.'
  },
  {
    id: '45BYCOv9GRs',
    views: '1.1M',
    metric: '111.78 conv.',
    title: '9 MINUTOS | 9 Exercícios GLÚTEOS',
    icon: <Flame className="w-5 h-5 text-orange-500" />,
    desc: 'Ritmo perfeito. Copie as transições.'
  },
  {
    id: 'oAh1MT_z4rQ',
    views: '1M',
    metric: '44.9% ret.',
    title: '10 ABDOMINAIS EM PÉ',
    icon: <TrendingUp className="w-5 h-5 text-green-500" />,
    desc: 'Explicação didática. Ótima retenção.'
  }
];

export const THEME_COLORS = {
  PERNAS: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 border-blue-200 dark:border-blue-700',
  GLUTEOS: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100 border-purple-200 dark:border-purple-700',
  ABDOMINAIS: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 border-green-200 dark:border-green-700',
  HIIT: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100 border-red-200 dark:border-red-700',
};

export const STATUS_COLORS = {
  TODO: 'text-gray-400',
  DOING: 'text-yellow-500',
  DONE: 'text-green-500',
};