import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdiomaService } from '../../services/idioma.service';
import { TemaService } from '../../services/tema.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  private idiomaService = inject(IdiomaService);
  private temaService = inject(TemaService);

  isMenuOpen: boolean = false;

  get idiomaAtual() { return this.idiomaService.idioma(); }
  get t() { return this.idiomaService.t(); }
  get tema() { return this.temaService.tema(); }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  scrollTo(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
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
