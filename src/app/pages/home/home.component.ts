import { HeroComponent } from './sections/hero/hero.component';
import { AboutComponent } from './sections/about/about.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { SkillsComponent } from './sections/skills/skills.component';
import { CareerComponent } from './sections/career/career.component';
import { EducationComponent } from './sections/education/education.component';
import { CertificatesComponent } from './sections/certificates/certificates.component';
import { ContactComponent } from './sections/contact/contact.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { Component, OnInit, OnDestroy, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { IdiomaService } from '../../services/idioma.service';
import { ProjetoService, Projeto } from '../../services/projeto.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent, HeroComponent, AboutComponent, ProjectsComponent, SkillsComponent, CareerComponent, EducationComponent, CertificatesComponent, ContactComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {

  private idiomaService = inject(IdiomaService);
  private projetoService = inject(ProjetoService);
  private cdr = inject(ChangeDetectorRef);

  get t() { return this.idiomaService.t(); }

  textoExibido = '';
  fraseIndex = 0;
  isApagando = false;
  timeoutId: any;

  velDigitacao = 100;
  velApagando = 50;
  pausaEntreFrases = 2000;

  categoriaAtiva = '';

  get categorias(): readonly string[] { return this.t.projetos.filtros; }
  get experiencias() { return this.t.carreira.itens; }
  get projetosTodos(): Projeto[] { return this.projetoService.projetos(); }
  get projetosExibidos(): Projeto[] {
    const filtroTodos = this.categorias[0];
    return this.categoriaAtiva === filtroTodos
      ? this.projetosTodos
      : this.projetosTodos.filter(p => p.categoria === this.categoriaAtiva);
  }

  filtrarPor = (categoria: string): void => {
    this.categoriaAtiva = categoria;
  };

  scrollPara = (id: string): void => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  ngOnInit() {
    this.categoriaAtiva = this.t.projetos.filtros[0];
    this.iniciarTypewriter();

    this.idiomaService.idioma$.subscribe(() => {
      this.categoriaAtiva = this.t.projetos.filtros[0];
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
    const frases = this.t?.hero?.frases;
    if (!frases || frases.length === 0) return;

    const fraseAtual = frases[this.fraseIndex];

    if (this.isApagando) {
      this.textoExibido = fraseAtual.substring(0, this.textoExibido.length - 1);
    } else {
      this.textoExibido = fraseAtual.substring(0, this.textoExibido.length + 1);
    }

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
}
