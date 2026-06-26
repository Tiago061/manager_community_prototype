import { icons } from './icons.js';

export function renderAdminSidebar(activePage = 'dashboard') {
  const navItems = [
    { section: 'Principal', items: [
      { id: 'dashboard', label: 'Dashboard', icon: icons.layoutDashboard, route: '/admin' },
    ]},
    { section: 'Conteúdo', items: [
      { id: 'news', label: 'Notícias', icon: icons.newspaper, route: '/admin/noticias', badge: '3' },
      { id: 'jobs', label: 'Vagas', icon: icons.briefcase, route: '/admin/vagas' },
      { id: 'candidates', label: 'Candidatos', icon: icons.fileText, route: '/admin/candidatos' },
    ]},
    { section: 'Atendimento', items: [
      { id: 'demands', label: 'Demandas', icon: icons.clipboardList, route: '/admin/demandas', badge: '5' },
      { id: 'comments', label: 'Comentários', icon: icons.messageCircle, route: '/admin/comentarios' },
      { id: 'ombudsman', label: 'Ouvidoria', icon: icons.megaphone, route: '/admin/ouvidoria', badge: '2' },
    ]},
    { section: 'Gestão', items: [
      { id: 'crm', label: 'CRM Cidadãos', icon: icons.users, route: '/admin/crm' },
      { id: 'automations', label: 'Automações', icon: icons.zap, route: '/admin/automacoes' },
      { id: 'settings', label: 'Configurações', icon: icons.settings, route: '/admin/configuracoes' },
    ]}
  ];

  return `
    <aside class="admin-sidebar" id="admin-sidebar">
      <nav class="admin-sidebar-nav">
        ${navItems.map(section => `
          <div class="admin-sidebar-section">
            <div class="admin-sidebar-section-title">${section.section}</div>
            ${section.items.map(item => `
              <a href="${item.route}" class="admin-nav-item ${activePage === item.id ? 'active' : ''}" id="nav-${item.id}">
                ${item.icon}
                <span>${item.label}</span>
                ${item.badge ? `<span class="nav-badge">${item.badge}</span>` : ''}
              </a>
            `).join('')}
          </div>
        `).join('')}
      </nav>
      <div class="admin-sidebar-toggle" onclick="toggleAdminSidebar()">
        ${icons.panelLeft}
        <span>Recolher</span>
      </div>
    </aside>
  `;
}
