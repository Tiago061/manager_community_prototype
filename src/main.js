import { router } from './router.js';
import { renderHome } from './pages/home.js';
import { renderNews, renderNewsDetail } from './pages/news.js';
import { renderJobs, renderJobDetail } from './pages/jobs.js';
import { renderCandidateForm } from './pages/candidate-form.js';
import { renderDemands } from './pages/demands.js';
import { renderOmbudsman } from './pages/ombudsman.js';
import { renderAbout, renderContact, renderRegister } from './pages/about.js';
import { renderDashboard } from './pages/admin/dashboard.js';
import { renderNewsMgmt, renderNewsForm } from './pages/admin/news-mgmt.js';
import { renderJobsMgmt, renderJobForm, renderCandidatesMgmt } from './pages/admin/jobs-mgmt.js';
import { renderDemandsMgmt, renderDemandForm, renderCommentsMgmt, renderOmbudsmanMgmt } from './pages/admin/demands-mgmt.js';
import { renderCRM, renderAutomations, renderSettings } from './pages/admin/crm.js';
import { renderAdminLogin } from './pages/admin/login.js';

// Register routes
router.addRoute('/', () => renderHome());
router.addRoute('/noticias', () => renderNews());
router.addRoute('/noticia/:id', (params) => renderNewsDetail(params));
router.addRoute('/vagas', () => renderJobs());
router.addRoute('/vaga/:id', (params) => renderJobDetail(params));
router.addRoute('/demandas', () => renderDemands());
router.addRoute('/sobre', () => renderAbout());
router.addRoute('/contato', () => renderContact());
router.addRoute('/cadastro', () => renderRegister());
router.addRoute('/candidato/novo', () => renderCandidateForm());
router.addRoute('/ouvidoria', () => renderOmbudsman());

// Register admin routes
router.addRoute('/admin/login', () => renderAdminLogin());
router.addRoute('/admin', () => renderDashboard());
router.addRoute('/admin/noticias', () => renderNewsMgmt());
router.addRoute('/admin/noticias/nova', () => renderNewsForm());
router.addRoute('/admin/vagas', () => renderJobsMgmt());
router.addRoute('/admin/vagas/nova', () => renderJobForm());
router.addRoute('/admin/candidatos', () => renderCandidatesMgmt());
router.addRoute('/admin/demandas', () => renderDemandsMgmt());
router.addRoute('/admin/demandas/nova', () => renderDemandForm());
router.addRoute('/admin/comentarios', () => renderCommentsMgmt());
router.addRoute('/admin/ouvidoria', () => renderOmbudsmanMgmt());
router.addRoute('/admin/crm', () => renderCRM());
router.addRoute('/admin/automacoes', () => renderAutomations());
router.addRoute('/admin/configuracoes', () => renderSettings());

// Initialize
console.log('🚀 Plataforma Neném da Civil — Inicializada');
