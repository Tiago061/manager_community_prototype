import { renderHeader, initHeaderEvents } from '../../components/header.js';
import { renderAdminSidebar } from '../../components/sidebar.js';
import { icons } from '../../components/icons.js';
import { jobsData } from '../../data/jobs.js';
import { crmData } from '../../data/admin-stats.js';

export function renderJobsMgmt() {
  const html = `
    ${renderHeader('admin')}
    <div class="admin-layout">
      ${renderAdminSidebar('jobs')}
      <main class="admin-main" id="admin-main">
        <div class="admin-page-header">
          <div><h1 class="admin-page-title">Gestão de Vagas</h1><p class="admin-page-subtitle">${jobsData.length} vagas ativas</p></div>
          <div class="admin-page-actions"><a href="/admin/vagas/nova" class="btn btn-primary">${icons.plus} Nova Vaga</a></div>
        </div>
        <div class="admin-table-header">
          <div class="admin-table-filters">
            <div class="search-bar" style="max-width:300px;">${icons.search}<input type="text" placeholder="Pesquisar vagas..." /></div>
            <select class="form-select" style="width:auto;"><option>Todas áreas</option>${jobsData.map(j => j.area).filter((v,i,a) => a.indexOf(v) === i).map(a => `<option>${a}</option>`).join('')}</select>
            <select class="form-select" style="width:auto;"><option>Status</option><option>Ativa</option><option>Encerrada</option></select>
          </div>
        </div>
        <div class="admin-table-card">
          <div class="table-container">
            <table class="table">
              <thead><tr><th><input type="checkbox" /></th><th>Vaga</th><th>Empresa</th><th>Área</th><th>Tipo</th><th>Salário</th><th>Candidatos</th><th>Prazo</th><th>Ações</th></tr></thead>
              <tbody>
                ${jobsData.map((job, i) => `
                  <tr>
                    <td><input type="checkbox" /></td>
                    <td><strong>${job.title}</strong></td>
                    <td>${job.company}</td>
                    <td><span class="badge badge-blue">${job.area}</span></td>
                    <td><span class="badge badge-gray">${job.type}</span></td>
                    <td style="font-weight:var(--fw-semibold);color:var(--green);">${job.salary}</td>
                    <td style="text-align:center;">${Math.floor(Math.random()*30)+5}</td>
                    <td style="white-space:nowrap;">${job.deadline}</td>
                    <td><div style="display:flex;gap:2px;"><button class="btn btn-ghost btn-icon">${icons.edit}</button><button class="btn btn-ghost btn-icon">${icons.eye}</button><button class="btn btn-ghost btn-icon" style="color:var(--error);">${icons.trash}</button></div></td>
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

export function renderCandidatesMgmt() {
  const html = `
    ${renderHeader('admin')}
    <div class="admin-layout">
      ${renderAdminSidebar('candidates')}
      <main class="admin-main" id="admin-main">
        <div class="admin-page-header">
          <div><h1 class="admin-page-title">Gestão de Candidatos</h1><p class="admin-page-subtitle">892 currículos cadastrados</p></div>
          <div class="admin-page-actions">
            <button class="btn btn-outline">${icons.download} Exportar Excel</button>
            <button class="btn btn-outline">${icons.filter} Filtros</button>
          </div>
        </div>
        <div class="admin-table-header">
          <div class="admin-table-filters">
            <div class="search-bar" style="max-width:300px;">${icons.search}<input type="text" placeholder="Pesquisar candidatos..." /></div>
            <select class="form-select" style="width:auto;"><option>Cidade</option><option>Cidade Exemplo</option></select>
            <select class="form-select" style="width:auto;"><option>Área</option><option>Administração</option><option>Saúde</option><option>Tecnologia</option></select>
          </div>
        </div>
        <div class="admin-table-card">
          <div class="table-container">
            <table class="table">
              <thead><tr><th><input type="checkbox" /></th><th>Candidato</th><th>Telefone</th><th>Cidade</th><th>Área</th><th>Escolaridade</th><th>Cadastro</th><th>Ações</th></tr></thead>
              <tbody>
                ${crmData.map(person => `
                  <tr>
                    <td><input type="checkbox" /></td>
                    <td><div style="display:flex;align-items:center;gap:var(--space-2);"><div class="avatar avatar-sm avatar-placeholder">${person.initials}</div><strong>${person.name}</strong></div></td>
                    <td>${person.phone}</td>
                    <td>${person.city}</td>
                    <td><span class="badge badge-blue">${person.interests[0]}</span></td>
                    <td>Superior</td>
                    <td>Jun 2026</td>
                    <td><div style="display:flex;gap:2px;"><button class="btn btn-ghost btn-icon">${icons.eye}</button><button class="btn btn-ghost btn-icon">${icons.download}</button></div></td>
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

export function renderJobForm() {
  const html = `
    ${renderHeader('admin')}
    <div class="admin-layout">
      ${renderAdminSidebar('jobs')}
      <main class="admin-main" id="admin-main">
        <div class="admin-page-header">
          <div>
            <div class="flex items-center gap-2 mb-2">
              <a href="/admin/vagas" class="text-muted" style="text-decoration:none;font-size:var(--font-sm);">&larr; Voltar para gestão de vagas</a>
            </div>
            <h1 class="admin-page-title">Cadastrar Nova Vaga</h1>
          </div>
          <div class="admin-page-actions">
            <button class="btn btn-outline">Salvar Rascunho</button>
            <button class="btn btn-primary">${icons.check} Publicar Vaga</button>
          </div>
        </div>

        <div class="card" style="padding:var(--space-6);">
          
          <h2 style="font-size:var(--font-lg); font-weight:var(--fw-bold); margin-bottom:var(--space-4);">Informações Básicas</h2>
          <div class="grid grid-2" style="gap:var(--space-4); margin-bottom:var(--space-4);">
            <div class="form-group">
              <label class="form-label">Título da Vaga</label>
              <input type="text" class="form-input" placeholder="Ex: Auxiliar Administrativo" />
            </div>
            <div class="form-group">
              <label class="form-label">Empresa Contratante</label>
              <input type="text" class="form-input" placeholder="Ex: Mercado Central (ou Confidencial)" />
            </div>
          </div>
          
          <div class="grid grid-3" style="gap:var(--space-4); margin-bottom:var(--space-6);">
            <div class="form-group">
              <label class="form-label">Área de Atuação</label>
              <select class="form-select">
                <option value="">Selecione...</option>
                <option>Administração</option>
                <option>Comércio/Varejo</option>
                <option>Saúde</option>
                <option>Tecnologia</option>
                <option>Serviços Gerais</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">Tipo de Contrato</label>
              <select class="form-select">
                <option>CLT (Efetivo)</option>
                <option>PJ (Pessoa Jurídica)</option>
                <option>Estágio</option>
                <option>Temporário</option>
                <option>Jovem Aprendiz</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">Salário (Opcional)</label>
              <input type="text" class="form-input" placeholder="Ex: R$ 1.800,00 ou 'A combinar'" />
            </div>
          </div>

          <hr style="border:none; border-top:1px solid var(--gray-200); margin-bottom:var(--space-6);" />
          <h2 style="font-size:var(--font-lg); font-weight:var(--fw-bold); margin-bottom:var(--space-4);">Localização e Requisitos</h2>

          <div class="grid grid-2" style="gap:var(--space-4); margin-bottom:var(--space-4);">
            <div class="form-group">
              <label class="form-label">Cidade / Bairro</label>
              <input type="text" class="form-input" placeholder="Ex: Centro" />
            </div>
            <div class="form-group">
              <label class="form-label">Prazo para Candidatura</label>
              <input type="date" class="form-input" />
            </div>
          </div>

          <div class="form-group" style="margin-bottom:var(--space-6);">
            <label class="form-label">Descrição da Vaga e Requisitos</label>
            <div style="border:1px solid var(--gray-200); border-radius:var(--radius-md); overflow:hidden;">
              <div style="padding:var(--space-2); border-bottom:1px solid var(--gray-200); display:flex; gap:var(--space-2); background:var(--gray-50);">
                <button class="btn btn-ghost btn-sm" style="padding:6px;width:32px;height:32px;"><b>B</b></button>
                <button class="btn btn-ghost btn-sm" style="padding:6px;width:32px;height:32px;"><i>I</i></button>
                <button class="btn btn-ghost btn-sm" style="padding:6px;width:32px;height:32px;"><u>U</u></button>
                <span style="width:1px; background:var(--gray-200); margin:0 4px;"></span>
                <button class="btn btn-ghost btn-sm" style="padding:6px;width:32px;height:32px;" title="Lista com marcadores">•</button>
                <button class="btn btn-ghost btn-sm" style="padding:6px;width:32px;height:32px;" title="Lista numerada">1.</button>
              </div>
              <textarea class="form-textarea" rows="8" style="border:none; border-radius:0; box-shadow:none; resize:vertical;" placeholder="Descreva as responsabilidades, requisitos, benefícios, etc..."></textarea>
            </div>
          </div>
          
          <div class="form-group">
            <label class="form-label">Receber candidaturas por</label>
            <div class="flex gap-4">
              <label class="flex items-center gap-2"><input type="radio" name="receive" checked /> Pela plataforma (Recomendado)</label>
              <label class="flex items-center gap-2"><input type="radio" name="receive" /> Link Externo</label>
              <label class="flex items-center gap-2"><input type="radio" name="receive" /> WhatsApp / E-mail direto</label>
            </div>
          </div>
        </div>
      </main>
    </div>
  `;
  window.__pageInit = () => initHeaderEvents();
  return html;
}
