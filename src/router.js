export class Router {
  constructor() {
    this.routes = {};
    this.currentPage = null;
    this.beforeNavigate = null;
    window.addEventListener('popstate', () => this.handleRoute());
    window.addEventListener('load', () => this.handleRoute());
    
    // Intercept all link clicks for history API routing
    document.body.addEventListener('click', e => {
      const link = e.target.closest('a');
      if (link && link.href && link.href.startsWith(window.location.origin)) {
        e.preventDefault();
        const path = link.getAttribute('href');
        this.navigate(path);
      }
    });
  }

  addRoute(path, handler) {
    this.routes[path] = handler;
    return this;
  }

  handleRoute() {
    let path = window.location.pathname || '/';
    if (!path.startsWith('/')) path = '/' + path;

    let handler = this.routes[path];
    let routeParams = [];

    if (!handler) {
      for (const [pattern, h] of Object.entries(this.routes)) {
        const parts = pattern.split('/').filter(Boolean);
        const pathParts = path.split('/').filter(Boolean);
        if (parts.length === pathParts.length) {
          let match = true;
          const extractedParams = [];
          for (let i = 0; i < parts.length; i++) {
            if (parts[i].startsWith(':')) {
              extractedParams.push(pathParts[i]);
            } else if (parts[i] !== pathParts[i]) {
              match = false;
              break;
            }
          }
          if (match) {
            handler = h;
            routeParams = extractedParams;
            break;
          }
        }
      }
    }

    if (!handler) {
      handler = this.routes['/'] || (() => '<h1>Página não encontrada</h1>');
    }

    if (this.beforeNavigate) {
      this.beforeNavigate(path);
    }

    this.render(handler, routeParams);
  }

  async render(handler, params) {
    const app = document.getElementById('app');
    const content = await handler(params);
    
    // Get current main content and add transition
    const mainContent = app.querySelector('.main-content') || app.querySelector('.admin-layout');
    if (mainContent) {
      mainContent.style.opacity = '0';
      mainContent.style.transform = 'translateY(8px)';
      await new Promise(r => setTimeout(r, 150));
    }
    
    app.innerHTML = content;
    
    // Animate in
    const newMain = app.querySelector('.main-content') || app.querySelector('.admin-layout');
    if (newMain) {
      newMain.style.opacity = '0';
      newMain.style.transform = 'translateY(8px)';
      newMain.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
      requestAnimationFrame(() => {
        newMain.style.opacity = '1';
        newMain.style.transform = 'translateY(0)';
      });
    }

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Initialize scroll reveal
    this.initScrollReveal();
    
    // Run page-specific init
    if (window.__pageInit) {
      window.__pageInit();
      window.__pageInit = null;
    }
  }

  initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');
    if (!reveals.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    reveals.forEach(el => observer.observe(el));
  }

  navigate(path) {
    if (window.location.pathname !== path) {
      window.history.pushState(null, '', path);
      this.handleRoute();
    }
  }
}

export const router = new Router();
