import { renderHeader, initHeaderEvents } from '../../components/header.js';
import { renderAdminSidebar } from '../../components/sidebar.js';
import { icons } from '../../components/icons.js';
import { newsData } from '../../data/news.js';

export function renderNewsMgmt() {
  const html = `
    ${renderHeader('admin')}
    <div class="admin-layout">
      ${renderAdminSidebar('news')}
      <main class="admin-main" id="admin-main">
        <div class="admin-page-header">
          <div>
            <h1 class="admin-page-title">Gestão de Notícias</h1>
            <p class="admin-page-subtitle">${newsData.length} notícias publicadas</p>
          </div>
          <div class="admin-page-actions">
            <a href="/admin/noticias/nova" class="btn btn-primary">${icons.plus} Nova Notícia</a>
          </div>
        </div>

        <div class="admin-table-header">
          <div class="admin-table-filters">
            <div class="search-bar" style="max-width:300px;">
              ${icons.search}
              <input type="text" placeholder="Pesquisar notícias..." />
            </div>
            <select class="form-select" style="width:auto;"><option>Todas categorias</option><option>Obras</option><option>Educação</option><option>Saúde</option></select>
            <select class="form-select" style="width:auto;"><option>Status</option><option>Publicada</option><option>Rascunho</option><option>Agendada</option></select>
          </div>
        </div>

        <div class="admin-table-card">
          <div class="table-container">
            <table class="table">
              <thead>
                <tr>
                  <th><input type="checkbox" /></th>
                  <th>Título</th>
                  <th>Categoria</th>
                  <th>Data</th>
                  <th>Status</th>
                  <th>Interações</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                ${newsData.map(news => `
                  <tr>
                    <td><input type="checkbox" /></td>
                    <td>
                      <div style="display:flex;align-items:center;gap:var(--space-3);">
                        <div style="width:48px;height:36px;border-radius:var(--radius-md);background:var(--gray-100);display:flex;align-items:center;justify-content:center;flex-shrink:0;color:var(--gray-300);">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
                        </div>
                        <div style="max-width:280px;">
                          <div style="font-weight:var(--fw-semibold);color:var(--gray-800);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${news.title}</div>
                        </div>
                      </div>
                    </td>
                    <td><span class="badge badge-blue">${news.category}</span></td>
                    <td style="white-space:nowrap;">${news.date}</td>
                    <td><span class="badge badge-green">Publicada</span></td>
                    <td>
                      <div style="display:flex;gap:var(--space-3);">
                        <span class="text-xs text-muted">${icons.heart} ${news.likes}</span>
                        <span class="text-xs text-muted">${icons.messageCircle} ${news.comments}</span>
                      </div>
                    </td>
                    <td>
                      <div style="display:flex;gap:var(--space-1);">
                        <button class="btn btn-ghost btn-icon" title="Editar">${icons.edit}</button>
                        <button class="btn btn-ghost btn-icon" title="Visualizar">${icons.eye}</button>
                        <button class="btn btn-ghost btn-icon" title="Excluir" style="color:var(--error);">${icons.trash}</button>
                      </div>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>

        <div class="flex items-center justify-between mt-4">
          <span class="text-sm text-muted">Mostrando ${newsData.length} de ${newsData.length} resultados</span>
          <div class="pagination" style="margin-top:0;">
            <button class="pagination-btn">${icons.arrowLeft}</button>
            <button class="pagination-btn active">1</button>
            <button class="pagination-btn">${icons.arrowRight}</button>
          </div>
        </div>
      </main>
    </div>
  `;
  window.__pageInit = () => initHeaderEvents();
  return html;
}

export function renderNewsForm() {
  const html = `
    ${renderHeader('admin')}
    <div class="admin-layout">
      ${renderAdminSidebar('news')}
      <main class="admin-main" id="admin-main">
        <div class="admin-page-header">
          <div>
            <div class="flex items-center gap-2 mb-2">
              <a href="/admin/noticias" class="text-muted" style="text-decoration:none;font-size:var(--font-sm);">&larr; Voltar para gestão de notícias</a>
            </div>
            <h1 class="admin-page-title">Criar Nova Notícia</h1>
          </div>
          <div class="admin-page-actions">
            <button class="btn btn-outline">Salvar Rascunho</button>
            <button class="btn btn-primary">${icons.check} Publicar Notícia</button>
          </div>
        </div>

        <div class="card" style="padding:var(--space-6);">
          <div class="form-row">
            <div class="form-group">
              <label class="form-label">Título da Notícia</label>
              <input type="text" class="form-input" placeholder="Ex: Inauguração da nova praça no bairro Central" />
            </div>
          </div>
          
          <div class="grid grid-2" style="gap:var(--space-4); margin-bottom:var(--space-4);">
            <div class="form-group">
              <label class="form-label">Categoria</label>
              <select class="form-select">
                <option value="">Selecione uma categoria...</option>
                <option>Obras</option>
                <option>Educação</option>
                <option>Saúde</option>
                <option>Social</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">Data de Publicação</label>
              <input type="date" class="form-input" />
            </div>
          </div>
          
          <div class="form-group">
            <label class="form-label">Imagem de Capa</label>
            <div class="upload-area" style="padding:var(--space-10);">
              ${icons.upload}
              <p class="upload-area-text">Clique para enviar ou arraste a imagem aqui</p>
              <span class="text-xs text-muted">Tamanho recomendado: 1200x800px (JPG, PNG)</span>
            </div>
          </div>

          <div class="form-group">
            <label class="form-label">Conteúdo da Notícia</label>
            <div style="border:1px solid var(--gray-200); border-radius:var(--radius-md); overflow:hidden;">
              <div style="padding:var(--space-2); border-bottom:1px solid var(--gray-200); display:flex; gap:var(--space-2); background:var(--gray-50);">
                <button class="btn btn-ghost btn-sm" style="padding:6px;width:32px;height:32px;"><b>B</b></button>
                <button class="btn btn-ghost btn-sm" style="padding:6px;width:32px;height:32px;"><i>I</i></button>
                <button class="btn btn-ghost btn-sm" style="padding:6px;width:32px;height:32px;"><u>U</u></button>
                <span style="width:1px; background:var(--gray-200); margin:0 4px;"></span>
                <button class="btn btn-ghost btn-sm" style="padding:6px;width:32px;height:32px;">${icons.image}</button>
                <button class="btn btn-ghost btn-sm" style="padding:6px;width:32px;height:32px;">${icons.link}</button>
              </div>
              <textarea class="form-textarea" rows="15" style="border:none; border-radius:0; box-shadow:none; resize:vertical;" placeholder="Escreva o conteúdo da notícia aqui..."></textarea>
            </div>
          </div>
        </div>
      </main>
    </div>
  `;
  window.__pageInit = () => initHeaderEvents();
  return html;
}
