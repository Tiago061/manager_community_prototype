import { renderHeader, initHeaderEvents } from '../components/header.js';
import { renderFooter } from '../components/footer.js';
import { icons } from '../components/icons.js';
import { demandsData, demandCategories } from '../data/demands.js';

export function renderDemands() {
  const received = demandsData.filter(d => d.status === 'received');
  const inProgress = demandsData.filter(d => d.status === 'in-progress');
  const resolved = demandsData.filter(d => d.status === 'resolved');

  const html = `
    ${renderHeader('demandas')}
    <main class="main-content">
      <section class="page-header">
        <div class="page-header-inner">
          <div class="breadcrumb">
            <a href="/">Início</a>
            <span class="breadcrumb-separator">${icons.chevronRight}</span>
            <span>Demandas</span>
          </div>
          <h1 class="page-header-title">Demandas da Comunidade</h1>
          <p class="page-header-subtitle">Envie suas solicitações e acompanhe o andamento</p>
        </div>
      </section>

      <section class="section-sm">
        <div class="container">
          <!-- New Demand Form -->
          <div class="card mb-8" id="demand-form-card">
            <div class="card-body" style="padding:var(--space-8);">
              <h2 style="font-size:var(--font-xl);font-weight:var(--fw-bold);margin-bottom:var(--space-6);">
                ${icons.plus} Enviar Nova Demanda
              </h2>
              <div class="form-row mb-4">
                <div class="form-group"><label class="form-label">Nome completo <span class="required">*</span></label><input type="text" class="form-input" placeholder="Seu nome" /></div>
                <div class="form-group"><label class="form-label">Telefone <span class="required">*</span></label><input type="tel" class="form-input" placeholder="(00) 00000-0000" /></div>
              </div>
              <div class="form-row mb-4">
                <div class="form-group"><label class="form-label">Cidade</label><input type="text" class="form-input" placeholder="Sua cidade" /></div>
                <div class="form-group"><label class="form-label">Bairro <span class="required">*</span></label><input type="text" class="form-input" placeholder="Seu bairro" /></div>
              </div>
              <div class="form-group mb-4">
                <label class="form-label">Categoria <span class="required">*</span></label>
                <select class="form-select">
                  <option>Selecione a categoria</option>
                  ${demandCategories.map(cat => `<option>${cat}</option>`).join('')}
                </select>
              </div>
              <div class="form-group mb-4">
                <label class="form-label">Descrição da Demanda <span class="required">*</span></label>
                <textarea class="form-textarea" rows="4" placeholder="Descreva detalhadamente a sua solicitação..."></textarea>
              </div>
              <div class="form-group mb-4">
                <label class="form-label">Localização (referência)</label>
                <input type="text" class="form-input" placeholder="Rua, número ou ponto de referência" />
              </div>
              <div class="form-row mb-6">
                <div class="form-group">
                  <label class="form-label">Fotos (opcional)</label>
                  <div class="upload-area" style="padding:var(--space-6);">
                    ${icons.upload}
                    <p class="upload-area-text"><span>Enviar fotos</span></p>
                  </div>
                </div>
                <div class="form-group">
                  <label class="form-label">Vídeos (opcional)</label>
                  <div class="upload-area" style="padding:var(--space-6);">
                    ${icons.upload}
                    <p class="upload-area-text"><span>Enviar vídeos</span></p>
                  </div>
                </div>
              </div>
              <button class="btn btn-primary btn-lg">${icons.send} Enviar Demanda</button>
            </div>
          </div>

          <!-- Kanban Board -->
          <h2 style="font-size:var(--font-xl);font-weight:var(--fw-bold);margin-bottom:var(--space-6);">Últimas Demandas</h2>
          <div class="kanban-board">
            <!-- Recebida -->
            <div class="kanban-column">
              <div class="kanban-column-header">
                <span class="kanban-column-title">
                  <span style="width:8px;height:8px;border-radius:50%;background:var(--status-received);display:inline-block;"></span>
                  Recebida
                </span>
                <span class="kanban-column-count">${received.length}</span>
              </div>
              ${received.map(d => renderDemandKanbanCard(d)).join('')}
            </div>
            <!-- Em andamento -->
            <div class="kanban-column">
              <div class="kanban-column-header">
                <span class="kanban-column-title">
                  <span style="width:8px;height:8px;border-radius:50%;background:var(--status-progress);display:inline-block;"></span>
                  Em Andamento
                </span>
                <span class="kanban-column-count">${inProgress.length}</span>
              </div>
              ${inProgress.map(d => renderDemandKanbanCard(d)).join('')}
            </div>
            <!-- Resolvida -->
            <div class="kanban-column">
              <div class="kanban-column-header">
                <span class="kanban-column-title">
                  <span style="width:8px;height:8px;border-radius:50%;background:var(--status-resolved);display:inline-block;"></span>
                  Resolvida
                </span>
                <span class="kanban-column-count">${resolved.length}</span>
              </div>
              ${resolved.map(d => renderDemandKanbanCard(d)).join('')}
            </div>
          </div>

          <!-- Map placeholder -->
          <div style="margin-top:var(--space-10);">
            <h2 style="font-size:var(--font-xl);font-weight:var(--fw-bold);margin-bottom:var(--space-4);">Mapa de Demandas</h2>
            <div style="width:100%;height:300px;background:linear-gradient(135deg,var(--blue-bg),var(--gray-100));border-radius:var(--radius-xl);display:flex;align-items:center;justify-content:center;color:var(--gray-400);border:1px solid var(--gray-200);">
              ${icons.mapPin}
              <span style="margin-left:var(--space-2);font-weight:var(--fw-medium);">Mapa ilustrativo das demandas</span>
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

function renderDemandKanbanCard(d) {
  return `
    <div class="kanban-card" id="kanban-demand-${d.id}">
      <div class="flex items-center justify-between mb-2">
        <span class="badge badge-blue" style="font-size:10px;">${d.category}</span>
        <span style="font-size:10px;color:var(--gray-400);">${d.date}</span>
      </div>
      <p style="font-size:var(--font-sm);color:var(--gray-700);line-height:var(--lh-relaxed);margin-bottom:var(--space-2);">${d.description}</p>
      <div style="display:flex;align-items:center;gap:var(--space-1);font-size:var(--font-xs);color:var(--gray-400);">
        ${icons.mapPin} ${d.neighborhood}
      </div>
    </div>
  `;
}
