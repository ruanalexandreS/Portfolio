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
}

interface DadosTecnicosProjeto {
  readonly id: number;
  readonly urlImagem: string;
  readonly urlGithub: string;
  readonly urlDeploy: string;
  readonly tecnologias: readonly string[];
}

@Injectable({
  providedIn: 'root'
})
export class ProjetoService {
  private idioma = inject(IdiomaService);

  private readonly dadosTecnicos: readonly DadosTecnicosProjeto[] = [
    {
      id: 1,
      urlImagem: 'assets/Portfolio.png',
      urlGithub: 'https://github.com/ruanalexandreS/Portfolio',
      urlDeploy: 'https://portfolio-ruan-alexandre-s.vercel.app/',
      tecnologias: ['Angular', 'TypeScript', 'Tailwind CSS', 'EmailJS', 'Vercel']
    },
    {
      id: 2,
      urlImagem: 'assets/kajita.png',
      urlGithub: 'https://github.com/ruanalexandreS/kajita-app',
      urlDeploy: 'https://kajita-app.vercel.app/',
      tecnologias: ['Angular', 'TypeScript', 'Tailwind CSS', 'Node.js', 'SEO']
    },
    {
      id: 3,
      urlImagem: 'assets/NotaFiscal.png',
      urlGithub: 'https://github.com/ruanalexandreS/Korp_teste_RuanCampos',
      urlDeploy: 'https://korp-teste-ruan-campos.vercel.app/products',
      tecnologias: ['C#', '.NET 8', 'Angular', 'EF Core', 'SQL Server', 'Microsserviços']
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
        titulo: i18n?.titulo ?? '',
        descricao: i18n?.descricao ?? '',
        categoria: i18n?.categoria ?? ''
      };
    });
  });
}
