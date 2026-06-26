import { renderHeader, initHeaderEvents } from '../components/header.js';
import { renderFooter } from '../components/footer.js';
import { icons } from '../components/icons.js';
import { jobsData, jobFilters } from '../data/jobs.js';

export function renderJobs() {
  const html = `
    ${renderHeader('vagas')}
    <main class="main-content">
      <section class="page-header">
        <div class="page-header-inner">
          <div class="breadcrumb">
            <a href="/">Início</a>
            <span class="breadcrumb-separator">${icons.chevronRight}</span>
            <span>Vagas</span>
          </div>
          <h1 class="page-header-title">Portal de Vagas</h1>
          <p class="page-header-subtitle">Encontre a oportunidade ideal para você</p>
        </div>
      </section>

      <section class="section-sm">
        <div class="page-with-sidebar">
          <!-- Filters Sidebar -->
          <aside class="filters-sidebar" id="filters-sidebar">
            <div class="filters-title">
              ${icons.filter} Filtros
              <button class="btn btn-ghost btn-sm" onclick="clearFilters()">Limpar</button>
            </div>
            
            <div class="form-group mb-4">
              <div class="search-bar" style="max-width:100%;">
                ${icons.search}
                <input type="text" placeholder="Pesquisar vagas..." id="job-search" />
              </div>
            </div>

            <div class="filter-group">
              <div class="filter-group-title">Cidade</div>
              <div class="filter-options">
                ${jobFilters.cities.map(city => `
                  <label class="form-check"><input type="checkbox" value="${city}" /> ${city}</label>
                `).join('')}
              </div>
            </div>

            <div class="filter-group">
              <div class="filter-group-title">Área</div>
              <div class="filter-options">
                ${jobFilters.areas.map(area => `
                  <label class="form-check"><input type="checkbox" value="${area}" /> ${area}</label>
                `).join('')}
              </div>
            </div>

            <div class="filter-group">
              <div class="filter-group-title">Escolaridade</div>
              <div class="filter-options">
                ${jobFilters.education.map(edu => `
                  <label class="form-check"><input type="checkbox" value="${edu}" /> ${edu}</label>
                `).join('')}
              </div>
            </div>

            <div class="filter-group">
              <div class="filter-group-title">Tipo de Vaga</div>
              <div class="filter-options">
                ${jobFilters.types.map(t => `
                  <label class="form-check"><input type="checkbox" value="${t}" /> ${t}</label>
                `).join('')}
              </div>
            </div>
          </aside>

          <!-- Jobs List -->
          <div>
            <div class="flex items-center justify-between mb-4">
              <span class="text-sm text-muted">${jobsData.length} vagas encontradas</span>
              <select class="form-select" style="width:auto;min-width:180px;">
                <option>Mais recentes</option>
                <option>Maior salário</option>
                <option>Relevância</option>
              </select>
            </div>
            <div class="flex flex-col gap-4">
              ${jobsData.map(job => `
                <div class="job-card" id="job-list-${job.id}">
                  <div class="job-card-header">
                    <div>
                      <h3 class="job-card-title">${job.title}</h3>
                      <p class="job-card-company">${job.company}</p>
                    </div>
                    <div class="job-card-company-logo">${job.company.charAt(0)}</div>
                  </div>
                  <p style="font-size:var(--font-sm);color:var(--gray-600);line-height:var(--lh-relaxed);">${job.description}</p>
                  <div class="job-card-info">
                    <span class="job-card-info-item">${icons.mapPin} ${job.city}</span>
                    <span class="job-card-info-item">${icons.monitor} ${job.modality}</span>
                    <span class="job-card-info-item">${icons.clock} ${job.type}</span>
                    <span class="job-card-info-item">${icons.calendar} Até ${job.deadline}</span>
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

            <div class="pagination">
              <button class="pagination-btn">${icons.arrowLeft}</button>
              <button class="pagination-btn active">1</button>
              <button class="pagination-btn">2</button>
              <button class="pagination-btn">${icons.arrowRight}</button>
            </div>
          </div>
        </div>
      </section>
    </main>
    ${renderFooter()}
  `;
  window.__pageInit = () => initHeaderEvents();
  window.clearFilters = function() {
    document.querySelectorAll('.filters-sidebar input[type="checkbox"]').forEach(cb => cb.checked = false);
    const search = document.getElementById('job-search');
    if (search) search.value = '';
  };
  return html;
}

export function renderJobDetail(params) {
  const jobId = parseInt(params[0]);
  const job = jobsData.find(j => j.id === jobId) || jobsData[0];

  const html = `
    ${renderHeader('vagas')}
    <main class="main-content">
      <section class="page-header">
        <div class="page-header-inner">
          <div class="breadcrumb">
            <a href="/">Início</a>
            <span class="breadcrumb-separator">${icons.chevronRight}</span>
            <a href="/vagas">Vagas</a>
            <span class="breadcrumb-separator">${icons.chevronRight}</span>
            <span>${job.title}</span>
          </div>
        </div>
      </section>

      <section class="section-sm">
        <div class="container" style="max-width: var(--container-lg);">
          <div class="card" style="overflow:visible;">
            <div class="card-body" style="padding:var(--space-10);">
              <div class="flex items-start justify-between gap-4 mb-6" style="flex-wrap:wrap;">
                <div>
                  <div class="flex gap-2 mb-3">
                    <span class="badge badge-blue">${job.area}</span>
                    <span class="badge badge-green">${job.modality}</span>
                    <span class="badge badge-gray">${job.type}</span>
                  </div>
                  <h1 style="font-size:var(--font-3xl);font-weight:var(--fw-extrabold);color:var(--gray-900);margin-bottom:var(--space-2);">${job.title}</h1>
                  <p style="font-size:var(--font-lg);color:var(--gray-500);">${job.company} · ${job.city}</p>
                </div>
                <div class="job-card-company-logo" style="width:64px;height:64px;font-size:var(--font-2xl);">${job.company.charAt(0)}</div>
              </div>

              <div class="flex gap-6 mb-8" style="flex-wrap:wrap;">
                <div class="stat-card" style="flex:1;min-width:150px;">
                  <div class="stat-card-icon brand">${icons.dollarSign}</div>
                  <div>
                    <div style="font-size:var(--font-xl);font-weight:var(--fw-bold);color:var(--green);">${job.salary}</div>
                    <div class="stat-card-label">Salário</div>
                  </div>
                </div>
                <div class="stat-card" style="flex:1;min-width:150px;">
                  <div class="stat-card-icon blue">${icons.clock}</div>
                  <div>
                    <div style="font-size:var(--font-xl);font-weight:var(--fw-bold);">${job.type}</div>
                    <div class="stat-card-label">Contrato</div>
                  </div>
                </div>
                <div class="stat-card" style="flex:1;min-width:150px;">
                  <div class="stat-card-icon green">${icons.calendar}</div>
                  <div>
                    <div style="font-size:var(--font-xl);font-weight:var(--fw-bold);">${job.deadline}</div>
                    <div class="stat-card-label">Prazo</div>
                  </div>
                </div>
              </div>

              <hr class="divider" />

              <div style="margin-bottom:var(--space-8);">
                <h2 style="font-size:var(--font-xl);font-weight:var(--fw-bold);margin-bottom:var(--space-4);">Descrição da Vaga</h2>
                <p style="color:var(--gray-600);line-height:1.8;">${job.description}</p>
              </div>

              <div style="margin-bottom:var(--space-8);">
                <h2 style="font-size:var(--font-xl);font-weight:var(--fw-bold);margin-bottom:var(--space-4);">Requisitos</h2>
                <ul style="display:flex;flex-direction:column;gap:var(--space-2);">
                  ${job.requirements.map(r => `
                    <li style="display:flex;align-items:center;gap:var(--space-2);color:var(--gray-600);">
                      <span style="color:var(--green);">${icons.check}</span> ${r}
                    </li>
                  `).join('')}
                </ul>
              </div>

              <div style="margin-bottom:var(--space-8);">
                <h2 style="font-size:var(--font-xl);font-weight:var(--fw-bold);margin-bottom:var(--space-4);">Benefícios</h2>
                <div class="flex gap-2" style="flex-wrap:wrap;">
                  ${job.benefits.map(b => `<span class="badge badge-green">${b}</span>`).join('')}
                </div>
              </div>

              <hr class="divider" />

              <div class="flex gap-4 justify-end" style="flex-wrap:wrap;">
                <button class="btn btn-outline btn-lg">${icons.share} Compartilhar</button>
                <a href="/candidatura/${job.id}" class="btn btn-primary btn-lg">${icons.arrowRight} Candidatar-se agora</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    ${renderFooter()}
  `;
  window.__pageInit = () => initHeaderEvents();
  return html;
}
