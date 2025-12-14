import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'chamados',
    loadComponent: () =>
      import('./chamados/pages/page-gerenciamento-chamados/page-gerenciamento-chamados.component')
        .then(m => m.PageGerenciamentoChamadosComponent),
  },
  {
    path: 'chamados/novo',
    loadComponent: () =>
      import('./chamados/pages/page-criacao-edicao-chamados/page-criacao-edicao-chamados.component')
        .then(m => m.PageCriacaoEdicaoChamadosComponent),
  },
  {
    path: 'chamados/:id/editar',
    loadComponent: () =>
      import('./chamados/pages/page-criacao-edicao-chamados/page-criacao-edicao-chamados.component')
        .then(m => m.PageCriacaoEdicaoChamadosComponent),
  },
  { path: '', pathMatch: 'full', redirectTo: 'chamados' },
];
