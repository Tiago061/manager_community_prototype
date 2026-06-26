import { renderHeader, initHeaderEvents } from '../components/header.js';
import { renderFooter } from '../components/footer.js';
import { icons } from '../components/icons.js';

export function renderAbout() {
  const html = `
    ${renderHeader('sobre')}
    <main class="main-content">
      <section class="page-header">
        <div class="page-header-inner">
          <div class="breadcrumb">
            <a href="/">Início</a>
            <span class="breadcrumb-separator">${icons.chevronRight}</span>
            <span>Sobre</span>
          </div>
          <h1 class="page-header-title">Sobre o Vereador</h1>
          <p class="page-header-subtitle">Conheça a história e os compromissos do vereador Neném da Civil</p>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="about-grid">
            <div class="about-photo">
              <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;color:var(--gray-400);">
                ${icons.user}
                <span style="font-size:var(--font-sm);font-weight:var(--fw-medium);">Foto Oficial do Vereador</span>
              </div>
            </div>
            <div>
              <span class="badge badge-brand mb-4" style="display:inline-flex;">Vereador</span>
              <h2 style="font-size:var(--font-3xl);font-weight:var(--fw-extrabold);margin-bottom:var(--space-4);">Neném da Civil</h2>
              <p style="color:var(--gray-600);line-height:1.8;margin-bottom:var(--space-4);">
                Neném da Civil é um líder comunitário e vereador comprometido com a transformação social e o desenvolvimento sustentável da nossa cidade. Com anos de experiência na vida pública, construiu uma trajetória marcada pela proximidade com o cidadão e pela busca incansável por melhorias na qualidade de vida da população.
              </p>
              <p style="color:var(--gray-600);line-height:1.8;margin-bottom:var(--space-4);">
                Sua atuação parlamentar é pautada pelos princípios de transparência, ética e compromisso com as demandas populares. Acredita que a política deve ser uma ferramenta de transformação social, acessível e participativa.
              </p>
              <p style="color:var(--gray-600);line-height:1.8;">
                Natural da região, conhece de perto as necessidades e desafios enfrentados pela comunidade, utilizando seu mandato como ponte entre o poder público e os cidadãos.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Missão, Valores, Compromissos -->
      <section class="section" style="background:var(--gray-50);">
        <div class="container">
          <div class="section-header">
            <span class="section-tag">${icons.target} Princípios</span>
            <h2 class="section-title">Missão, Valores e Compromissos</h2>
          </div>
          <div class="about-values" style="grid-template-columns:repeat(3,1fr);">
            ${[
              { icon: icons.target, title: 'Missão', text: 'Representar a voz da comunidade na Câmara Municipal, lutando por políticas públicas que promovam qualidade de vida, desenvolvimento e justiça social.' },
              { icon: icons.shield, title: 'Valores', text: 'Transparência, ética, compromisso com o cidadão, respeito à diversidade e dedicação ao serviço público com honestidade e responsabilidade.' },
              { icon: icons.handshake, title: 'Compromissos', text: 'Saúde de qualidade, educação acessível, geração de empregos, infraestrutura urbana, segurança pública e comunicação direta com a população.' }
            ].map(item => `
              <div class="about-value-card" style="text-align:left;padding:var(--space-8);">
                <div class="about-value-icon" style="margin:0 0 var(--space-4) 0;">${item.icon}</div>
                <h3 style="font-size:var(--font-lg);font-weight:var(--fw-bold);margin-bottom:var(--space-2);">${item.title}</h3>
                <p style="font-size:var(--font-sm);color:var(--gray-500);line-height:var(--lh-relaxed);">${item.text}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Timeline -->
      <section class="section">
        <div class="container" style="max-width:var(--container-lg);">
          <div class="section-header">
            <span class="section-tag">${icons.clock} Trajetória</span>
            <h2 class="section-title">Linha do Tempo</h2>
          </div>
          <div class="timeline">
            ${[
              { year: '2024', title: 'Eleito Vereador', text: 'Eleito com expressiva votação popular, assumiu o mandato com o compromisso de transformar a relação entre poder público e cidadão.' },
              { year: '2024', title: 'Gabinete Digital', text: 'Inaugurou o gabinete digital para atendimento à população, permitindo que cidadãos enviem demandas e acompanhem o andamento.' },
              { year: '2025', title: 'Portal de Vagas', text: 'Lançou o portal de vagas de emprego, conectando empresas da região com trabalhadores em busca de oportunidades.' },
              { year: '2025', title: 'Projetos de Lei', text: 'Apresentou mais de 20 projetos de lei focados em saúde, educação, infraestrutura e transparência na gestão pública.' },
              { year: '2026', title: 'Plataforma Integrada', text: 'Lançamento da plataforma digital integrada de comunicação com a comunidade, reunindo notícias, vagas, demandas e ouvidoria.' },
              { year: '2026', title: 'Reconhecimento', text: 'Reconhecido como um dos vereadores mais atuantes e transparentes do município, com alta taxa de aprovação popular.' }
            ].map(item => `
              <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-year">${item.year}</div>
                <div class="timeline-title">${item.title}</div>
                <div class="timeline-text">${item.text}</div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Projects -->
      <section class="section" style="background:var(--gray-50);">
        <div class="container">
          <div class="section-header">
            <span class="section-tag" style="background:var(--green-bg);color:var(--green);">${icons.checkCircle} Projetos</span>
            <h2 class="section-title">Principais Projetos</h2>
          </div>
          <div class="grid grid-3">
            ${[
              { title: 'Transparência Digital', desc: 'Portal de dados abertos para acompanhamento da gestão pública e uso de recursos.' },
              { title: 'Emprega Cidade', desc: 'Programa de intermediação de mão de obra conectando empresas e trabalhadores.' },
              { title: 'Saúde na Comunidade', desc: 'Mutirões de saúde itinerantes levando atendimento médico aos bairros.' },
              { title: 'Educação para Todos', desc: 'Programa de capacitação profissional com cursos gratuitos para a população.' },
              { title: 'Cidade Iluminada', desc: 'Projeto de revitalização da iluminação pública em bairros periféricos.' },
              { title: 'Voz do Cidadão', desc: 'Sistema digital de ouvidoria para receber e responder demandas da comunidade.' },
            ].map((p, i) => `
              <div class="action-card" id="project-${i}">
                <div class="action-card-img">${icons.image}</div>
                <div class="action-card-body">
                  <h3 class="action-card-title">${p.title}</h3>
                  <p class="action-card-text">${p.desc}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Gallery -->
      <section class="section">
        <div class="container">
          <div class="section-header">
            <span class="section-tag">${icons.image} Galeria</span>
            <h2 class="section-title">Galeria de Fotos</h2>
          </div>
          <div class="grid grid-4">
            ${[1,2,3,4,5,6,7,8].map(i => `
              <div style="aspect-ratio:1;background:linear-gradient(135deg,var(--gray-100),var(--gray-200));border-radius:var(--radius-xl);display:flex;align-items:center;justify-content:center;color:var(--gray-300);transition:all 0.2s;cursor:pointer;" onmouseover="this.style.transform='scale(1.03)'" onmouseout="this.style.transform='scale(1)'" id="gallery-${i}">
                ${icons.image}
              </div>
            `).join('')}
          </div>
        </div>
      </section>
    </main>
    ${renderFooter()}
  `;
  window.__pageInit = () => initHeaderEvents();
  return html;
}

export function renderContact() {
  const html = `
    ${renderHeader('contato')}
    <main class="main-content">
      <section class="page-header">
        <div class="page-header-inner">
          <div class="breadcrumb">
            <a href="/">Início</a>
            <span class="breadcrumb-separator">${icons.chevronRight}</span>
            <span>Contato</span>
          </div>
          <h1 class="page-header-title">Contato</h1>
          <p class="page-header-subtitle">Entre em contato com o gabinete do vereador</p>
        </div>
      </section>

      <section class="section">
        <div class="container" style="max-width:var(--container-lg);">
          <div class="grid grid-2" style="gap:var(--space-10);">
            <div>
              <h2 style="font-size:var(--font-2xl);font-weight:var(--fw-bold);margin-bottom:var(--space-6);">Fale Conosco</h2>
              <div class="form-group mb-4"><label class="form-label">Nome completo</label><input type="text" class="form-input" placeholder="Seu nome" /></div>
              <div class="form-group mb-4"><label class="form-label">E-mail</label><input type="email" class="form-input" placeholder="seu@email.com" /></div>
              <div class="form-group mb-4"><label class="form-label">Telefone</label><input type="tel" class="form-input" placeholder="(00) 00000-0000" /></div>
              <div class="form-group mb-4"><label class="form-label">Assunto</label>
                <select class="form-select"><option>Selecione</option><option>Informação</option><option>Parceria</option><option>Assessoria</option><option>Outro</option></select>
              </div>
              <div class="form-group mb-6"><label class="form-label">Mensagem</label><textarea class="form-textarea" rows="5" placeholder="Sua mensagem..."></textarea></div>
              <button class="btn btn-primary btn-lg">${icons.send} Enviar Mensagem</button>
            </div>
            <div>
              <h2 style="font-size:var(--font-2xl);font-weight:var(--fw-bold);margin-bottom:var(--space-6);">Informações</h2>
              <div class="flex flex-col gap-6">
                <div class="card" style="padding:var(--space-5);display:flex;align-items:center;gap:var(--space-4);">
                  <div style="width:48px;height:48px;border-radius:var(--radius-lg);background:var(--brand-bg);color:var(--brand);display:flex;align-items:center;justify-content:center;">${icons.mapPin}</div>
                  <div><div class="font-semibold text-sm">Endereço</div><div class="text-sm text-muted">Rua Exemplo, 123 — Centro, Cidade Exemplo — UF</div></div>
                </div>
                <div class="card" style="padding:var(--space-5);display:flex;align-items:center;gap:var(--space-4);">
                  <div style="width:48px;height:48px;border-radius:var(--radius-lg);background:var(--blue-bg);color:var(--blue);display:flex;align-items:center;justify-content:center;">${icons.phone}</div>
                  <div><div class="font-semibold text-sm">Telefone</div><div class="text-sm text-muted">(11) 3456-7890</div></div>
                </div>
                <div class="card" style="padding:var(--space-5);display:flex;align-items:center;gap:var(--space-4);">
                  <div style="width:48px;height:48px;border-radius:var(--radius-lg);background:var(--green-bg);color:var(--green);display:flex;align-items:center;justify-content:center;">📱</div>
                  <div><div class="font-semibold text-sm">WhatsApp</div><div class="text-sm text-muted">(11) 98765-4321</div></div>
                </div>
                <div class="card" style="padding:var(--space-5);display:flex;align-items:center;gap:var(--space-4);">
                  <div style="width:48px;height:48px;border-radius:var(--radius-lg);background:var(--brand-bg);color:var(--brand);display:flex;align-items:center;justify-content:center;">${icons.mail}</div>
                  <div><div class="font-semibold text-sm">E-mail</div><div class="text-sm text-muted">contato@nenemdacivil.com.br</div></div>
                </div>
              </div>
              <!-- Map placeholder -->
              <div style="margin-top:var(--space-6);width:100%;height:200px;background:linear-gradient(135deg,var(--blue-bg),var(--gray-100));border-radius:var(--radius-xl);display:flex;align-items:center;justify-content:center;color:var(--gray-400);border:1px solid var(--gray-200);">
                ${icons.mapPin}
                <span style="margin-left:8px;">Mapa</span>
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

export function renderRegister() {
  const html = `
    ${renderHeader('')}
    <main class="main-content">
      <section class="section">
        <div class="container" style="max-width:560px;">
          <div class="text-center mb-8">
            <h1 style="font-size:var(--font-3xl);font-weight:var(--fw-extrabold);margin-bottom:var(--space-3);">Cadastre-se</h1>
            <p class="text-muted">Crie sua conta para acessar todos os serviços da plataforma</p>
          </div>
          <div class="card">
            <div class="card-body" style="padding:var(--space-8);">
              <div class="form-row mb-4">
                <div class="form-group"><label class="form-label">Nome <span class="required">*</span></label><input type="text" class="form-input" placeholder="Seu nome" /></div>
                <div class="form-group"><label class="form-label">Sobrenome <span class="required">*</span></label><input type="text" class="form-input" placeholder="Seu sobrenome" /></div>
              </div>
              <div class="form-group mb-4"><label class="form-label">E-mail <span class="required">*</span></label><input type="email" class="form-input" placeholder="seu@email.com" /></div>
              <div class="form-group mb-4"><label class="form-label">Telefone / WhatsApp <span class="required">*</span></label><input type="tel" class="form-input" placeholder="(00) 00000-0000" /></div>
              <div class="form-row mb-4">
                <div class="form-group"><label class="form-label">Cidade</label><input type="text" class="form-input" placeholder="Sua cidade" /></div>
                <div class="form-group"><label class="form-label">Data de Nascimento</label><input type="date" class="form-input" /></div>
              </div>
              <div class="form-group mb-4">
                <label class="form-label">Interesses</label>
                <div class="flex gap-2" style="flex-wrap:wrap;">
                  ${['Saúde','Educação','Emprego','Infraestrutura','Segurança','Transporte','Cultura','Meio Ambiente'].map(i => `
                    <span class="tag" onclick="this.classList.toggle('active')">${i}</span>
                  `).join('')}
                </div>
              </div>
              <div class="form-group mb-4"><label class="form-label">Senha <span class="required">*</span></label><input type="password" class="form-input" placeholder="Mínimo 8 caracteres" /></div>
              <div class="form-group mb-6"><label class="form-label">Confirmar Senha <span class="required">*</span></label><input type="password" class="form-input" placeholder="Repita a senha" /></div>
              <label class="form-check mb-6"><input type="checkbox" /> <span class="text-sm">Li e aceito os <a href="#" style="color:var(--brand);">termos de uso</a> e a <a href="#" style="color:var(--brand);">política de privacidade</a></span></label>
              <button class="btn btn-primary btn-lg w-full" style="width:100%;">Criar conta</button>
              <p class="text-center text-sm text-muted mt-4">Já tem uma conta? <a href="#" style="color:var(--brand);font-weight:var(--fw-semibold);">Entrar</a></p>
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
