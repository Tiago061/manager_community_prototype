import { renderHeader, initHeaderEvents } from '../components/header.js';
import { renderFooter } from '../components/footer.js';
import { icons, renderStars } from '../components/icons.js';
import { newsData } from '../data/news.js';
import { jobsData } from '../data/jobs.js';
import { demandsData } from '../data/demands.js';
import { testimonialsData } from '../data/testimonials.js';

export function renderHome() {
  const html = `
    ${renderHeader('home')}
    <main class="main-content">
      ${renderHero()}
      ${renderStats()}
      ${renderNewsSection()}
      ${renderJobsSection()}
      ${renderActionsSection()}
      ${renderDemandsSection()}
      ${renderAboutSection()}
      ${renderTestimonialsSection()}
      ${renderCTA()}
    </main>
    ${renderMascot()}
    ${renderFooter()}
  `;

  window.__pageInit = () => {
    initHeaderEvents();
    animateCounters();
    initMascotEvents();
  };

  return html;
}

function renderHero() {
  return `
    <section class="hero" id="hero">
      <div class="hero-bg-texture"></div>
      <div class="hero-inner">
        <div class="hero-content">
          <div class="hero-badge">
            <span class="hero-badge-dot"></span>
            Plataforma Oficial do Vereador
          </div>
          <h1 class="hero-title">
            Trabalhando pela <span>comunidade</span> com<br/>transparência
          </h1>
          <p class="hero-subtitle">
            Conectando cidadãos, oportunidades e soluções.<br/>
            Acompanhe as ações do mandato, busque vagas de<br/>
            emprego, envie demandas e participe da<br/>
            transformação da nossa cidade.
          </p>
          <div class="hero-buttons">
            <a href="/noticias" class="btn btn-primary btn-lg">
              ${icons.fileText} Ver Notícias
            </a>
            <a href="/vagas" class="btn btn-white btn-lg">
              ${icons.briefcase} Buscar Vagas
            </a>
          </div>
        </div>
        <div class="hero-photo-wrapper">
          <div class="hero-photo-container">
            <div class="hero-photo-placeholder">
              <img src="/candidate.png" alt="Vereador Neném da Civil" class="hero-candidate-img" />
            </div>
          </div>
        </div>
      </div>
      <div class="hero-swoosh">
        <div class="swoosh-layer layer-1"></div>
        <div class="swoosh-layer layer-2"></div>
        <div class="swoosh-layer layer-3"></div>
      </div>
    </section>
  `;
}

function renderStats() {
  const stats = [
    { icon: icons.briefcase, color: 'brand', number: '24', label: 'Vagas Abertas', bg: 'var(--brand-bg)' },
    { icon: icons.checkCircle, color: 'green', number: '67', label: 'Demandas Resolvidas', bg: 'var(--green-bg)' },
    { icon: icons.newspaper, color: 'blue', number: '48', label: 'Notícias Publicadas', bg: 'var(--blue-bg)' },
    { icon: icons.users, color: 'brand', number: '3.247', label: 'Cidadãos Cadastrados', bg: 'var(--brand-bg)' },
  ];

  return `
    <section class="stats-bar">
      <div class="stats-bar-inner">
        <div class="stats-grid stagger-children">
          ${stats.map(stat => `
            <div class="stats-card">
              <div class="stats-card-icon" style="background:${stat.bg};color:var(--${stat.color})">
                ${stat.icon}
              </div>
              <div class="stats-card-number counter" data-target="${stat.number.replace(/\./g, '')}">${stat.number}</div>
              <div class="stats-card-label">${stat.label}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

function renderNewsSection() {
  return `
    <section class="section" id="noticias-destaque">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-tag">${icons.newspaper} Notícias</span>
          <h2 class="section-title">Notícias em Destaque</h2>
          <p class="section-subtitle">Acompanhe as últimas notícias e ações do mandato do vereador Neném da Civil</p>
        </div>
        <div class="grid grid-3 stagger-children">
          ${newsData.slice(0, 6).map(news => `
            <article class="news-card" id="news-card-${news.id}">
              <div class="news-card-img">
                <div class="placeholder-icon">${icons.image}</div>
                <span class="news-card-category badge badge-${getCategoryColor(news.category)}">${news.category}</span>
              </div>
              <div class="news-card-body">
                <h3 class="news-card-title">${news.title}</h3>
                <p class="news-card-excerpt">${news.excerpt}</p>
                <div class="news-card-meta">
                  <span class="news-card-date">${news.date}</span>
                  <div class="news-card-stats">
                    <span class="news-card-stat">${icons.heart} ${news.likes}</span>
                    <span class="news-card-stat">${icons.messageCircle} ${news.comments}</span>
                  </div>
                </div>
              </div>
              <div style="padding: 0 20px 20px;">
                <a href="/noticia/${news.id}" class="btn btn-outline w-full" style="width:100%">Ler notícia ${icons.arrowRight}</a>
              </div>
            </article>
          `).join('')}
        </div>
        <div class="text-center mt-8">
          <a href="/noticias" class="btn btn-primary btn-lg">Ver todas as notícias ${icons.arrowRight}</a>
        </div>
      </div>
    </section>
  `;
}

function renderJobsSection() {
  return `
    <section class="section" style="background: var(--gray-50);" id="vagas-destaque">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-tag">${icons.briefcase} Oportunidades</span>
          <h2 class="section-title">Portal de Vagas</h2>
          <p class="section-subtitle">Encontre oportunidades de emprego na sua região</p>
        </div>
        <div class="grid grid-2 stagger-children">
          ${jobsData.slice(0, 4).map(job => `
            <div class="job-card" id="job-card-${job.id}">
              <div class="job-card-header">
                <div>
                  <h3 class="job-card-title">${job.title}</h3>
                  <p class="job-card-company">${job.company}</p>
                </div>
                <div class="job-card-company-logo">${job.company.charAt(0)}</div>
              </div>
              <div class="job-card-info">
                <span class="job-card-info-item">${icons.mapPin} ${job.city}</span>
                <span class="job-card-info-item">${icons.monitor} ${job.modality}</span>
                <span class="job-card-info-item">${icons.clock} ${job.type}</span>
              </div>
              <div class="job-card-tags">
                <span class="badge badge-blue">${job.area}</span>
                <span class="badge badge-gray">${job.education}</span>
              </div>
              <div class="job-card-footer">
                <span class="job-card-salary">${job.salary}</span>
                <a href="/vaga/${job.id}" class="btn btn-primary btn-sm">Candidatar-se ${icons.arrowRight}</a>
              </div>
            </div>
          `).join('')}
        </div>
        <div class="text-center mt-8">
          <a href="/vagas" class="btn btn-blue btn-lg">Ver todas as vagas ${icons.arrowRight}</a>
        </div>
      </div>
    </section>
  `;
}

function renderActionsSection() {
  const actions = [
    { title: 'Mutirão de Saúde', desc: 'Atendimentos gratuitos com consultas, exames e vacinação para a comunidade.' },
    { title: 'Capacitação Profissional', desc: 'Cursos gratuitos de qualificação profissional em parceria com instituições.' },
    { title: 'Melhoria Urbana', desc: 'Obras de infraestrutura, iluminação e revitalização de espaços públicos.' },
  ];

  return `
    <section class="section" id="acoes-mandato">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-tag" style="background:var(--green-bg);color:var(--green);">${icons.checkCircle} Ações</span>
          <h2 class="section-title">Ações do Mandato</h2>
          <p class="section-subtitle">Conheça as principais ações realizadas pelo gabinete do vereador</p>
        </div>
        <div class="grid grid-3 stagger-children">
          ${actions.map((action, i) => `
            <div class="action-card" id="action-card-${i}">
              <div class="action-card-img">
                ${icons.image}
              </div>
              <div class="action-card-body">
                <h3 class="action-card-title">${action.title}</h3>
                <p class="action-card-text">${action.desc}</p>
                <a href="/sobre" class="btn btn-outline btn-sm">Saiba mais ${icons.arrowRight}</a>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

function renderDemandsSection() {
  const demands = demandsData.filter(d => d.status === 'resolved').slice(0, 4);
  return `
    <section class="section" style="background: var(--gray-50);" id="demandas-destaque">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-tag" style="background:var(--blue-bg);color:var(--blue);">${icons.clipboardList} Comunidade</span>
          <h2 class="section-title">Demandas da Comunidade</h2>
          <p class="section-subtitle">Acompanhe as solicitações da comunidade e seus status</p>
        </div>
        <div class="grid grid-2 stagger-children">
          ${demands.map(d => `
            <div class="demand-card ${d.status === 'resolved' ? 'resolved' : d.status === 'in-progress' ? 'in-progress' : 'received'}" id="demand-card-${d.id}">
              <div class="demand-card-header">
                <span class="badge badge-status ${getStatusBadgeClass(d.status)}">${d.statusLabel}</span>
                <span class="demand-card-category badge badge-blue">${d.category}</span>
              </div>
              <p class="demand-card-description">${d.description}</p>
              <div class="demand-card-location">
                ${icons.mapPin} ${d.neighborhood} · ${d.date}
              </div>
            </div>
          `).join('')}
        </div>
        <div class="text-center mt-8">
          <a href="/demandas" class="btn btn-primary btn-lg">Enviar nova demanda ${icons.arrowRight}</a>
        </div>
      </div>
    </section>
  `;
}

function renderAboutSection() {
  return `
    <section class="section" id="sobre-vereador">
      <div class="container">
        <div class="about-grid reveal">
          <div class="about-photo">
            <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;color:var(--gray-400);">
              ${icons.user}
              <span style="font-size:var(--font-sm);font-weight:var(--fw-medium);">Foto do Vereador</span>
            </div>
          </div>
          <div>
            <span class="section-tag">${icons.userCircle} Sobre</span>
            <h2 class="section-title" style="text-align:left;">Vereador Neném da Civil</h2>
            <p style="color:var(--gray-600);line-height:1.8;margin-bottom:var(--space-6);">
              Neném da Civil é vereador comprometido com a transparência e o desenvolvimento da comunidade. 
              Com anos de atuação na vida pública, luta pela melhoria da qualidade de vida dos cidadãos, 
              focando em saúde, educação, emprego e infraestrutura. Sua missão é representar a voz do povo 
              na Câmara Municipal com ética e dedicação.
            </p>
            <div class="timeline" style="margin-top:var(--space-8);">
              <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-year">2024</div>
                <div class="timeline-title">Eleito Vereador</div>
                <div class="timeline-text">Eleito com expressiva votação popular, iniciou o mandato com foco em transparência digital.</div>
              </div>
              <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-year">2025</div>
                <div class="timeline-title">Portal de Vagas</div>
                <div class="timeline-text">Lançou o portal de vagas de emprego conectando empresas e cidadãos.</div>
              </div>
              <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-year">2026</div>
                <div class="timeline-title">Plataforma Digital</div>
                <div class="timeline-text">Lançamento da plataforma integrada de comunicação com a comunidade.</div>
              </div>
            </div>
            <a href="/sobre" class="btn btn-blue btn-lg mt-6">Conheça mais ${icons.arrowRight}</a>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderTestimonialsSection() {
  return `
    <section class="section" style="background:var(--gray-50);" id="depoimentos">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-tag">${icons.heart} Depoimentos</span>
          <h2 class="section-title">O Que Dizem os Cidadãos</h2>
          <p class="section-subtitle">Veja os depoimentos de quem já foi impactado pelo trabalho do vereador</p>
        </div>
        <div class="grid grid-3 stagger-children">
          ${testimonialsData.slice(0, 3).map(t => `
            <div class="testimonial-card" id="testimonial-${t.id}">
              <span class="testimonial-card-quote">"</span>
              <p class="testimonial-card-text">${t.text}</p>
              <div class="testimonial-card-author">
                <div class="avatar avatar-lg avatar-placeholder">${t.initials}</div>
                <div>
                  <div class="testimonial-card-name">${t.name}</div>
                  <div class="testimonial-card-role">${t.role}</div>
                  <div style="margin-top:4px;">${renderStars(t.rating)}</div>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

function renderCTA() {
  return `
    <section class="cta-section" id="cta">
      <div class="container">
        <h2 class="cta-title">Faça parte da nossa comunidade</h2>
        <p class="cta-subtitle">Cadastre-se para receber notícias, oportunidades de emprego e acompanhar as ações do mandato.</p>
        <div style="display:flex;gap:var(--space-4);justify-content:center;flex-wrap:wrap;">
          <a href="/cadastro" class="btn btn-white btn-xl">Cadastre-se gratuitamente ${icons.arrowRight}</a>
        </div>
      </div>
    </section>
  `;
}

function getCategoryColor(category) {
  const colors = {
    'Obras': 'brand', 'Educação': 'blue', 'Saúde': 'green',
    'Legislação': 'blue', 'Social': 'green', 'Transporte': 'warning',
    'Segurança': 'error'
  };
  return colors[category] || 'gray';
}

function getStatusBadgeClass(status) {
  const classes = {
    'received': 'badge-warning', 'in-progress': 'badge-blue', 'resolved': 'badge-green'
  };
  return classes[status] || 'badge-gray';
}

function animateCounters() {
  const counters = document.querySelectorAll('.counter');
  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-target'));
    const duration = 2000;
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        clearInterval(timer);
        current = target;
      }
      counter.textContent = Math.floor(current).toLocaleString('pt-BR');
    }, 16);
  });
}

function renderMascot() {
  return `
    <div class="mascot-container" id="mascot-widget">
      <div class="mascot-bubble" id="mascot-bubble">
        <div class="mascot-bubble-header">
          <h4 style="font-size:var(--font-sm);font-weight:var(--fw-bold);margin:0;color:var(--brand);">Suporte Interativo</h4>
          <button class="btn btn-ghost btn-icon" id="close-mascot" style="padding:2px;width:24px;height:24px;">${icons.x}</button>
        </div>
        <div class="mascot-bubble-content">
          <p style="font-size:var(--font-sm);color:var(--gray-700);margin-bottom:var(--space-4);">Olá! Eu sou o assistente do vereador. Como posso ajudar você hoje?</p>
          <div class="mascot-options">
            <a href="/vagas" class="mascot-option">
              <span class="mascot-option-icon" style="background:var(--brand-bg);color:var(--brand);">${icons.briefcase}</span>
              <div>
                <strong>Buscar Vagas</strong>
                <span>Encontre oportunidades de emprego</span>
              </div>
            </a>
            <a href="/demandas" class="mascot-option">
              <span class="mascot-option-icon" style="background:var(--blue-bg);color:var(--blue);">${icons.clipboardList}</span>
              <div>
                <strong>Enviar Demanda</strong>
                <span>Solicite melhorias para o bairro</span>
              </div>
            </a>
            <a href="/ouvidoria" class="mascot-option">
              <span class="mascot-option-icon" style="background:var(--green-bg);color:var(--green);">${icons.messageCircle}</span>
              <div>
                <strong>Ouvidoria</strong>
                <span>Fale diretamente conosco</span>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div class="mascot-avatar" id="mascot-avatar">
        <img src="/mascot.png" alt="Assistente Virtual" />
      </div>
    </div>
  `;
}

function initMascotEvents() {
  const avatar = document.getElementById('mascot-avatar');
  const bubble = document.getElementById('mascot-bubble');
  const closeBtn = document.getElementById('close-mascot');

  if (avatar && bubble) {
    // Animate bubble entry with delay
    setTimeout(() => {
      bubble.classList.add('active');
    }, 1500);

    avatar.addEventListener('click', () => {
      bubble.classList.toggle('active');
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        bubble.classList.remove('active');
      });
    }
  }
}
