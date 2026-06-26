import { renderHeader, initHeaderEvents } from '../../components/header.js';
import { renderAdminSidebar } from '../../components/sidebar.js';
import { icons } from '../../components/icons.js';
import { crmData, automationsData } from '../../data/admin-stats.js';

export function renderCRM() {
  const html = `
    ${renderHeader('admin')}
    <div class="admin-layout">
      ${renderAdminSidebar('crm')}
      <main class="admin-main" id="admin-main">
        <div class="admin-page-header">
          <div><h1 class="admin-page-title">CRM dos Cidadãos</h1><p class="admin-page-subtitle">${crmData.length} cidadãos cadastrados</p></div>
          <div class="admin-page-actions">
            <button class="btn btn-outline">${icons.download} Exportar</button>
            <button class="btn btn-outline">${icons.filter} Filtros Inteligentes</button>
            <button class="btn btn-primary">${icons.plus} Novo Cidadão</button>
          </div>
        </div>
        <div class="admin-table-header">
          <div class="admin-table-filters">
            <div class="search-bar" style="max-width:300px;">${icons.search}<input type="text" placeholder="Pesquisar cidadãos..." /></div>
            <select class="form-select" style="width:auto;"><option>Cidade</option><option>Cidade Exemplo</option></select>
            <select class="form-select" style="width:auto;"><option>Interesse</option><option>Saúde</option><option>Educação</option><option>Emprego</option></select>
            <select class="form-select" style="width:auto;"><option>Aniversário</option><option>Este mês</option><option>Próxima semana</option></select>
          </div>
        </div>
        <div class="admin-table-card">
          <div class="table-container">
            <table class="table">
              <thead><tr><th><input type="checkbox" /></th><th>Nome</th><th>Telefone</th><th>WhatsApp</th><th>Cidade</th><th>Nascimento</th><th>Interesses</th><th>Ações</th></tr></thead>
              <tbody>
                ${crmData.map(person => `
                  <tr>
                    <td><input type="checkbox" /></td>
                    <td><div class="flex items-center gap-2"><div class="avatar avatar-sm avatar-placeholder">${person.initials}</div><strong>${person.name}</strong></div></td>
                    <td style="white-space:nowrap;">${person.phone}</td>
                    <td style="white-space:nowrap;">${person.whatsapp}</td>
                    <td>${person.city}</td>
                    <td>${person.birthdate}</td>
                    <td><div class="flex gap-1">${person.interests.map(i => `<span class="badge badge-blue">${i}</span>`).join('')}</div></td>
                    <td><div class="flex gap-1"><button class="btn btn-ghost btn-icon">${icons.eye}</button><button class="btn btn-ghost btn-icon">${icons.edit}</button><button class="btn btn-ghost btn-icon">${icons.history}</button></div></td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  `;
  window.__pageInit = () => initHeaderEvents();
  return html;
}

export function renderAutomations() {
  const html = `
    ${renderHeader('admin')}
    <div class="admin-layout">
      ${renderAdminSidebar('automations')}
      <main class="admin-main" id="admin-main">
        <div class="admin-page-header">
          <div><h1 class="admin-page-title">Central de Automações</h1><p class="admin-page-subtitle">Configure envios automáticos</p></div>
          <div class="admin-page-actions">
            <button class="btn btn-primary">${icons.plus} Nova Automação</button>
          </div>
        </div>
        <div class="grid grid-2" style="gap:var(--space-6);">
          ${automationsData.map(auto => `
            <div class="automation-card" id="auto-${auto.id}">
              <div class="automation-card-header">
                <div class="flex items-center gap-3">
                  <div class="automation-card-icon" style="background:${auto.status === 'active' ? 'var(--green-bg)' : 'var(--gray-100)'};color:${auto.status === 'active' ? 'var(--green)' : 'var(--gray-400)'};">
                    ${icons.zap}
                  </div>
                  <div>
                    <h3 class="automation-card-title">${auto.title}</h3>
                  </div>
                </div>
                <div class="flex items-center gap-2">
                  <span class="badge ${auto.status === 'active' ? 'badge-green' : 'badge-gray'}">${auto.status === 'active' ? '● Ativa' : '● Pausada'}</span>
                  <label class="switch">
                    <input type="checkbox" ${auto.status === 'active' ? 'checked' : ''} />
                    <span class="switch-slider"></span>
                  </label>
                </div>
              </div>
              <p class="automation-card-description">${auto.description}</p>
              
              <!-- Flow visualization -->
              <div class="automation-card-flow">
                ${auto.flow.map((node, i) => `
                  <div class="automation-flow-node">${node}</div>
                  ${i < auto.flow.length - 1 ? '<span class="automation-flow-arrow">→</span>' : ''}
                `).join('')}
              </div>
              
              <div class="automation-card-meta">
                <span class="automation-card-meta-item">${icons.send} ${auto.totalSent} enviadas</span>
                <span class="automation-card-meta-item">${icons.clock} ${auto.lastRun}</span>
              </div>
              <div class="flex gap-2 mt-4" style="margin-top:var(--space-4);">
                <button class="btn btn-outline btn-sm">${icons.edit} Editar</button>
                <button class="btn btn-ghost btn-sm">${icons.history} Histórico</button>
              </div>
            </div>
          `).join('')}
        </div>
      </main>
    </div>
  `;
  window.__pageInit = () => initHeaderEvents();
  return html;
}

export function renderSettings() {
  const html = `
    ${renderHeader('admin')}
    <div class="admin-layout">
      ${renderAdminSidebar('settings')}
      <main class="admin-main" id="admin-main">
        <div class="admin-page-header">
          <div><h1 class="admin-page-title">Configurações</h1><p class="admin-page-subtitle">Gerencie as configurações da plataforma</p></div>
          <div class="admin-page-actions"><button class="btn btn-primary">${icons.check} Salvar Alterações</button></div>
        </div>
        <div class="settings-grid">
          <nav class="settings-nav">
            ${[
              { icon: icons.userCircle, label: 'Perfil', active: true },
              { icon: icons.image, label: 'Imagens' },
              { icon: icons.palette, label: 'Aparência' },
              { icon: icons.globe, label: 'Redes Sociais' },
              { icon: icons.phone, label: 'Contato' },
              { icon: icons.fileText, label: 'SEO' },
              { icon: icons.barChart, label: 'Analytics' },
              { icon: icons.lock, label: 'LGPD' },
              { icon: icons.globe, label: 'Domínio' },
            ].map(item => `
              <div class="settings-nav-item ${item.active ? 'active' : ''}">${item.icon} ${item.label}</div>
            `).join('')}
          </nav>
          <div>
            <!-- Profile -->
            <div class="settings-section">
              <h2 class="settings-section-title">Perfil do Vereador</h2>
              <p class="settings-section-subtitle">Informações básicas exibidas na plataforma</p>
              <div class="settings-row">
                <div class="settings-row-label"><div class="settings-row-label-title">Logo</div><div class="settings-row-label-desc">Logo oficial exibida no header</div></div>
                <div class="settings-row-content">
                  <div class="upload-area" style="padding:var(--space-6);">${icons.upload}<p class="upload-area-text"><span>Enviar logo</span></p></div>
                </div>
              </div>
              <div class="settings-row">
                <div class="settings-row-label"><div class="settings-row-label-title">Foto Oficial</div><div class="settings-row-label-desc">Foto exibida na hero e sobre</div></div>
                <div class="settings-row-content">
                  <div class="upload-area" style="padding:var(--space-6);">${icons.upload}<p class="upload-area-text"><span>Enviar foto</span></p></div>
                </div>
              </div>
              <div class="settings-row">
                <div class="settings-row-label"><div class="settings-row-label-title">Banner</div><div class="settings-row-label-desc">Banner principal da landing page</div></div>
                <div class="settings-row-content">
                  <div class="upload-area" style="padding:var(--space-6);">${icons.upload}<p class="upload-area-text"><span>Enviar banner</span></p></div>
                </div>
              </div>
              <div class="settings-row">
                <div class="settings-row-label"><div class="settings-row-label-title">Biografia</div><div class="settings-row-label-desc">Texto sobre o vereador</div></div>
                <div class="settings-row-content"><textarea class="form-textarea" rows="4" placeholder="Biografia do vereador..."></textarea></div>
              </div>
            </div>

            <!-- Appearance -->
            <div class="settings-section">
              <h2 class="settings-section-title">Aparência</h2>
              <p class="settings-section-subtitle">Personalize as cores da plataforma</p>
              <div class="settings-row">
                <div class="settings-row-label"><div class="settings-row-label-title">Cor Principal</div></div>
                <div class="settings-row-content"><div class="flex items-center gap-3"><input type="color" value="#F77E2D" style="width:48px;height:36px;border:none;cursor:pointer;" /><input type="text" class="form-input" value="#F77E2D" style="width:120px;" /></div></div>
              </div>
              <div class="settings-row">
                <div class="settings-row-label"><div class="settings-row-label-title">Cor Secundária</div></div>
                <div class="settings-row-content"><div class="flex items-center gap-3"><input type="color" value="#01A856" style="width:48px;height:36px;border:none;cursor:pointer;" /><input type="text" class="form-input" value="#01A856" style="width:120px;" /></div></div>
              </div>
              <div class="settings-row">
                <div class="settings-row-label"><div class="settings-row-label-title">Cor Institucional</div></div>
                <div class="settings-row-content"><div class="flex items-center gap-3"><input type="color" value="#06327B" style="width:48px;height:36px;border:none;cursor:pointer;" /><input type="text" class="form-input" value="#06327B" style="width:120px;" /></div></div>
              </div>
            </div>

            <!-- Social -->
            <div class="settings-section">
              <h2 class="settings-section-title">Redes Sociais</h2>
              <p class="settings-section-subtitle">Links das redes sociais</p>
              <div class="settings-row"><div class="settings-row-label"><div class="settings-row-label-title">Instagram</div></div><div class="settings-row-content"><input type="url" class="form-input" placeholder="https://instagram.com/..." /></div></div>
              <div class="settings-row"><div class="settings-row-label"><div class="settings-row-label-title">Facebook</div></div><div class="settings-row-content"><input type="url" class="form-input" placeholder="https://facebook.com/..." /></div></div>
              <div class="settings-row"><div class="settings-row-label"><div class="settings-row-label-title">YouTube</div></div><div class="settings-row-content"><input type="url" class="form-input" placeholder="https://youtube.com/..." /></div></div>
              <div class="settings-row"><div class="settings-row-label"><div class="settings-row-label-title">Twitter/X</div></div><div class="settings-row-content"><input type="url" class="form-input" placeholder="https://twitter.com/..." /></div></div>
            </div>

            <!-- SEO & Analytics -->
            <div class="settings-section">
              <h2 class="settings-section-title">SEO & Analytics</h2>
              <p class="settings-section-subtitle">Configurações de SEO e rastreamento</p>
              <div class="settings-row"><div class="settings-row-label"><div class="settings-row-label-title">Meta Title</div></div><div class="settings-row-content"><input type="text" class="form-input" value="Vereador Neném da Civil" /></div></div>
              <div class="settings-row"><div class="settings-row-label"><div class="settings-row-label-title">Meta Description</div></div><div class="settings-row-content"><textarea class="form-textarea" rows="2">Plataforma oficial do Vereador Neném da Civil</textarea></div></div>
              <div class="settings-row"><div class="settings-row-label"><div class="settings-row-label-title">Google Analytics</div><div class="settings-row-label-desc">ID de rastreamento</div></div><div class="settings-row-content"><input type="text" class="form-input" placeholder="G-XXXXXXXXXX" /></div></div>
              <div class="settings-row"><div class="settings-row-label"><div class="settings-row-label-title">Pixel Meta</div><div class="settings-row-label-desc">ID do pixel</div></div><div class="settings-row-content"><input type="text" class="form-input" placeholder="000000000000000" /></div></div>
            </div>

            <!-- LGPD -->
            <div class="settings-section">
              <h2 class="settings-section-title">LGPD</h2>
              <p class="settings-section-subtitle">Conformidade com a Lei Geral de Proteção de Dados</p>
              <div class="settings-row">
                <div class="settings-row-label"><div class="settings-row-label-title">Banner de Cookies</div><div class="settings-row-label-desc">Exibir aviso de cookies</div></div>
                <div class="settings-row-content"><label class="switch"><input type="checkbox" checked /><span class="switch-slider"></span></label></div>
              </div>
              <div class="settings-row">
                <div class="settings-row-label"><div class="settings-row-label-title">Política de Privacidade</div></div>
                <div class="settings-row-content"><textarea class="form-textarea" rows="3" placeholder="Texto da política de privacidade..."></textarea></div>
              </div>
            </div>

            <!-- Domain -->
            <div class="settings-section">
              <h2 class="settings-section-title">Domínio</h2>
              <p class="settings-section-subtitle">Configuração do domínio personalizado</p>
              <div class="settings-row">
                <div class="settings-row-label"><div class="settings-row-label-title">Domínio</div></div>
                <div class="settings-row-content"><input type="text" class="form-input" placeholder="www.nenemdacivil.com.br" /></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  `;
  window.__pageInit = () => initHeaderEvents();
  return html;
}
