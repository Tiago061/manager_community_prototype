import { renderHeader, initHeaderEvents } from '../components/header.js';
import { renderFooter } from '../components/footer.js';
import { icons } from '../components/icons.js';
import { newsData, newsCategories } from '../data/news.js';

export function renderNews() {
  const html = `
    ${renderHeader('noticias')}
    <main class="main-content">
      <section class="page-header">
        <div class="page-header-inner">
          <div class="breadcrumb">
            <a href="/">Início</a>
            <span class="breadcrumb-separator">${icons.chevronRight}</span>
            <span>Notícias</span>
          </div>
          <h1 class="page-header-title">Portal de Notícias</h1>
          <p class="page-header-subtitle">Acompanhe todas as notícias e ações do mandato</p>
        </div>
      </section>

      <section class="section-sm">
        <div class="container">
          <div class="flex items-center justify-between gap-4 mb-6" style="flex-wrap:wrap;">
            <div class="search-bar" style="max-width:400px;">
              ${icons.search}
              <input type="text" placeholder="Pesquisar notícias..." id="news-search" />
            </div>
            <div class="flex gap-2" style="flex-wrap:wrap;">
              ${newsCategories.map((cat, i) => `
                <span class="tag ${i === 0 ? 'active' : ''}" data-category="${cat}">${cat}</span>
              `).join('')}
            </div>
          </div>

          ${newsData[0] ? `
          <div class="news-card" style="margin-bottom:var(--space-8);" id="featured-news">
            <div style="display:grid;grid-template-columns:1.2fr 1fr;min-height:360px;">
              <div class="news-card-img" style="aspect-ratio:auto;min-height:360px;">
                <div class="placeholder-icon">${icons.image}</div>
                <span class="news-card-category badge badge-brand">${newsData[0].category}</span>
              </div>
              <div style="padding:var(--space-8);display:flex;flex-direction:column;justify-content:center;">
                <span class="badge badge-brand mb-2" style="align-self:flex-start;">Destaque</span>
                <h2 style="font-size:var(--font-2xl);font-weight:var(--fw-extrabold);color:var(--gray-900);margin-bottom:var(--space-3);line-height:var(--lh-tight);">${newsData[0].title}</h2>
                <p style="color:var(--gray-500);line-height:var(--lh-relaxed);margin-bottom:var(--space-4);">${newsData[0].excerpt}</p>
                <div class="flex items-center gap-4 mb-4">
                  <span class="text-sm text-muted">${newsData[0].date}</span>
                  <span class="news-card-stat">${icons.heart} ${newsData[0].likes}</span>
                  <span class="news-card-stat">${icons.messageCircle} ${newsData[0].comments}</span>
                </div>
                <a href="/noticia/${newsData[0].id}" class="btn btn-primary" style="align-self:flex-start;">Ler notícia completa ${icons.arrowRight}</a>
              </div>
            </div>
          </div>` : ''}

          <div class="grid grid-3">
            ${newsData.slice(1).map(news => `
              <article class="news-card" id="news-list-${news.id}">
                <div class="news-card-img">
                  <div class="placeholder-icon">${icons.image}</div>
                  <span class="news-card-category badge badge-${getCategoryColor(news.category)}">${news.category}</span>
                </div>
                <div class="news-card-body">
                  <h3 class="news-card-title">${news.title}</h3>
                  <p class="news-card-excerpt">${news.excerpt}</p>
                  <div class="news-card-meta">
                    <span class="news-card-date">${news.date}</span>
                    <div class="news-card-stats">
                      <span class="news-card-stat">${icons.heart} ${news.likes}</span>
                      <span class="news-card-stat">${icons.messageCircle} ${news.comments}</span>
                    </div>
                  </div>
                </div>
                <div style="padding:0 20px 20px;">
                  <a href="/noticia/${news.id}" class="btn btn-outline" style="width:100%;">Ler notícia ${icons.arrowRight}</a>
                </div>
              </article>
            `).join('')}
          </div>

          <div class="pagination">
            <button class="pagination-btn">${icons.arrowLeft}</button>
            <button class="pagination-btn active">1</button>
            <button class="pagination-btn">2</button>
            <button class="pagination-btn">3</button>
            <button class="pagination-btn">${icons.arrowRight}</button>
          </div>
        </div>
      </section>
    </main>
    ${renderFooter()}
  `;
  window.__pageInit = () => initHeaderEvents();
  return html;
}

export function renderNewsDetail(params) {
  const newsId = parseInt(params[0]);
  const news = newsData.find(n => n.id === newsId) || newsData[0];
  
  const comments = [
    { name: 'Maria da Silva', initials: 'MS', date: 'Há 2 horas', text: 'Que notícia maravilhosa! Parabéns pelo trabalho.', likes: 12 },
    { name: 'José Santos', initials: 'JS', date: 'Há 5 horas', text: 'Muito bom ver ações como essa na nossa cidade. Continuem assim!', likes: 8 },
    { name: 'Ana Oliveira', initials: 'AO', date: 'Há 1 dia', text: 'Precisamos de mais iniciativas como essa. A comunidade agradece.', likes: 15 },
  ];

  const html = `
    ${renderHeader('noticias')}
    <main class="main-content">
      <section class="page-header">
        <div class="page-header-inner">
          <div class="breadcrumb">
            <a href="/">Início</a>
            <span class="breadcrumb-separator">${icons.chevronRight}</span>
            <a href="/noticias">Notícias</a>
            <span class="breadcrumb-separator">${icons.chevronRight}</span>
            <span>${news.category}</span>
          </div>
        </div>
      </section>

      <section class="section-sm">
        <div class="container" style="max-width:var(--container-lg);">
          <div class="article-hero">
            <div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;color:var(--gray-300);">
              ${icons.image}
            </div>
          </div>

          <div class="article-header">
            <span class="badge badge-${getCategoryColor(news.category)} mb-4">${news.category}</span>
            <h1 class="article-title">${news.title}</h1>
            <div class="article-meta">
              <span class="article-meta-item">
                <div class="avatar avatar-sm avatar-placeholder">AC</div>
                ${news.author}
              </span>
              <span class="article-meta-item">${icons.calendar} ${news.date}</span>
              <span class="article-meta-item">${icons.clock} 5 min de leitura</span>
            </div>
          </div>

          <div class="article-content">
            ${news.content}
          </div>

          <!-- Gallery placeholder -->
          <div style="margin:var(--space-10) 0;">
            <h3 style="margin-bottom:var(--space-4);">Galeria de Fotos</h3>
            <div class="grid grid-3">
              ${[1,2,3].map(() => `
                <div style="aspect-ratio:4/3;background:linear-gradient(135deg,var(--gray-100),var(--gray-200));border-radius:var(--radius-lg);display:flex;align-items:center;justify-content:center;color:var(--gray-300);">
                  ${icons.image}
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Share -->
          <div class="article-share">
            <span class="article-share-label">Compartilhar:</span>
            <button class="share-btn whatsapp">${icons.whatsapp}</button>
            <button class="share-btn facebook">${icons.facebook}</button>
            <button class="share-btn twitter">${icons.twitter}</button>
            <button class="share-btn copy">${icons.copy}</button>
          </div>

          <!-- Reactions -->
          <div style="margin:var(--space-6) 0;">
            <h3 style="margin-bottom:var(--space-4);">O que achou desta notícia?</h3>
            <div class="flex gap-4" style="flex-wrap:wrap;">
              <div class="reactions">
                <button class="reaction" onclick="this.classList.toggle('active')">
                  <span class="reaction-emoji">👍</span>
                  <span class="reaction-count">Gostei · ${news.likes}</span>
                </button>
                <button class="reaction" onclick="this.classList.toggle('active')">
                  <span class="reaction-emoji">❤️</span>
                  <span class="reaction-count">Apoio · 42</span>
                </button>
                <button class="reaction" onclick="this.classList.toggle('active')">
                  <span class="reaction-emoji">👏</span>
                  <span class="reaction-count">Excelente · 28</span>
                </button>
              </div>
            </div>
          </div>

          <!-- Rating -->
          <div style="margin:var(--space-6) 0;padding:var(--space-6);background:var(--gray-50);border-radius:var(--radius-xl);">
            <h3 style="margin-bottom:var(--space-3);">Avalie esta notícia</h3>
            <div class="stars" style="font-size:24px;" id="rating-stars">
              ${[1,2,3,4,5].map(i => `
                <span class="star" data-value="${i}" onclick="rateNews(${i})" style="cursor:pointer;font-size:28px;color:var(--gray-300);">★</span>
              `).join('')}
            </div>
          </div>

          <!-- Comments -->
          <div class="comments-section" id="comments-section">
            <h3 style="margin-bottom:var(--space-6);">Comentários (${comments.length})</h3>
            
            <div style="margin-bottom:var(--space-6);display:flex;gap:var(--space-3);">
              <div class="avatar avatar-placeholder">VC</div>
              <div style="flex:1;">
                <textarea class="form-textarea" placeholder="Deixe seu comentário..." rows="3"></textarea>
                <div class="flex justify-end mt-2">
                  <button class="btn btn-primary btn-sm">${icons.send} Enviar</button>
                </div>
              </div>
            </div>

            ${comments.map(c => `
              <div class="comment">
                <div class="avatar avatar-placeholder">${c.initials}</div>
                <div class="comment-body">
                  <span class="comment-author">${c.name}</span>
                  <span class="comment-date">${c.date}</span>
                  <p class="comment-text">${c.text}</p>
                  <div class="comment-actions">
                    <span class="comment-action" onclick="this.classList.toggle('active')">${icons.thumbsUp} ${c.likes}</span>
                    <span class="comment-action">${icons.reply} Responder</span>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>
    </main>
    ${renderFooter()}
  `;

  window.__pageInit = () => initHeaderEvents();
  window.rateNews = function(value) {
    document.querySelectorAll('#rating-stars .star').forEach((star, i) => {
      star.style.color = i < value ? '#F59E0B' : 'var(--gray-300)';
    });
  };
  return html;
}

function getCategoryColor(category) {
  const colors = { 'Obras': 'brand', 'Educação': 'blue', 'Saúde': 'green', 'Legislação': 'blue', 'Social': 'green', 'Transporte': 'warning' };
  return colors[category] || 'gray';
}
