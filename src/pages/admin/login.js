import { icons } from '../../components/icons.js';

export function renderAdminLogin() {
  const html = `
    <div class="admin-login-wrapper">
      <div class="admin-login-left">
        <div class="admin-login-brand">
          <div class="header-logo" style="color:var(--white);">
            <div class="logo-icon" style="background:var(--white);color:var(--brand);">NC</div>
            <div class="logo-text">NENÉM DA CIVIL<span>PAINEL ADMINISTRATIVO</span></div>
          </div>
        </div>
        <div class="admin-login-illustration">
          <h1 style="color:var(--white); font-size:var(--font-3xl); font-weight:var(--fw-extrabold); line-height:1.2; margin-bottom:var(--space-4);">Bem-vindo ao<br/>Centro de Comando</h1>
          <p style="color:rgba(255,255,255,0.8); font-size:var(--font-lg); line-height:var(--lh-relaxed); max-width:400px;">
            Gerencie notícias, demandas da comunidade, oportunidades de emprego e conecte-se com os cidadãos de forma eficiente.
          </p>
        </div>
        <div class="admin-login-footer">
          &copy; 2026 Gabinete Neném da Civil. Sistema seguro.
        </div>
      </div>
      
      <div class="admin-login-right">
        <div class="admin-login-box">
          <div style="text-align:center; margin-bottom:var(--space-8);">
            <h2 style="font-size:var(--font-2xl); font-weight:var(--fw-bold); color:var(--gray-900); margin-bottom:var(--space-2);">Acesso Restrito</h2>
            <p style="color:var(--gray-500); font-size:var(--font-sm);">Insira suas credenciais para acessar o painel</p>
          </div>
          
          <form id="admin-login-form" onsubmit="event.preventDefault(); window.history.pushState(null, '', '/admin'); window.dispatchEvent(new Event('popstate'));">
            <div class="form-group" style="margin-bottom:var(--space-4);">
              <label class="form-label" style="font-weight:var(--fw-semibold);">E-mail Institucional</label>
              <div style="position:relative;">
                <span class="login-input-icon">
                  ${icons.user}
                </span>
                <input type="email" class="form-input" value="admin@nenemdacivil.com.br" required style="padding-left:42px; height:48px;" />
              </div>
            </div>
            
            <div class="form-group" style="margin-bottom:var(--space-4);">
              <div class="flex items-center justify-between">
                <label class="form-label" style="font-weight:var(--fw-semibold);">Senha</label>
                <a href="#" style="font-size:var(--font-xs); color:var(--brand); text-decoration:none; font-weight:var(--fw-medium);">Esqueceu a senha?</a>
              </div>
              <div style="position:relative;">
                <span class="login-input-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                </span>
                <input type="password" class="form-input" value="12345678" required style="padding-left:42px; height:48px;" />
              </div>
            </div>
            
            <div style="display:flex; flex-direction:row; align-items:center; justify-content:center; gap:8px; margin-bottom:var(--space-8);">
              <input type="checkbox" id="remember-me" checked style="width:16px; height:16px; accent-color:var(--brand); margin:0;" />
              <label for="remember-me" style="font-size:var(--font-sm); color:var(--gray-600); cursor:pointer; margin:0;">Lembrar de mim neste computador</label>
            </div>
            
            <button type="submit" class="btn btn-primary w-full" style="height:52px; font-size:var(--font-base); justify-content:center; gap:12px;">
              Entrar no Painel ${icons.arrowRight}
            </button>
            
            <div style="margin-top:var(--space-8); text-align:center;">
              <a href="/" style="font-size:var(--font-sm); color:var(--gray-500); text-decoration:none; display:inline-flex; align-items:center; gap:6px; transition:color 0.2s;">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                Voltar para o site público
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
    
    <style>
      /* Page specific styles to ensure it takes full viewport and overrides default body padding if any */
      body { margin: 0; padding: 0; }
      
      .login-input-icon {
        position: absolute;
        left: 14px;
        top: 50%;
        transform: translateY(-50%);
        color: var(--gray-400);
        width: 18px;
        height: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .login-input-icon svg {
        width: 100%;
        height: 100%;
      }

      
      .admin-login-wrapper {
        display: flex;
        min-height: 100vh;
        width: 100%;
        background: var(--white);
      }
      
      .admin-login-left {
        flex: 1;
        background: linear-gradient(135deg, var(--brand) 0%, #1a365d 100%);
        padding: var(--space-10);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: relative;
        overflow: hidden;
      }
      
      .admin-login-left::before {
        content: '';
        position: absolute;
        top: -20%;
        left: -10%;
        width: 150%;
        height: 150%;
        background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 60%);
        pointer-events: none;
      }
      
      .admin-login-left::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 50%;
        background: url('data:image/svg+xml;utf8,<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path fill="rgba(255,255,255,0.03)" d="M0 100 Q 50 0 100 100 Z"/></svg>') no-repeat bottom right;
        background-size: cover;
        pointer-events: none;
      }
      
      .admin-login-footer {
        color: rgba(255,255,255,0.5);
        font-size: var(--font-xs);
      }
      
      .admin-login-right {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: var(--space-10);
        background: var(--gray-50);
      }
      
      .admin-login-box {
        width: 100%;
        max-width: 440px;
        background: var(--white);
        padding: var(--space-10);
        border-radius: var(--radius-2xl);
        box-shadow: 0 20px 40px rgba(0,0,0,0.08);
        border: 1px solid rgba(255,255,255,0.5);
      }
      
      /* Responsive adjustments */
      @media (max-width: 900px) {
        .admin-login-left {
          display: none;
        }
        .admin-login-right {
          padding: var(--space-6);
        }
        .admin-login-box {
          padding: var(--space-8);
        }
      }
    </style>
  `;
  
  window.__pageInit = () => {};
  return html;
}
