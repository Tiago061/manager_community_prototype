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
        <div class="grid grid-2" id="automations-grid" style="gap:var(--space-6);">
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
                    <input type="checkbox" class="toggle-status" data-id="${auto.id}" ${auto.status === 'active' ? 'checked' : ''} />
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
                <button class="btn btn-outline btn-sm edit-automation" data-id="${auto.id}">${icons.edit} Editar</button>
                <button class="btn btn-ghost btn-sm delete-automation" data-id="${auto.id}" style="color:var(--error);">${icons.trash} Excluir</button>
              </div>
            </div>
          `).join('')}
        </div>
      </main>
    </div>

    <!-- Modal Nova Automação -->
    <div class="modal-overlay" id="modal-nova-automacao" style="display: none;">
      <div class="modal modal-lg">
        <div class="modal-header">
          <h3 id="modal-title">Nova Automação</h3>
          <button class="btn btn-ghost btn-icon" id="modal-close" style="padding:0; border:none; background:none;">${icons.x}</button>
        </div>
        <form id="form-automacao">
          <input type="hidden" id="auto-id" value="" />
          <div class="modal-body">
            <div class="form-group mb-4" style="margin-bottom:var(--space-4);">
              <label class="form-label">Nome da Automação *</label>
              <input type="text" class="form-input" id="auto-title" placeholder="Ex: Lembrete de Reunião" required />
            </div>
            
            <div class="form-group mb-4" style="margin-bottom:var(--space-4);">
              <label class="form-label">Descrição *</label>
              <textarea class="form-textarea" id="auto-desc" rows="3" placeholder="Descreva brevemente o que essa automação faz." required></textarea>
            </div>

            <div class="grid grid-2" style="gap:var(--space-4); margin-bottom:var(--space-4);">
              <div class="form-group">
                <label class="form-label">Gatilho (Trigger) *</label>
                <select class="form-select" id="auto-trigger" required>
                  <option value="">Selecione um gatilho...</option>
                  <option value="birthday">🎂 Aniversário do Cidadão</option>
                  <option value="job">💼 Nova Vaga Cadastrada</option>
                  <option value="news">📰 Nova Notícia Publicada</option>
                  <option value="demand">📋 Atualização de Demanda</option>
                  <option value="custom">⚡ Cadastro de Novo Cidadão</option>
                </select>
              </div>
              
              <div class="form-group">
                <label class="form-label">Canais de Envio *</label>
                <div class="flex flex-col gap-2" style="margin-top:var(--space-2); display:flex; flex-direction:column; gap:8px;">
                  <label class="checkbox-label" style="display:flex; align-items:center; gap:8px; cursor:pointer;">
                    <input type="checkbox" id="channel-wa" checked />
                    <span>WhatsApp</span>
                  </label>
                  <label class="checkbox-label" style="display:flex; align-items:center; gap:8px; cursor:pointer;">
                    <input type="checkbox" id="channel-email" />
                    <span>E-mail</span>
                  </label>
                  <label class="checkbox-label" style="display:flex; align-items:center; gap:8px; cursor:pointer;">
                    <input type="checkbox" id="channel-sms" />
                    <span>SMS</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline" id="modal-cancel">Cancelar</button>
            <button type="submit" class="btn btn-primary" id="btn-save-automacao">${icons.check} Salvar Automação</button>
          </div>
        </form>
      </div>
    </div>
  `;
  window.__pageInit = () => initAutomationsEvents();
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

export function initAutomationsEvents() {
  initHeaderEvents();
  
  const mainApp = document.getElementById('app');
  if (!mainApp) return;

  const btnNovaAutomacao = mainApp.querySelector('.admin-page-actions .btn-primary');
  const modalOverlay = mainApp.querySelector('#modal-nova-automacao');
  const modalClose = mainApp.querySelector('#modal-close');
  const modalCancel = mainApp.querySelector('#modal-cancel');
  const formAutomacao = mainApp.querySelector('#form-automacao');
  const modalTitle = mainApp.querySelector('#modal-title');

  if (btnNovaAutomacao && modalOverlay) {
    btnNovaAutomacao.addEventListener('click', () => {
      if (modalTitle) modalTitle.textContent = 'Nova Automação';
      if (formAutomacao) formAutomacao.reset();
      const idInput = formAutomacao.querySelector('#auto-id');
      if (idInput) idInput.value = '';
      modalOverlay.style.display = 'flex';
    });
  }

  const closeModal = () => {
    if (modalOverlay) modalOverlay.style.display = 'none';
  };

  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modalCancel) modalCancel.addEventListener('click', closeModal);
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }

  if (formAutomacao) {
    formAutomacao.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const idVal = formAutomacao.querySelector('#auto-id').value;
      const title = formAutomacao.querySelector('#auto-title').value.trim();
      const description = formAutomacao.querySelector('#auto-desc').value.trim();
      
      const channels = [];
      if (formAutomacao.querySelector('#channel-wa').checked) channels.push('WhatsApp');
      if (formAutomacao.querySelector('#channel-email').checked) channels.push('Email');
      if (formAutomacao.querySelector('#channel-sms').checked) channels.push('SMS');

      const trigger = formAutomacao.querySelector('#auto-trigger').value;
      let flow = [];
      if (trigger === 'birthday') {
        flow = ['🎂 Aniversário detectado', '🖼️ Gerar imagem'];
      } else if (trigger === 'job') {
        flow = ['💼 Nova vaga', '👥 Filtrar perfis'];
      } else if (trigger === 'news') {
        flow = ['📰 Nova notícia', '📋 Formatar'];
      } else if (trigger === 'demand') {
        flow = ['📋 Status alterado', '👤 Identificar cidadão'];
      } else {
        flow = ['⚡ Gatilho personalizado'];
      }

      if (!title || !description) {
        showToast('Por favor, preencha todos os campos obrigatórios.', 'error');
        return;
      }

      if (channels.length === 0) {
        showToast('Selecione pelo menos um canal de envio.', 'error');
        return;
      }

      channels.forEach(ch => {
        const flowLabel = ch === 'WhatsApp' ? '📱 WhatsApp' : (ch === 'Email' ? '📧 Email' : '💬 SMS');
        flow.push(flowLabel);
      });

      if (idVal) {
        // Modo Edição
        const id = parseInt(idVal);
        const auto = automationsData.find(a => a.id === id);
        if (auto) {
          auto.title = title;
          auto.description = description;
          auto.channels = channels;
          auto.flow = flow;
          showToast('Automação atualizada com sucesso!', 'success');
        }
      } else {
        // Modo Criação
        const newId = automationsData.length > 0 ? Math.max(...automationsData.map(a => a.id)) + 1 : 1;
        const newAutomation = {
          id: newId,
          title,
          description,
          status: 'active',
          channels,
          lastRun: 'Nunca executada',
          totalSent: 0,
          flow
        };
        automationsData.push(newAutomation);
        showToast('Automação criada com sucesso!', 'success');
      }

      closeModal();
      renderAutomationsList();
    });
  }

  initCardEvents();
}

export function initCardEvents() {
  const mainApp = document.getElementById('app');
  if (!mainApp) return;

  mainApp.querySelectorAll('.toggle-status').forEach(checkbox => {
    checkbox.addEventListener('change', (e) => {
      const id = parseInt(e.target.dataset.id);
      const auto = automationsData.find(a => a.id === id);
      if (auto) {
        auto.status = e.target.checked ? 'active' : 'paused';
        
        const card = document.getElementById(`auto-${id}`);
        if (card) {
          const badge = card.querySelector('.badge');
          if (badge) {
            badge.className = `badge ${auto.status === 'active' ? 'badge-green' : 'badge-gray'}`;
            badge.textContent = auto.status === 'active' ? '● Ativa' : '● Pausada';
          }
          const iconContainer = card.querySelector('.automation-card-icon');
          if (iconContainer) {
            iconContainer.style.background = auto.status === 'active' ? 'var(--green-bg)' : 'var(--gray-100)';
            iconContainer.style.color = auto.status === 'active' ? 'var(--green)' : 'var(--gray-400)';
          }
        }
        showToast(`Automação "${auto.title}" ${auto.status === 'active' ? 'ativada' : 'pausada'}.`, 'info');
      }
    });
  });

  mainApp.querySelectorAll('.delete-automation').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const btnEl = e.currentTarget;
      const id = parseInt(btnEl.dataset.id);
      const autoIndex = automationsData.findIndex(a => a.id === id);
      if (autoIndex > -1) {
        const auto = automationsData[autoIndex];
        if (confirm(`Tem certeza que deseja excluir a automação "${auto.title}"?`)) {
          automationsData.splice(autoIndex, 1);
          renderAutomationsList();
          showToast('Automação excluída com sucesso.', 'success');
        }
      }
    });
  });

  mainApp.querySelectorAll('.edit-automation').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const btnEl = e.currentTarget;
      const id = parseInt(btnEl.dataset.id);
      const auto = automationsData.find(a => a.id === id);
      if (auto) {
        const modalOverlay = document.getElementById('modal-nova-automacao');
        const modalTitle = document.getElementById('modal-title');
        const form = document.getElementById('form-automacao');
        
        if (modalOverlay && form) {
          modalTitle.textContent = 'Editar Automação';
          form.querySelector('#auto-id').value = auto.id;
          form.querySelector('#auto-title').value = auto.title;
          form.querySelector('#auto-desc').value = auto.description;
          
          let triggerVal = 'custom';
          const triggerNode = auto.flow[0] || '';
          if (triggerNode.includes('Aniversário')) triggerVal = 'birthday';
          else if (triggerNode.includes('vaga')) triggerVal = 'job';
          else if (triggerNode.includes('notícia')) triggerVal = 'news';
          else if (triggerNode.includes('Status')) triggerVal = 'demand';
          
          form.querySelector('#auto-trigger').value = triggerVal;
          form.querySelector('#channel-wa').checked = auto.channels.includes('WhatsApp');
          form.querySelector('#channel-email').checked = auto.channels.includes('Email');
          form.querySelector('#channel-sms').checked = auto.channels.includes('SMS');
          
          modalOverlay.style.display = 'flex';
        }
      }
    });
  });
}

export function renderAutomationsList() {
  const grid = document.getElementById('automations-grid');
  if (!grid) return;

  grid.innerHTML = automationsData.map(auto => `
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
            <input type="checkbox" class="toggle-status" data-id="${auto.id}" ${auto.status === 'active' ? 'checked' : ''} />
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
        <button class="btn btn-outline btn-sm edit-automation" data-id="${auto.id}">${icons.edit} Editar</button>
        <button class="btn btn-ghost btn-sm delete-automation" data-id="${auto.id}" style="color:var(--error);">${icons.trash} Excluir</button>
      </div>
    </div>
  `).join('');

  initCardEvents();
}

export function showToast(message, type = 'success') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  
  let icon = icons.check;
  if (type === 'error') {
    icon = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>`;
  } else if (type === 'info') {
    icon = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="16" y2="12"/><line x1="12" x2="12.01" y1="8" y2="8"/></svg>`;
  }
  
  toast.innerHTML = `
    ${icon}
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100px)';
    toast.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}
