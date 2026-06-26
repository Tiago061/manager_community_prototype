import { icons } from './icons.js';

export function renderFooter() {
  return `
    <footer class="site-footer">
      <div class="footer-inner">
        <div class="footer-grid">
          <div class="footer-brand">
            <div class="footer-brand-name">NENÉM DA CIVIL</div>
            <p class="footer-brand-text">
              Vereador comprometido com a transparência, desenvolvimento e qualidade de vida da nossa comunidade. 
              Trabalhando por você, com você.
            </p>
            <div class="footer-social">
              <a href="#" aria-label="Instagram">${icons.instagram}</a>
              <a href="#" aria-label="Facebook">${icons.facebook}</a>
              <a href="#" aria-label="YouTube">${icons.youtube}</a>
              <a href="#" aria-label="Twitter">${icons.twitter}</a>
            </div>
          </div>
          
          <div>
            <h4 class="footer-col-title">Mapa do Site</h4>
            <div class="footer-links">
              <a href="/">Início</a>
              <a href="/noticias">Notícias</a>
              <a href="/vagas">Portal de Vagas</a>
              <a href="/demandas">Demandas</a>
              <a href="/ouvidoria">Ouvidoria</a>
              <a href="/sobre">Sobre</a>
            </div>
          </div>
          
          <div>
            <h4 class="footer-col-title">Serviços</h4>
            <div class="footer-links">
              <a href="/vagas">Buscar Vagas</a>
              <a href="/demandas">Enviar Demanda</a>
              <a href="/ouvidoria">Ouvidoria</a>
              <a href="/cadastro">Cadastre-se</a>
              <a href="/admin">Área Administrativa</a>
            </div>
          </div>
          
          <div>
            <h4 class="footer-col-title">Contato</h4>
            <div class="footer-contact-item">
              ${icons.mapPin}
              <span>Rua Exemplo, 123 — Centro<br />Cidade Exemplo — UF</span>
            </div>
            <div class="footer-contact-item">
              ${icons.phone}
              <span>(11) 3456-7890</span>
            </div>
            <div class="footer-contact-item">
              <span style="flex-shrink:0;font-size:14px;">📱</span>
              <span>(11) 98765-4321</span>
            </div>
            <div class="footer-contact-item">
              ${icons.mail}
              <span>contato@nenemdacivil.com.br</span>
            </div>
          </div>
        </div>
        
        <div class="footer-bottom">
          <span class="footer-bottom-text">
            © ${new Date().getFullYear()} Vereador Neném da Civil. Todos os direitos reservados.
          </span>
          <span class="footer-bottom-text">
            Desenvolvido com 🧡 para a comunidade
          </span>
        </div>
      </div>
    </footer>
  `;
}
