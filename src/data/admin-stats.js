export const adminStats = {
  visitors: { value: '12.458', trend: '+12%', direction: 'up' },
  users: { value: '3.247', trend: '+8%', direction: 'up' },
  resumes: { value: '892', trend: '+23%', direction: 'up' },
  demands: { value: '156', trend: '-5%', direction: 'down' },
  comments: { value: '1.043', trend: '+15%', direction: 'up' },
  news: { value: '48', trend: '+3', direction: 'up' },
  jobs: { value: '24', trend: '+6', direction: 'up' },
  ombudsman: { value: '67', trend: '+4', direction: 'up' }
};

export const recentActivity = [
  { type: 'brand', text: '<strong>Maria Silva</strong> enviou um novo currículo', time: 'Há 5 minutos' },
  { type: 'green', text: '<strong>Demanda #156</strong> foi marcada como resolvida', time: 'Há 15 minutos' },
  { type: 'blue', text: 'Nova notícia <strong>"Mutirão de Saúde"</strong> foi publicada', time: 'Há 1 hora' },
  { type: 'brand', text: '<strong>Carlos Mendes</strong> comentou em uma notícia', time: 'Há 2 horas' },
  { type: 'green', text: 'Nova vaga <strong>"Auxiliar Administrativo"</strong> cadastrada', time: 'Há 3 horas' },
  { type: 'blue', text: '<strong>Ouvidoria #042</strong> foi respondida', time: 'Há 4 horas' },
  { type: 'brand', text: '<strong>15 novos cidadãos</strong> se cadastraram hoje', time: 'Há 5 horas' },
  { type: 'green', text: 'Automação <strong>"Feliz Aniversário"</strong> enviou 8 mensagens', time: 'Há 6 horas' }
];

export const chartData = {
  visitors: {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
    data: [4200, 5800, 7100, 8400, 10200, 12458]
  },
  demands: {
    labels: ['Recebidas', 'Em andamento', 'Resolvidas', 'Arquivadas'],
    data: [45, 32, 67, 12]
  }
};

export const automationsData = [
  {
    id: 1,
    title: 'Feliz Aniversário',
    description: 'Envia automaticamente uma mensagem personalizada de aniversário para cidadãos cadastrados.',
    status: 'active',
    channels: ['WhatsApp', 'Email'],
    lastRun: '25 Jun 2026 - 08:00',
    totalSent: 342,
    flow: ['🎂 Aniversário detectado', '🖼️ Gerar imagem', '📱 WhatsApp', '📧 Email']
  },
  {
    id: 2,
    title: 'Nova Vaga Cadastrada',
    description: 'Notifica todos os cidadãos cadastrados quando uma nova vaga de emprego é publicada.',
    status: 'active',
    channels: ['WhatsApp', 'Email'],
    lastRun: '22 Jun 2026 - 14:30',
    totalSent: 1205,
    flow: ['💼 Nova vaga', '👥 Filtrar perfis', '📱 WhatsApp', '📧 Email']
  },
  {
    id: 3,
    title: 'Nova Notícia Publicada',
    description: 'Envia notificação automática quando uma nova notícia é publicada no portal.',
    status: 'active',
    channels: ['WhatsApp'],
    lastRun: '20 Jun 2026 - 10:15',
    totalSent: 890,
    flow: ['📰 Nova notícia', '📋 Formatar', '📱 WhatsApp']
  },
  {
    id: 4,
    title: 'Demanda Respondida',
    description: 'Notifica o cidadão quando sua demanda recebe uma atualização de status.',
    status: 'active',
    channels: ['WhatsApp', 'Email'],
    lastRun: '22 Jun 2026 - 16:45',
    totalSent: 567,
    flow: ['📋 Status alterado', '👤 Identificar cidadão', '📱 WhatsApp']
  },
  {
    id: 5,
    title: 'Ouvidoria Respondida',
    description: 'Envia resposta da ouvidoria automaticamente ao cidadão solicitante.',
    status: 'paused',
    channels: ['Email'],
    lastRun: '18 Jun 2026 - 09:30',
    totalSent: 123,
    flow: ['📝 Resposta criada', '📧 Email', '✅ Confirmar leitura']
  }
];

export const crmData = [
  { id: 1, name: 'Maria da Silva', phone: '(11) 98765-4321', whatsapp: '(11) 98765-4321', city: 'Cidade Exemplo', birthdate: '15/03/1985', interests: ['Saúde', 'Educação'], initials: 'MS' },
  { id: 2, name: 'José Santos', phone: '(11) 91234-5678', whatsapp: '(11) 91234-5678', city: 'Cidade Exemplo', birthdate: '22/07/1978', interests: ['Emprego', 'Infraestrutura'], initials: 'JS' },
  { id: 3, name: 'Ana Oliveira', phone: '(11) 99876-5432', whatsapp: '(11) 99876-5432', city: 'Cidade Exemplo', birthdate: '08/11/1990', interests: ['Educação', 'Cultura'], initials: 'AO' },
  { id: 4, name: 'Carlos Mendes', phone: '(11) 95555-1234', whatsapp: '(11) 95555-1234', city: 'Cidade Exemplo', birthdate: '30/01/1982', interests: ['Emprego', 'Transporte'], initials: 'CM' },
  { id: 5, name: 'Fernanda Costa', phone: '(11) 94444-8765', whatsapp: '(11) 94444-8765', city: 'Cidade Exemplo', birthdate: '12/06/1995', interests: ['Saúde', 'Segurança'], initials: 'FC' },
  { id: 6, name: 'Ricardo Lima', phone: '(11) 93333-2222', whatsapp: '(11) 93333-2222', city: 'Cidade Exemplo', birthdate: '05/09/1988', interests: ['Infraestrutura', 'Meio Ambiente'], initials: 'RL' },
  { id: 7, name: 'Patrícia Alves', phone: '(11) 92222-1111', whatsapp: '(11) 92222-1111', city: 'Cidade Exemplo', birthdate: '18/12/1992', interests: ['Educação', 'Emprego'], initials: 'PA' },
  { id: 8, name: 'Marcos Pereira', phone: '(11) 91111-3333', whatsapp: '(11) 91111-3333', city: 'Cidade Exemplo', birthdate: '27/04/1975', interests: ['Saúde', 'Transporte'], initials: 'MP' }
];
