import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Projeto {
  id?: number;
  titulo: string;
  descricao: string;
  urlImagem: string;
  urlGithub: string;
  urlDeploy: string;
  tecnologias: string[];
  categoria: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProjetoService {

  private projetosFixos: Projeto[] = [
    {
      id: 1,
      titulo: 'Dashboard Financeiro',
      descricao: 'Um painel interativo para controle de gastos pessoais com gráficos.',
      urlImagem: 'https://via.placeholder.com/600x400',
      urlGithub: 'https://github.com/ruanalexandreS/seu-repo',
      urlDeploy: 'https://seusite.com',
      tecnologias: ['Angular', 'ChartJS'],
      categoria: 'Frontend'
    },
    {
      id: 2,
      titulo: 'KajitA - E-commerce',
      descricao: 'E-commerce full-stack desenvolvido para o mercado da Colômbia.',
      urlImagem: 'assets/kajita.png',
      urlGithub: 'https://github.com/ruanalexandreS/kajita',
      urlDeploy: 'https://kajita-app.vercel.app/',
      tecnologias: ['Angular', 'Node.js'],
      categoria: 'Full Stack'
    }
  ];

  constructor() { }

  listarProjetos(): Observable<Projeto[]> {
    return of(this.projetosFixos);
  }
}