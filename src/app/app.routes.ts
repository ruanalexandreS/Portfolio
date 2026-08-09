import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  }, {
    path: 'projetos',
    loadComponent: () =>
      import('./pages/projetos/projetos.component')
        .then(m => m.ProjetosComponent),
  },
  { path: '**', redirectTo: '' }
];
