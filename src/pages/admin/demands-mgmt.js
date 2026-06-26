import { renderHeader, initHeaderEvents } from '../../components/header.js';
import { renderAdminSidebar } from '../../components/sidebar.js';
import { icons } from '../../components/icons.js';
import { demandsData } from '../../data/demands.js';

export function renderDemandsMgmt() {
  const columns = [
    { title: 'Recebida', status: 'received', color: 'var(--status-received)' },
    { title: 'Em andamento', status: 'in-progress', color: 'var(--status-progress)' },
    { title: 'Resolvida', status: 'resolved', color: 'var(--status-resolved)' },
    { title: 'Arquivada', status: 'archived', color: 'var(--status-archived)' },
  ];

  const html = `
    ${renderHeader('admin')}
    <div class="admin-layout">
      ${renderAdminSidebar('demands')}
      <main class="admin-main" id="admin-main">
        <div class="admin-page-header">
          <div><h1 class="admin-page-title">Gestão de Demandas</h1><p class="admin-page-subtitle">Kanban — Arraste para atualizar o status</p></div>
          <div class="admin-page-actions">
            <button class="btn btn-outline">${icons.download} Exportar</button>
            <a href="/admin/demandas/nova" class="btn btn-primary">${icons.plus} Nova Demanda</a>
          </div>
        </div>
        <div class="kanban-board">
          ${columns.map(col => {
            const items = col.status === 'archived' ? [] : demandsData.filter(d => d.status === col.status);
            return `
              <div class="kanban-column">
                <div class="kanban-column-header">
                  <span class="kanban-column-title">
                    <span style="width:8px;height:8px;border-radius:50%;background:${col.color};display:inline-block;"></span>
                    ${col.title}
                  </span>
                  <span class="kanban-column-count">${items.length}</span>
                </div>
                ${items.map(d => `
                  <div class="kanban-card" id="admin-demand-${d.id}">
                    <div class="flex items-center justify-between mb-2">
                      <span class="badge badge-blue" style="font-size:10px;">${d.category}</span>
                      <button class="btn btn-ghost btn-icon" style="padding:2px;">${icons.moreVertical}</button>
                    </div>
                    <p style="font-size:var(--font-sm);color:var(--gray-700);line-height:var(--lh-relaxed);margin-bottom:var(--space-2);">${d.description}</p>
                    <div class="flex items-center justify-between">
                      <span style="font-size:10px;color:var(--gray-400);display:flex;align-items:center;gap:4px;">${icons.mapPin} ${d.neighborhood}</span>
                      <span style="font-size:10px;color:var(--gray-400);">${d.date}</span>
                    </div>
                    <div class="flex items-center gap-2 mt-2">
                      <div class="avatar avatar-sm avatar-placeholder" style="width:24px;height:24px;font-size:10px;">NC</div>
                      <span style="font-size:10px;color:var(--gray-500);">Responsável</span>
                    </div>
                  </div>
                `).join('')}
                ${items.length === 0 ? '<div class="empty-state" style="padding:var(--space-8);"><p class="text-sm text-muted">Nenhuma demanda</p></div>' : ''}
              </div>
            `;
          }).join('')}
        </div>
      </main>
    </div>
  `;
  window.__pageInit = () => initHeaderEvents();
  return html;
}

export function renderCommentsMgmt() {
  const comments = [
    { name: 'Maria da Silva', initials: 'MS', text: 'Que notícia maravilhosa! Parabéns pelo trabalho.', date: 'Há 2 horas', news: 'Inauguração da nova praça', status: 'pending' },
    { name: 'José Santos', initials: 'JS', text: 'Muito bom ver ações como essa na nossa cidade.', date: 'Há 5 horas', news: 'Programa de capacitação', status: 'approved' },
    { name: 'Ana Oliveira', initials: 'AO', text: 'Precisamos de mais iniciativas como essa.', date: 'Há 1 dia', news: 'Mutirão de saúde', status: 'approved' },
    { name: 'Carlos Mendes', initials: 'CM', text: 'Discordo dessa abordagem, acho que deveriam priorizar outras áreas.', date: 'Há 2 dias', news: 'Projeto de lei', status: 'pending' },
    { name: 'Fernanda Costa', initials: 'FC', text: 'Excelente trabalho! Continuem assim!', date: 'Há 3 dias', news: 'Campanha de alimentos', status: 'approved' },
  ];

  const html = `
    ${renderHeader('admin')}
    <div class="admin-layout">
      ${renderAdminSidebar('comments')}
      <main class="admin-main" id="admin-main">
        <div class="admin-page-header">
          <div><h1 class="admin-page-title">Gestão de Comentários</h1><p class="admin-page-subtitle">${comments.length} comentários</p></div>
        </div>
        <div class="admin-table-header">
          <div class="admin-table-filters">
            <div class="search-bar" style="max-width:300px;">${icons.search}<input type="text" placeholder="Pesquisar comentários..." /></div>
            <select class="form-select" style="width:auto;"><option>Todos</option><option>Pendentes</option><option>Aprovados</option></select>
          </div>
        </div>
        <div class="flex flex-col gap-3">
          ${comments.map(c => `
            <div class="card" style="padding:var(--space-5);">
              <div class="flex items-start gap-3">
                <div class="avatar avatar-placeholder">${c.initials}</div>
                <div style="flex:1;">
                  <div class="flex items-center justify-between">
                    <div>
                      <strong class="text-sm">${c.name}</strong>
                      <span class="text-xs text-muted" style="margin-left:8px;">${c.date}</span>
                    </div>
                    <span class="badge ${c.status === 'approved' ? 'badge-green' : 'badge-warning'}">${c.status === 'approved' ? 'Aprovado' : 'Pendente'}</span>
                  </div>
                  <p style="font-size:var(--font-sm);color:var(--gray-600);margin:var(--space-2) 0;line-height:var(--lh-relaxed);">${c.text}</p>
                  <div class="flex items-center justify-between">
                    <span class="text-xs text-muted">Em: ${c.news}</span>
                    <div class="flex gap-1">
                      ${c.status === 'pending' ? `<button class="btn btn-ghost btn-sm" style="color:var(--green);">${icons.check} Aprovar</button>` : ''}
                      <button class="btn btn-ghost btn-sm">${icons.reply} Responder</button>
                      <button class="btn btn-ghost btn-sm" style="color:var(--error);">${icons.trash} Excluir</button>
                      <button class="btn btn-ghost btn-sm">${icons.flag} Denunciar</button>
                    </div>
                  </div>
                </div>
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

export function renderOmbudsmanMgmt() {
  const protocols = [
    { protocol: 'OUV-2026-0042', category: 'Reclamação', subject: 'Demora no atendimento da UBS', status: 'Respondida', date: '20 Jun', citizen: 'Maria S.', initials: 'MS' },
    { protocol: 'OUV-2026-0041', category: 'Sugestão', subject: 'Semáforo na Rua das Acácias', status: 'Em análise', date: '18 Jun', citizen: 'José S.', initials: 'JS' },
    { protocol: 'OUV-2026-0040', category: 'Elogio', subject: 'Ótimo atendimento na ação social', status: 'Respondida', date: '15 Jun', citizen: 'Ana O.', initials: 'AO' },
    { protocol: 'OUV-2026-0039', category: 'Solicitação', subject: 'Poda de árvore na Av. Central', status: 'Encaminhada', date: '14 Jun', citizen: 'Carlos M.', initials: 'CM' },
    { protocol: 'OUV-2026-0038', category: 'Denúncia', subject: 'Descarte irregular de lixo', status: 'Em análise', date: '12 Jun', citizen: 'Anônimo', initials: 'AN' },
  ];

  const html = `
    ${renderHeader('admin')}
    <div class="admin-layout">
      ${renderAdminSidebar('ombudsman')}
      <main class="admin-main" id="admin-main">
        <div class="admin-page-header">
          <div><h1 class="admin-page-title">Gestão da Ouvidoria</h1><p class="admin-page-subtitle">${protocols.length} protocolos</p></div>
        </div>
        <div class="admin-table-header">
          <div class="admin-table-filters">
            <div class="search-bar" style="max-width:300px;">${icons.search}<input type="text" placeholder="Pesquisar protocolo..." /></div>
            <select class="form-select" style="width:auto;"><option>Categoria</option><option>Reclamação</option><option>Sugestão</option><option>Elogio</option></select>
            <select class="form-select" style="width:auto;"><option>Status</option><option>Em análise</option><option>Respondida</option><option>Encaminhada</option></select>
          </div>
        </div>
        <div class="admin-table-card">
          <div class="table-container">
            <table class="table">
              <thead><tr><th>Protocolo</th><th>Cidadão</th><th>Categoria</th><th>Assunto</th><th>Data</th><th>Status</th><th>Ações</th></tr></thead>
              <tbody>
                ${protocols.map(p => `
                  <tr>
                    <td><strong style="color:var(--blue);">${p.protocol}</strong></td>
                    <td><div class="flex items-center gap-2"><div class="avatar avatar-sm avatar-placeholder">${p.initials}</div>${p.citizen}</div></td>
                    <td><span class="badge badge-${p.category === 'Reclamação' ? 'error' : p.category === 'Elogio' ? 'green' : p.category === 'Denúncia' ? 'brand' : 'blue'}">${p.category}</span></td>
                    <td>${p.subject}</td>
                    <td>${p.date}</td>
                    <td><span class="badge badge-${p.status === 'Respondida' ? 'green' : p.status === 'Em análise' ? 'warning' : 'blue'}">${p.status}</span></td>
                    <td><div class="flex gap-1"><button class="btn btn-ghost btn-icon">${icons.eye}</button><button class="btn btn-ghost btn-icon">${icons.reply}</button></div></td>
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

export function renderDemandForm() {
  const html = `
    ${renderHeader('admin')}
    <div class="admin-layout">
      ${renderAdminSidebar('demands')}
      <main class="admin-main" id="admin-main">
        <div class="admin-page-header">
          <div>
            <div class="flex items-center gap-2 mb-2">
              <a href="/admin/demandas" class="text-muted" style="text-decoration:none;font-size:var(--font-sm);">&larr; Voltar para gestão de demandas</a>
            </div>
            <h1 class="admin-page-title">Registrar Nova Demanda</h1>
          </div>
          <div class="admin-page-actions">
            <button class="btn btn-primary">${icons.check} Salvar Demanda</button>
          </div>
        </div>

        <div class="card" style="padding:var(--space-6);">
          
          <h2 style="font-size:var(--font-lg); font-weight:var(--fw-bold); margin-bottom:var(--space-4);">Dados do Solicitante</h2>
          <div class="grid grid-2" style="gap:var(--space-4); margin-bottom:var(--space-6);">
            <div class="form-group">
              <label class="form-label">Nome Completo</label>
              <input type="text" class="form-input" placeholder="Ex: João da Silva" />
            </div>
            <div class="form-group">
              <label class="form-label">Telefone / WhatsApp</label>
              <input type="text" class="form-input" placeholder="(00) 00000-0000" />
            </div>
          </div>
          
          <hr style="border:none; border-top:1px solid var(--gray-200); margin-bottom:var(--space-6);" />
          <h2 style="font-size:var(--font-lg); font-weight:var(--fw-bold); margin-bottom:var(--space-4);">Detalhes da Demanda</h2>

          <div class="grid grid-3" style="gap:var(--space-4); margin-bottom:var(--space-4);">
            <div class="form-group">
              <label class="form-label">Categoria</label>
              <select class="form-select">
                <option value="">Selecione...</option>
                <option>Infraestrutura</option>
                <option>Saúde</option>
                <option>Educação</option>
                <option>Segurança</option>
                <option>Outros</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">Bairro / Região</label>
              <input type="text" class="form-input" placeholder="Ex: Centro" />
            </div>
            <div class="form-group">
              <label class="form-label">Status Inicial</label>
              <select class="form-select">
                <option>Recebida</option>
                <option>Em andamento</option>
                <option>Resolvida</option>
              </select>
            </div>
          </div>

          <div class="form-group" style="margin-bottom:var(--space-4);">
            <label class="form-label">Endereço Completo (Opcional)</label>
            <input type="text" class="form-input" placeholder="Rua, Número, Referência..." />
          </div>

          <div class="form-group" style="margin-bottom:var(--space-6);">
            <label class="form-label">Descrição do Problema / Solicitação</label>
            <textarea class="form-textarea" rows="5" placeholder="Descreva com detalhes o que o cidadão está solicitando..."></textarea>
          </div>
          
          <div class="form-group">
            <label class="form-label">Anexar Imagens / Documentos</label>
            <div class="upload-area" style="padding:var(--space-6);">
              ${icons.upload}
              <p class="upload-area-text">Clique para enviar ou arraste os arquivos aqui</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  `;
  window.__pageInit = () => initHeaderEvents();
  return html;
}
