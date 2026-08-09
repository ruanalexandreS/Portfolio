import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IsActiveMatchOptions, RouterLink, RouterLinkActive } from '@angular/router';
import { IdiomaService } from '../../services/idioma.service';
import { TemaService } from '../../services/tema.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  private idiomaService = inject(IdiomaService);
  private temaService = inject(TemaService);

  isMenuOpen: boolean = false;

  // O fragment precisa entrar na comparação: todos os links de seção apontam
  // para '/', então sem isso o RouterLinkActive marcaria todos ao mesmo tempo.
  readonly matchExato: IsActiveMatchOptions = {
    paths: 'exact',
    queryParams: 'exact',
    fragment: 'exact',
    matrixParams: 'ignored'
  };

  get idiomaAtual() { return this.idiomaService.idioma(); }
  get t() { return this.idiomaService.t(); }
  get tema() { return this.temaService.tema(); }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  fecharMenu(): void {
    this.isMenuOpen = false;
  }

  toggleIdioma(): void {
    this.idiomaService.alternarIdioma();
  }

  toggleTema(): void {
    this.temaService.alternar();
  }

  voltarAoTopo(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.isMenuOpen = false;
  }
}
