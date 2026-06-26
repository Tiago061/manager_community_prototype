import { renderHeader, initHeaderEvents } from '../components/header.js';
import { renderFooter } from '../components/footer.js';
import { icons } from '../components/icons.js';

export function renderCandidateForm(params) {
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
            <span>Candidatura</span>
          </div>
          <h1 class="page-header-title">Cadastro do Candidato</h1>
          <p class="page-header-subtitle">Preencha suas informações para se candidatar</p>
        </div>
      </section>

      <section class="section-sm">
        <div class="container" style="max-width:var(--container-lg);">
          <!-- Progress Bar -->
          <div style="margin-bottom:var(--space-8);">
            <div class="flex justify-between mb-2">
              <span class="text-sm font-semibold" id="step-label">Etapa 1 de 7 — Dados Pessoais</span>
              <span class="text-sm text-muted" id="step-percent">14%</span>
            </div>
            <div class="progress-bar">
              <div class="progress-bar-fill" id="progress-fill" style="width:14%"></div>
            </div>
          </div>

          <!-- Stepper -->
          <div class="stepper" id="stepper">
            ${['Dados', 'Contato', 'Escolaridade', 'Experiência', 'Cursos', 'Objetivo', 'Envio'].map((label, i) => `
              <div class="stepper-step ${i === 0 ? 'active' : ''}" data-step="${i + 1}">
                <div class="stepper-circle">${i + 1}</div>
              </div>
            `).join('')}
          </div>

          <div class="card">
            <div class="card-body" style="padding:var(--space-8);">
              <!-- Step 1: Dados Pessoais -->
              <div class="form-step" id="step-1">
                <h2 style="font-size:var(--font-xl);font-weight:var(--fw-bold);margin-bottom:var(--space-6);">Dados Pessoais</h2>
                <div class="form-row mb-4">
                  <div class="form-group"><label class="form-label">Nome completo <span class="required">*</span></label><input type="text" class="form-input" placeholder="Seu nome completo" /></div>
                  <div class="form-group"><label class="form-label">CPF <span class="required">*</span></label><input type="text" class="form-input" placeholder="000.000.000-00" /></div>
                </div>
                <div class="form-row mb-4">
                  <div class="form-group"><label class="form-label">Data de Nascimento</label><input type="date" class="form-input" /></div>
                  <div class="form-group"><label class="form-label">Gênero</label><select class="form-select"><option>Selecione</option><option>Masculino</option><option>Feminino</option><option>Outro</option><option>Prefiro não informar</option></select></div>
                </div>
                <div class="form-row mb-4">
                  <div class="form-group"><label class="form-label">RG</label><input type="text" class="form-input" placeholder="00.000.000-0" /></div>
                  <div class="form-group"><label class="form-label">Estado Civil</label><select class="form-select"><option>Selecione</option><option>Solteiro(a)</option><option>Casado(a)</option><option>Divorciado(a)</option><option>Viúvo(a)</option></select></div>
                </div>
              </div>

              <!-- Step 2: Contato -->
              <div class="form-step hidden" id="step-2">
                <h2 style="font-size:var(--font-xl);font-weight:var(--fw-bold);margin-bottom:var(--space-6);">Contato</h2>
                <div class="form-row mb-4">
                  <div class="form-group"><label class="form-label">Telefone <span class="required">*</span></label><input type="tel" class="form-input" placeholder="(00) 00000-0000" /></div>
                  <div class="form-group"><label class="form-label">WhatsApp</label><input type="tel" class="form-input" placeholder="(00) 00000-0000" /></div>
                </div>
                <div class="form-group mb-4"><label class="form-label">E-mail <span class="required">*</span></label><input type="email" class="form-input" placeholder="seu@email.com" /></div>
                <div class="form-row mb-4">
                  <div class="form-group"><label class="form-label">CEP</label><input type="text" class="form-input" placeholder="00000-000" /></div>
                  <div class="form-group"><label class="form-label">Cidade</label><input type="text" class="form-input" placeholder="Sua cidade" /></div>
                </div>
                <div class="form-row mb-4">
                  <div class="form-group"><label class="form-label">Bairro</label><input type="text" class="form-input" placeholder="Seu bairro" /></div>
                  <div class="form-group"><label class="form-label">Endereço</label><input type="text" class="form-input" placeholder="Rua, número" /></div>
                </div>
              </div>

              <!-- Step 3: Escolaridade -->
              <div class="form-step hidden" id="step-3">
                <h2 style="font-size:var(--font-xl);font-weight:var(--fw-bold);margin-bottom:var(--space-6);">Escolaridade</h2>
                <div class="form-group mb-4"><label class="form-label">Nível de Escolaridade</label><select class="form-select"><option>Selecione</option><option>Ensino Fundamental</option><option>Ensino Médio</option><option>Técnico</option><option>Superior Incompleto</option><option>Superior Completo</option><option>Pós-graduação</option><option>Mestrado</option><option>Doutorado</option></select></div>
                <div class="form-group mb-4"><label class="form-label">Instituição</label><input type="text" class="form-input" placeholder="Nome da instituição" /></div>
                <div class="form-group mb-4"><label class="form-label">Curso</label><input type="text" class="form-input" placeholder="Nome do curso" /></div>
                <div class="form-row mb-4">
                  <div class="form-group"><label class="form-label">Ano de Início</label><input type="number" class="form-input" placeholder="2020" /></div>
                  <div class="form-group"><label class="form-label">Ano de Conclusão</label><input type="number" class="form-input" placeholder="2024" /></div>
                </div>
              </div>

              <!-- Step 4: Experiência -->
              <div class="form-step hidden" id="step-4">
                <h2 style="font-size:var(--font-xl);font-weight:var(--fw-bold);margin-bottom:var(--space-6);">Experiência Profissional</h2>
                <div class="card card-flat mb-4" style="border:1px solid var(--gray-200);padding:var(--space-5);">
                  <div class="form-group mb-4"><label class="form-label">Empresa</label><input type="text" class="form-input" placeholder="Nome da empresa" /></div>
                  <div class="form-group mb-4"><label class="form-label">Cargo</label><input type="text" class="form-input" placeholder="Seu cargo" /></div>
                  <div class="form-row mb-4">
                    <div class="form-group"><label class="form-label">Data Início</label><input type="month" class="form-input" /></div>
                    <div class="form-group"><label class="form-label">Data Fim</label><input type="month" class="form-input" /></div>
                  </div>
                  <div class="form-group"><label class="form-label">Descrição das atividades</label><textarea class="form-textarea" rows="3" placeholder="Descreva suas atividades..."></textarea></div>
                </div>
                <button class="btn btn-outline btn-sm">${icons.plus} Adicionar experiência</button>
              </div>

              <!-- Step 5: Cursos -->
              <div class="form-step hidden" id="step-5">
                <h2 style="font-size:var(--font-xl);font-weight:var(--fw-bold);margin-bottom:var(--space-6);">Cursos e Certificações</h2>
                <div class="card card-flat mb-4" style="border:1px solid var(--gray-200);padding:var(--space-5);">
                  <div class="form-group mb-4"><label class="form-label">Nome do Curso</label><input type="text" class="form-input" placeholder="Nome do curso" /></div>
                  <div class="form-group mb-4"><label class="form-label">Instituição</label><input type="text" class="form-input" placeholder="Nome da instituição" /></div>
                  <div class="form-row mb-4">
                    <div class="form-group"><label class="form-label">Carga Horária</label><input type="text" class="form-input" placeholder="40h" /></div>
                    <div class="form-group"><label class="form-label">Ano de Conclusão</label><input type="number" class="form-input" placeholder="2025" /></div>
                  </div>
                </div>
                <button class="btn btn-outline btn-sm">${icons.plus} Adicionar curso</button>
              </div>

              <!-- Step 6: Objetivo -->
              <div class="form-step hidden" id="step-6">
                <h2 style="font-size:var(--font-xl);font-weight:var(--fw-bold);margin-bottom:var(--space-6);">Objetivo e Área de Interesse</h2>
                <div class="form-group mb-4"><label class="form-label">Objetivo Profissional</label><textarea class="form-textarea" rows="4" placeholder="Descreva seu objetivo profissional..."></textarea></div>
                <div class="form-group mb-4">
                  <label class="form-label">Áreas de Interesse</label>
                  <div class="flex gap-2" style="flex-wrap:wrap;">
                    ${['Administração','Saúde','Tecnologia','Vendas','Educação','Transporte','Marketing','Indústria','Construção','Serviços'].map(area => `
                      <span class="tag" onclick="this.classList.toggle('active')">${area}</span>
                    `).join('')}
                  </div>
                </div>
                <div class="form-row mb-4">
                  <div class="form-group"><label class="form-label">Pretensão Salarial</label><input type="text" class="form-input" placeholder="R$ 0,00" /></div>
                  <div class="form-group"><label class="form-label">Disponibilidade</label><select class="form-select"><option>Imediata</option><option>15 dias</option><option>30 dias</option><option>A combinar</option></select></div>
                </div>
              </div>

              <!-- Step 7: Envio -->
              <div class="form-step hidden" id="step-7">
                <h2 style="font-size:var(--font-xl);font-weight:var(--fw-bold);margin-bottom:var(--space-6);">Envio do Currículo</h2>
                <p style="color:var(--gray-500);margin-bottom:var(--space-6);">Escolha como deseja enviar seu currículo:</p>
                <div class="grid grid-2 mb-6">
                  <div class="card" style="cursor:pointer;text-align:center;padding:var(--space-8);" onclick="selectUploadType('pdf')" id="opt-pdf">
                    <div style="font-size:48px;margin-bottom:var(--space-3);">📄</div>
                    <h3 style="font-size:var(--font-base);font-weight:var(--fw-semibold);margin-bottom:var(--space-2);">Enviar PDF</h3>
                    <p class="text-sm text-muted">Faça upload do seu currículo em PDF</p>
                  </div>
                  <div class="card" style="cursor:pointer;text-align:center;padding:var(--space-8);" onclick="selectUploadType('online')" id="opt-online">
                    <div style="font-size:48px;margin-bottom:var(--space-3);">✏️</div>
                    <h3 style="font-size:var(--font-base);font-weight:var(--fw-semibold);margin-bottom:var(--space-2);">Criar Online</h3>
                    <p class="text-sm text-muted">Preencha seu currículo diretamente na plataforma</p>
                  </div>
                </div>
                <div id="upload-pdf" class="hidden">
                  <div class="upload-area">
                    ${icons.upload}
                    <p class="upload-area-text"><span>Clique para enviar</span> ou arraste seu arquivo aqui</p>
                    <p style="font-size:var(--font-xs);color:var(--gray-400);margin-top:var(--space-2);">PDF até 5MB</p>
                  </div>
                </div>
                <div id="upload-online" class="hidden">
                  <div class="card card-flat" style="border:1px solid var(--gray-200);padding:var(--space-6);">
                    <h3 style="font-size:var(--font-base);font-weight:var(--fw-semibold);margin-bottom:var(--space-4);">Currículo Online</h3>
                    <div class="form-group mb-4"><label class="form-label">Idiomas</label><input type="text" class="form-input" placeholder="Português (Nativo), Inglês (Intermediário)" /></div>
                    <div class="form-group mb-4"><label class="form-label">Competências</label><input type="text" class="form-input" placeholder="Pacote Office, Atendimento ao Público..." /></div>
                    <div class="form-group mb-4"><label class="form-label">Habilidades</label><input type="text" class="form-input" placeholder="Comunicação, Trabalho em equipe..." /></div>
                    <div class="form-row mb-4">
                      <div class="form-group"><label class="form-label">CNH</label><select class="form-select"><option>Não possuo</option><option>A</option><option>B</option><option>AB</option><option>C</option><option>D</option><option>E</option></select></div>
                      <div class="form-group"><label class="form-label">Disponibilidade</label><select class="form-select"><option>Integral</option><option>Meio período</option><option>Noturno</option><option>Fins de semana</option></select></div>
                    </div>
                    <div class="form-group mb-4"><label class="form-label">LinkedIn</label><input type="url" class="form-input" placeholder="https://linkedin.com/in/seu-perfil" /></div>
                    <div class="form-group"><label class="form-label">Portfólio</label><input type="url" class="form-input" placeholder="https://seu-portfolio.com" /></div>
                  </div>
                </div>
              </div>

              <!-- Navigation -->
              <div class="flex justify-between mt-8">
                <button class="btn btn-outline btn-lg" id="btn-prev" onclick="prevStep()" style="visibility:hidden;">
                  ${icons.arrowLeft} Anterior
                </button>
                <button class="btn btn-primary btn-lg" id="btn-next" onclick="nextStep()">
                  Próximo ${icons.arrowRight}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    ${renderFooter()}
  `;

  window.__pageInit = () => {
    initHeaderEvents();
    window.currentStep = 1;
    window.totalSteps = 7;
  };

  window.currentStep = 1;
  window.totalSteps = 7;

  const stepLabels = ['Dados Pessoais', 'Contato', 'Escolaridade', 'Experiência', 'Cursos', 'Objetivo', 'Envio'];

  window.nextStep = function() {
    if (window.currentStep >= window.totalSteps) return;
    document.getElementById(`step-${window.currentStep}`).classList.add('hidden');
    window.currentStep++;
    document.getElementById(`step-${window.currentStep}`).classList.remove('hidden');
    updateStepper();
  };

  window.prevStep = function() {
    if (window.currentStep <= 1) return;
    document.getElementById(`step-${window.currentStep}`).classList.add('hidden');
    window.currentStep--;
    document.getElementById(`step-${window.currentStep}`).classList.remove('hidden');
    updateStepper();
  };

  window.updateStepper = function() {
    const percent = Math.round((window.currentStep / window.totalSteps) * 100);
    const fill = document.getElementById('progress-fill');
    const label = document.getElementById('step-label');
    const percentEl = document.getElementById('step-percent');
    const prevBtn = document.getElementById('btn-prev');
    const nextBtn = document.getElementById('btn-next');
    
    if (fill) fill.style.width = percent + '%';
    if (label) label.textContent = `Etapa ${window.currentStep} de ${window.totalSteps} — ${stepLabels[window.currentStep - 1]}`;
    if (percentEl) percentEl.textContent = percent + '%';
    if (prevBtn) prevBtn.style.visibility = window.currentStep === 1 ? 'hidden' : 'visible';
    if (nextBtn) {
      if (window.currentStep === window.totalSteps) {
        nextBtn.innerHTML = `${icons.check} Enviar candidatura`;
        nextBtn.className = 'btn btn-green btn-lg';
      } else {
        nextBtn.innerHTML = `Próximo ${icons.arrowRight}`;
        nextBtn.className = 'btn btn-primary btn-lg';
      }
    }

    document.querySelectorAll('.stepper-step').forEach((step, i) => {
      step.classList.remove('active', 'completed');
      if (i + 1 < window.currentStep) step.classList.add('completed');
      if (i + 1 === window.currentStep) step.classList.add('active');
    });
  };

  window.selectUploadType = function(type) {
    document.getElementById('upload-pdf').classList.toggle('hidden', type !== 'pdf');
    document.getElementById('upload-online').classList.toggle('hidden', type !== 'online');
    document.getElementById('opt-pdf').style.borderColor = type === 'pdf' ? 'var(--brand)' : '';
    document.getElementById('opt-online').style.borderColor = type === 'online' ? 'var(--brand)' : '';
  };

  return html;
}
