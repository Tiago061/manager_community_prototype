export const testimonialsData = [
  {
    id: 1,
    name: 'Maria da Silva',
    role: 'Moradora do Jardim América',
    text: 'Graças ao trabalho do vereador Neném da Civil, conseguimos a reforma da praça do nosso bairro. Agora as crianças têm um lugar seguro para brincar. Estamos muito gratos!',
    rating: 5,
    initials: 'MS'
  },
  {
    id: 2,
    name: 'José Santos',
    role: 'Comerciante no Centro',
    text: 'O programa de capacitação profissional mudou a vida de muita gente aqui na nossa região. Meus funcionários fizeram os cursos gratuitos e melhoraram muito o atendimento.',
    rating: 5,
    initials: 'JS'
  },
  {
    id: 3,
    name: 'Ana Oliveira',
    role: 'Professora na Vila Nova',
    text: 'É muito bom ter um vereador que realmente escuta a comunidade. Fiz uma solicitação pela plataforma e em menos de 15 dias já tivemos retorno. Transparência de verdade!',
    rating: 5,
    initials: 'AO'
  },
  {
    id: 4,
    name: 'Carlos Mendes',
    role: 'Morador do Parque das Águas',
    text: 'Através do portal de vagas consegui uma oportunidade de emprego. Uma iniciativa incrível que conecta empresas com quem precisa de trabalho. Parabéns pelo serviço!',
    rating: 4,
    initials: 'CM'
  },
  {
    id: 5,
    name: 'Fernanda Costa',
    role: 'Líder comunitária',
    text: 'A ouvidoria funciona de verdade! Já encaminhei várias demandas da nossa comunidade e todas foram atendidas ou encaminhadas. Isso é compromisso com o povo.',
    rating: 5,
    initials: 'FC'
  }
];

export const ombudsmanData = [
  {
    id: 1,
    protocol: 'OUV-2026-0042',
    category: 'Reclamação',
    subject: 'Demora no atendimento da UBS Central',
    status: 'Respondida',
    date: '20 Jun 2026',
    responseDate: '22 Jun 2026'
  },
  {
    id: 2,
    protocol: 'OUV-2026-0041',
    category: 'Sugestão',
    subject: 'Instalação de semáforo na Rua das Acácias',
    status: 'Em análise',
    date: '18 Jun 2026',
    responseDate: null
  },
  {
    id: 3,
    protocol: 'OUV-2026-0040',
    category: 'Elogio',
    subject: 'Ótimo atendimento na ação social do Jardim Europa',
    status: 'Respondida',
    date: '15 Jun 2026',
    responseDate: '16 Jun 2026'
  },
  {
    id: 4,
    protocol: 'OUV-2026-0039',
    category: 'Solicitação',
    subject: 'Poda de árvore na Av. Central',
    status: 'Encaminhada',
    date: '14 Jun 2026',
    responseDate: null
  },
  {
    id: 5,
    protocol: 'OUV-2026-0038',
    category: 'Denúncia',
    subject: 'Descarte irregular de lixo no córrego municipal',
    status: 'Em análise',
    date: '12 Jun 2026',
    responseDate: null
  }
];

export const ombudsmanCategories = [
  { value: 'reclamacao', label: 'Reclamação', icon: '😤', color: 'error' },
  { value: 'sugestao', label: 'Sugestão', icon: '💡', color: 'warning' },
  { value: 'elogio', label: 'Elogio', icon: '⭐', color: 'green' },
  { value: 'solicitacao', label: 'Solicitação', icon: '📋', color: 'blue' },
  { value: 'denuncia', label: 'Denúncia', icon: '🚨', color: 'brand' }
];
