import { renderHeader, initHeaderEvents } from '../../components/header.js';
import { renderAdminSidebar } from '../../components/sidebar.js';
import { icons } from '../../components/icons.js';
import { adminStats, recentActivity } from '../../data/admin-stats.js';

export function renderDashboard() {
  const html = `
    ${renderHeader('admin')}
    <div class="admin-layout">
      ${renderAdminSidebar('dashboard')}
      <main class="admin-main" id="admin-main">
        <div class="admin-page-header">
          <div>
            <h1 class="admin-page-title">Dashboard</h1>
            <p class="admin-page-subtitle">Visão geral da plataforma</p>
          </div>
          <div class="admin-page-actions">
            <select class="form-select" style="width:auto;min-width:160px;">
              <option>Últimos 30 dias</option>
              <option>Últimos 7 dias</option>
              <option>Hoje</option>
            </select>
          </div>
        </div>

        <!-- Stats -->
        <div class="dashboard-stats stagger-children">
          ${[
            { icon: icons.users, color: 'brand', label: 'Visitantes', ...adminStats.visitors },
            { icon: icons.users, color: 'blue', label: 'Cidadãos', ...adminStats.users },
            { icon: icons.fileText, color: 'green', label: 'Currículos', ...adminStats.resumes },
            { icon: icons.clipboardList, color: 'warning', label: 'Demandas', ...adminStats.demands },
          ].map(stat => `
            <div class="dashboard-stat-card">
              <div class="dashboard-stat-icon ${stat.color}">${stat.icon}</div>
              <div class="dashboard-stat-info">
                <div class="dashboard-stat-value">${stat.value}</div>
                <div class="dashboard-stat-label">${stat.label}</div>
                <div class="dashboard-stat-trend ${stat.direction}">${stat.direction === 'up' ? icons.trendingUp : icons.trendingDown} ${stat.trend}</div>
              </div>
            </div>
          `).join('')}
        </div>

        <div class="dashboard-grid">
          <!-- Chart -->
          <div class="dashboard-card">
            <div class="dashboard-card-header">
              <h3 class="dashboard-card-title">Visitantes</h3>
              <div class="flex gap-2">
                <span class="tag active">Mensal</span>
                <span class="tag">Semanal</span>
              </div>
            </div>
            <div class="dashboard-card-body">
              <div class="chart-container" id="visitors-chart">
                <!-- Chart placeholder with bars -->
                <div style="display:flex;align-items:flex-end;justify-content:space-around;height:100%;padding:20px 0;">
                  ${[35, 48, 58, 70, 85, 100].map((h, i) => `
                    <div style="display:flex;flex-direction:column;align-items:center;gap:8px;flex:1;">
                      <span style="font-size:11px;font-weight:600;color:var(--gray-600);">${['Jan','Fev','Mar','Abr','Mai','Jun'][i]}</span>
                      <div style="width:60%;height:${h}%;background:linear-gradient(180deg,var(--brand) 0%,var(--brand-light) 100%);border-radius:8px 8px 0 0;min-height:20px;transition:all 0.3s;position:relative;" onmouseover="this.style.opacity='0.8'" onmouseout="this.style.opacity='1'"></div>
                    </div>
                  `).join('')}
                </div>
              </div>
            </div>
          </div>

          <!-- Activity -->
          <div class="dashboard-card">
            <div class="dashboard-card-header">
              <h3 class="dashboard-card-title">Atividade Recente</h3>
              <button class="btn btn-ghost btn-sm">Ver tudo</button>
            </div>
            <div class="dashboard-card-body">
              <div class="activity-feed">
                ${recentActivity.map(item => `
                  <div class="activity-item">
                    <div class="activity-icon ${item.type}">${icons.bell}</div>
                    <div>
                      <div class="activity-text">${item.text}</div>
                      <div class="activity-time">${item.time}</div>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        </div>

        <!-- Quick stats row -->
        <div class="grid grid-4 mt-6" style="margin-top:var(--space-6);">
          ${[
            { icon: icons.newspaper, color: 'blue', label: 'Notícias', ...adminStats.news },
            { icon: icons.briefcase, color: 'green', label: 'Vagas', ...adminStats.jobs },
            { icon: icons.messageCircle, color: 'brand', label: 'Comentários', ...adminStats.comments },
            { icon: icons.megaphone, color: 'blue', label: 'Ouvidoria', ...adminStats.ombudsman },
          ].map(stat => `
            <div class="dashboard-stat-card">
              <div class="dashboard-stat-icon ${stat.color}">${stat.icon}</div>
              <div class="dashboard-stat-info">
                <div class="dashboard-stat-value">${stat.value}</div>
                <div class="dashboard-stat-label">${stat.label}</div>
                <div class="dashboard-stat-trend ${stat.direction}">${stat.direction === 'up' ? icons.trendingUp : icons.trendingDown} ${stat.trend}</div>
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Demands by status -->
        <div class="dashboard-card" style="margin-top:var(--space-6);">
          <div class="dashboard-card-header">
            <h3 class="dashboard-card-title">Demandas por Status</h3>
          </div>
          <div class="dashboard-card-body">
            <div style="display:flex;gap:var(--space-8);align-items:center;justify-content:center;">
              ${[
                { label: 'Recebidas', value: 45, color: 'var(--status-received)' },
                { label: 'Em andamento', value: 32, color: 'var(--status-progress)' },
                { label: 'Resolvidas', value: 67, color: 'var(--status-resolved)' },
                { label: 'Arquivadas', value: 12, color: 'var(--status-archived)' },
              ].map(item => `
                <div style="text-align:center;">
                  <div style="width:80px;height:80px;border-radius:50%;border:6px solid ${item.color};display:flex;align-items:center;justify-content:center;margin:0 auto var(--space-2);">
                    <span style="font-size:var(--font-xl);font-weight:var(--fw-extrabold);">${item.value}</span>
                  </div>
                  <span style="font-size:var(--font-xs);color:var(--gray-500);font-weight:var(--fw-medium);">${item.label}</span>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </main>
    </div>
  `;
  window.__pageInit = () => initHeaderEvents();
  return html;
}
