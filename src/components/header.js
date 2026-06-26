import { icons } from './icons.js';

export function renderHeader(activePage = '') {
  const isAdmin = activePage.startsWith('admin');
  
  if (isAdmin) {
    return renderAdminHeader();
  }
  
  return `
    <header class="site-header" id="site-header">
      <div class="header-inner">
        <a href="/" class="header-logo" id="header-logo">
          <div class="header-logo-text">
            <span class="header-logo-name">NENÉM DA CIVIL</span>
            <span class="header-logo-role">Vereador</span>
          </div>
        </a>
        
        <nav class="header-nav" id="header-nav">
          <a href="/" class="${activePage === 'home' ? 'active' : ''}">Início</a>
          <a href="/noticias" class="${activePage === 'noticias' ? 'active' : ''}">Notícias</a>
          <a href="/vagas" class="${activePage === 'vagas' ? 'active' : ''}">Vagas</a>
          <a href="/demandas" class="${activePage === 'demandas' ? 'active' : ''}">Demandas</a>
          <a href="/ouvidoria" class="${activePage === 'ouvidoria' ? 'active' : ''}">Ouvidoria</a>
          <a href="/sobre" class="${activePage === 'sobre' ? 'active' : ''}">Sobre</a>
          <a href="/contato" class="${activePage === 'contato' ? 'active' : ''}">Contato</a>
        </nav>
        
        <div class="header-actions">
          <button class="mobile-menu-btn" id="mobile-menu-btn" aria-label="Menu">
            ${icons.menu}
          </button>
        </div>
      </div>
    </header>
    
    <div class="mobile-menu" id="mobile-menu">
      <a href="/" onclick="closeMobileMenu()">Início</a>
      <a href="/noticias" onclick="closeMobileMenu()">Notícias</a>
      <a href="/vagas" onclick="closeMobileMenu()">Vagas</a>
      <a href="/demandas" onclick="closeMobileMenu()">Demandas</a>
      <a href="/ouvidoria" onclick="closeMobileMenu()">Ouvidoria</a>
      <a href="/sobre" onclick="closeMobileMenu()">Sobre</a>
      <a href="/contato" onclick="closeMobileMenu()">Contato</a>
    </div>
  `;
}

function renderAdminHeader() {
  return `
    <header class="admin-header" id="site-header">
      <div class="admin-header-left">
        <button class="btn btn-ghost btn-icon" id="admin-sidebar-toggle-btn" onclick="toggleAdminSidebar()">
          ${icons.menu}
        </button>
        <a href="/" class="header-logo">
          <div class="header-logo-text">
            <span class="header-logo-name">NENÉM DA CIVIL</span>
            <span class="header-logo-role">Painel Administrativo</span>
          </div>
        </a>
      </div>
      <div class="admin-header-right">
        <div class="search-bar" style="max-width: 300px;">
          ${icons.search}
          <input type="text" placeholder="Pesquisar..." />
        </div>
        <button class="btn btn-ghost btn-icon notification-dot" id="admin-notifications">
          ${icons.bell}
        </button>
        <div class="admin-user-menu" id="admin-user-menu">
          <div class="avatar avatar-sm avatar-placeholder">NC</div>
          <div>
            <div class="admin-user-name">Neném da Civil</div>
            <div class="admin-user-role">Administrador</div>
          </div>
        </div>
      </div>
    </header>
  `;
}

export function initHeaderEvents() {
  // Scroll effect
  const header = document.getElementById('site-header');
  if (header) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 10);
    });
  }

  // Mobile menu
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.contains('open');
      mobileMenu.classList.toggle('open');
      menuBtn.innerHTML = isOpen ? icons.menu : icons.x;
      document.body.classList.toggle('overflow-hidden', !isOpen);
    });
  }
}

window.closeMobileMenu = function() {
  const mobileMenu = document.getElementById('mobile-menu');
  const menuBtn = document.getElementById('mobile-menu-btn');
  if (mobileMenu) {
    mobileMenu.classList.remove('open');
    document.body.classList.remove('overflow-hidden');
  }
  if (menuBtn) {
    menuBtn.innerHTML = icons.menu;
  }
};

window.toggleAdminSidebar = function() {
  const sidebar = document.getElementById('admin-sidebar');
  const main = document.getElementById('admin-main');
  if (sidebar) {
    sidebar.classList.toggle('collapsed');
    sidebar.classList.toggle('open');
  }
  if (main) {
    main.classList.toggle('expanded');
  }
};
