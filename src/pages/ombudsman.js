import { renderHeader, initHeaderEvents } from '../components/header.js';
import { renderFooter } from '../components/footer.js';
import { icons } from '../components/icons.js';
import { ombudsmanData, ombudsmanCategories } from '../data/testimonials.js';

export function renderOmbudsman() {
  const html = `
    ${renderHeader('ouvidoria')}
    <main class="main-content">
      <section class="page-header">
        <div class="page-header-inner">
          <div class="breadcrumb">
            <a href="/">Início</a>
            <span class="breadcrumb-separator">${icons.chevronRight}</span>
            <span>Ouvidoria</span>
          </div>
          <h1 class="page-header-title">Ouvidoria</h1>
          <p class="page-header-subtitle">Sua voz é importante. Fale conosco!</p>
        </div>
      </section>

      <section class="section-sm">
        <div class="container" style="max-width:var(--container-lg);">
          <!-- Categories -->
          <div class="grid grid-3 mb-8" style="grid-template-columns:repeat(5,1fr);">
            ${ombudsmanCategories.map(cat => `
              <div class="card" style="text-align:center;padding:var(--space-5);cursor:pointer;transition:all 0.2s ease;" 
                   onclick="selectOmbudsmanCategory('${cat.value}')" id="ocat-${cat.value}">
                <div style="font-size:32px;margin-bottom:var(--space-2);">${cat.icon}</div>
                <div style="font-size:var(--font-sm);font-weight:var(--fw-semibold);color:var(--gray-700);">${cat.label}</div>
              </div>
            `).join('')}
          </div>

          <!-- Form -->
          <div class="card mb-8" id="ombudsman-form">
            <div class="card-body" style="padding:var(--space-8);">
              <h2 style="font-size:var(--font-xl);font-weight:var(--fw-bold);margin-bottom:var(--space-6);">Nova Manifestação</h2>
              <div class="form-group mb-4">
                <label class="form-label">Categoria <span class="required">*</span></label>
                <select class="form-select" id="ombudsman-category">
                  <option>Selecione a categoria</option>
                  ${ombudsmanCategories.map(cat => `<option value="${cat.value}">${cat.label}</option>`).join('')}
                </select>
              </div>
              <div class="form-group mb-4">
                <label class="form-label">Assunto <span class="required">*</span></label>
                <input type="text" class="form-input" placeholder="Resuma o assunto da sua manifestação" />
              </div>
              <div class="form-row mb-4">
                <div class="form-group"><label class="form-label">Nome</label><input type="text" class="form-input" placeholder="Seu nome (opcional)" /></div>
                <div class="form-group"><label class="form-label">E-mail <span class="required">*</span></label><input type="email" class="form-input" placeholder="Para acompanhar a resposta" /></div>
              </div>
              <div class="form-group mb-4">
                <label class="form-label">Telefone</label>
                <input type="tel" class="form-input" placeholder="(00) 00000-0000" />
              </div>
              <div class="form-group mb-4">
                <label class="form-label">Descrição <span class="required">*</span></label>
                <textarea class="form-textarea" rows="5" placeholder="Descreva detalhadamente a sua manifestação..."></textarea>
              </div>
              <div class="form-group mb-6">
                <label class="form-label">Anexos</label>
                <div class="upload-area" style="padding:var(--space-6);">
                  ${icons.upload}
                  <p class="upload-area-text"><span>Enviar arquivos</span> (imagens, documentos)</p>
                </div>
              </div>
              <div class="flex gap-3">
                <button class="btn btn-primary btn-lg">${icons.send} Enviar Manifestação</button>
              </div>
            </div>
          </div>

          <!-- History -->
          <div class="card" id="ombudsman-history">
            <div class="card-body" style="padding:var(--space-8);">
              <div class="flex items-center justify-between mb-6">
                <h2 style="font-size:var(--font-xl);font-weight:var(--fw-bold);">Consultar Protocolo</h2>
              </div>
              <div class="flex gap-3 mb-6">
                <div class="search-bar" style="max-width:100%;flex:1;">
                  ${icons.search}
                  <input type="text" placeholder="Digite o número do protocolo..." />
                </div>
                <button class="btn btn-primary">Consultar</button>
              </div>

              <h3 style="font-size:var(--font-base);font-weight:var(--fw-semibold);margin-bottom:var(--space-4);">Últimos Protocolos</h3>
              <div class="table-container">
                <table class="table">
                  <thead>
                    <tr>
                      <th>Protocolo</th>
                      <th>Categoria</th>
                      <th>Assunto</th>
                      <th>Data</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${ombudsmanData.map(item => `
                      <tr>
                        <td><strong style="color:var(--blue);">${item.protocol}</strong></td>
                        <td><span class="badge badge-${getOmbudsmanCategoryBadge(item.category)}">${item.category}</span></td>
                        <td>${item.subject}</td>
                        <td>${item.date}</td>
                        <td><span class="badge badge-${getOmbudsmanStatusBadge(item.status)}">${item.status}</span></td>
                      </tr>
                    `).join('')}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    ${renderFooter()}
  `;

  window.__pageInit = () => initHeaderEvents();
  window.selectOmbudsmanCategory = function(value) {
    document.querySelectorAll('[id^="ocat-"]').forEach(el => {
      el.style.borderColor = '';
      el.style.background = '';
    });
    const el = document.getElementById(`ocat-${value}`);
    if (el) {
      el.style.borderColor = 'var(--brand)';
      el.style.background = 'var(--brand-bg)';
    }
    const select = document.getElementById('ombudsman-category');
    if (select) select.value = value;
  };
  return html;
}

function getOmbudsmanCategoryBadge(cat) {
  const map = { 'Reclamação': 'error', 'Sugestão': 'warning', 'Elogio': 'green', 'Solicitação': 'blue', 'Denúncia': 'brand' };
  return map[cat] || 'gray';
}

function getOmbudsmanStatusBadge(status) {
  const map = { 'Respondida': 'green', 'Em análise': 'warning', 'Encaminhada': 'blue' };
  return map[status] || 'gray';
}
