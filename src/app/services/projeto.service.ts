import { Injectable, computed, inject } from '@angular/core';
import { IdiomaService } from './idioma.service';

export interface Projeto {
  id: number;
  titulo: string;
  descricao: string;
  urlImagem: string;
  urlGithub: string;
  urlDeploy: string;
  tecnologias: readonly string[];
  categoria: string;
  /** true = aparece na vitrine da home. /projetos lista todos. */
  destaque: boolean;
}

interface DadosTecnicosProjeto {
  readonly id: number;
  readonly urlImagem: string;
  readonly urlGithub: string;
  readonly urlDeploy: string;
  readonly tecnologias: readonly string[];
  readonly destaque: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ProjetoService {
  private idioma = inject(IdiomaService);

  private readonly dadosTecnicos: readonly DadosTecnicosProjeto[] = [
    {
      id: 1,
      urlImagem: 'assets/Portfolio.webp',
      urlGithub: 'https://github.com/ruanalexandreS/Portfolio',
      urlDeploy: 'https://portfolio-ruan-alexandre-s.vercel.app/',
      tecnologias: ['Angular 21', 'TypeScript', 'TailwindCSS', 'RxJS', 'Signals', 'EmailJS', 'Vercel'],
      destaque: true
    },
    {
      id: 2,
      urlImagem: 'assets/kajita.webp',
      urlGithub: 'https://github.com/ruanalexandreS/kajita-app',
      urlDeploy: 'https://kajita-app.vercel.app/',
      tecnologias: ['Angular', 'TypeScript', 'Tailwind CSS', 'Node.js', 'SEO'],
      destaque: true
    },
    {
      id: 3,
      urlImagem: 'assets/NotaFiscal.webp',
      urlGithub: 'https://github.com/ruanalexandreS/Korp_teste_RuanCampos',
      urlDeploy: 'https://korp-teste-ruan-campos.vercel.app/products',
      tecnologias: ['C#', '.NET 8', 'ASP.NET Core', 'Angular', 'EF Core', 'SQL Server', 'IHttpClientFactory', 'Microsserviços'],
      destaque: true
    },
    {
      id: 4,
      urlImagem: 'assets/latam.webp',
      urlGithub: 'https://github.com/ruanalexandreS/latam-explorer',
      urlDeploy: 'https://latam-explorer.vercel.app',
      tecnologias: ['HTML5', 'CSS3', 'JavaScript', 'ES6 Modules', 'CSS Grid', 'Vanilla JS', 'Vercel'],
      destaque: false
    }
  ];

  readonly projetos = computed<Projeto[]>(() => {
    const lista = this.idioma.t().projetos.lista;
    return this.dadosTecnicos.map(d => {
      const i18n = lista.find(x => x.id === d.id);
      return {
        id: d.id,
        urlImagem: d.urlImagem,
        urlGithub: d.urlGithub,
        urlDeploy: d.urlDeploy,
        tecnologias: d.tecnologias,
        destaque: d.destaque,
        titulo: i18n?.titulo ?? '',
        descricao: i18n?.descricao ?? '',
        categoria: i18n?.categoria ?? ''
      };
    });
  });
}
