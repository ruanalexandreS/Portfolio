import { HeroComponent } from './sections/hero/hero.component';
import { Component, OnInit, OnDestroy, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { IdiomaService } from '../../services/idioma.service';
import { ProjetoService, Projeto } from '../../services/projeto.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent, HeroComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {

  idiomaService = inject(IdiomaService);
  projetoService = inject(ProjetoService);
  private cdr = inject(ChangeDetectorRef); // ✅ ADICIONADO

  get t() { return this.idiomaService.textos[this.idiomaService.getIdioma()]; }

  textoExibido = '';
  fraseIndex = 0;
  isApagando = false;
  timeoutId: any;

  velDigitacao = 100;
  velApagando = 50;
  pausaEntreFrases = 2000;

  categorias = ['Todos', 'Full Stack', 'Frontend', 'Backend'];
  categoriaAtiva = 'Todos';
  projetosTodos: Projeto[] = [];
  projetosExibidos: Projeto[] = [];

  experiencias = [
    {
      empresa: 'Prefeitura Municipal de Pojuca — Ouvidoria',
      cargo: 'Estagiário de TI',
      periodo: 'Set 2025 – Dez 2025',
      descricao: 'Contribuí com análise e automação de dados na Ouvidoria Municipal, apoiando a tomada de decisão da gestão pública.',
      bullets: [
        'Desenvolvi consultas SQL e relatórios no Excel para extração e análise de dados operacionais da secretaria.',
        'Automatizei tratamentos de dados com scripts Python, reduzindo retrabalho manual em processos recorrentes.',
        'Construí dashboards interativos no Power BI para monitoramento de indicadores internos.',
        'Integrei sistemas internos via consumo de APIs REST, conectando fontes de dados distintas.'
      ],
      tecnologias: ['SQL Server', 'Python', 'Power BI', 'APIs REST', 'Excel']
    },
  ];

  skills = [
    { nome: 'C# / .NET', nivel: 85, cor: 'bg-blue-500' },
    { nome: 'Angular', nivel: 80, cor: 'bg-red-500' },
    { nome: 'SQL Server', nivel: 75, cor: 'bg-green-500' },
    { nome: 'Espanhol', nivel: 80, cor: 'bg-yellow-500' },
    { nome: 'Engenharia de Prompts', nivel: 85, cor: 'bg-purple-500' }
  ];

  ngOnInit() {
    this.projetoService.listarProjetos().subscribe(projs => {
      this.projetosTodos = projs;
      this.projetosExibidos = projs;
    });

    // ✅ Inicia o typewriter direto — sem depender do subscribe para disparar
    this.iniciarTypewriter();

    // ✅ Quando o idioma muda, reinicia a animação
    this.idiomaService.idioma$.subscribe(() => {
      this.fraseIndex = 0;
      this.textoExibido = '';
      this.isApagando = false;
      if (this.timeoutId) clearTimeout(this.timeoutId);
      this.iniciarTypewriter();
    });
  }

  ngOnDestroy() {
    if (this.timeoutId) clearTimeout(this.timeoutId);
  }

  iniciarTypewriter() {
    const frases = this.t?.hero?.titulosAnimados;
    if (!frases || frases.length === 0) return;

    const fraseAtual = frases[this.fraseIndex];

    if (this.isApagando) {
      this.textoExibido = fraseAtual.substring(0, this.textoExibido.length - 1);
    } else {
      this.textoExibido = fraseAtual.substring(0, this.textoExibido.length + 1);
    }

    // ✅ Força o Angular a detectar a mudança no textoExibido
    this.cdr.detectChanges();

    let velocidade = this.isApagando ? this.velApagando : this.velDigitacao;

    if (!this.isApagando && this.textoExibido === fraseAtual) {
      velocidade = this.pausaEntreFrases;
      this.isApagando = true;
    } else if (this.isApagando && this.textoExibido === '') {
      this.isApagando = false;
      this.fraseIndex = (this.fraseIndex + 1) % frases.length;
      velocidade = 500;
    }

    clearTimeout(this.timeoutId);
    this.timeoutId = setTimeout(() => this.iniciarTypewriter(), velocidade);
  }

  filtrarPor(categoria: string) {
    this.categoriaAtiva = categoria;
    this.projetosExibidos = categoria === 'Todos'
      ? this.projetosTodos
      : this.projetosTodos.filter(p => p.categoria === categoria);
  }

  scrollPara(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}