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
      titulo: 'Portfólio Pessoal',
      descricao: 'Portfólio desenvolvido com Angular standalone, animações CSS customizadas, sistema de i18n PT/EN/ES e formulário de contato com EmailJS.',
      urlImagem: 'assets/Portfolio.png',
      urlGithub: 'https://github.com/ruanalexandreS/Portfolio',
      urlDeploy: 'https://portfolio-ruan-alexandre-s.vercel.app/',
      tecnologias: ['Angular', 'TypeScript', 'Tailwind CSS', 'EmailJS', 'Vercel'],
      categoria: 'Frontend'
    },
    {
      id: 2,
      titulo: 'KajitA - E-commerce',
      descricao: 'E-commerce full-stack desenvolvido para o mercado da Colômbia.',
      urlImagem: 'assets/kajita.png',
      urlGithub: 'https://github.com/ruanalexandreS/kajita-app',
      urlDeploy: 'https://kajita-app.vercel.app/',
      tecnologias: ['Angular', 'TypeScript', 'Tailwind CSS', 'Node.js', 'SEO'],
      categoria: 'Full Stack'
    },
    {
      id: 3,
      titulo: 'Korp — Sistema de Notas Fiscais',
      descricao: 'Teste técnico com arquitetura de microsserviços em .NET 8. Dois serviços independentes com EF Core, IHttpClientFactory, middleware global de erros, paginação e frontend Angular com RxJS reativo.',
      urlImagem: 'assets/NotaFiscal.jpeg',
      urlGithub: 'https://github.com/ruanalexandreS/Korp_Teste_RuanAlexandre',
      urlDeploy: '',
      tecnologias: ['C#', '.NET 8', 'Angular', 'EF Core', 'SQL Server', 'Microsserviços'],
      categoria: 'Full Stack'
    },
  ];

  constructor() { }

  listarProjetos(): Observable<Projeto[]> {
    return of(this.projetosFixos);
  }
}