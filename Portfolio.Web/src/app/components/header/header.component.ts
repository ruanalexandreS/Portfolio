import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdiomaService } from '../../services/idioma.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  // Conectando com o nosso Serviço
  idiomaService = inject(IdiomaService);

  isMenuOpen: boolean = false;

  // Lendo o idioma e os textos direto do Serviço
  get idiomaAtual() { return this.idiomaService.getIdioma(); }
  get t() { return this.idiomaService.textos[this.idiomaAtual].menu; }

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
    // Serviço para girar entre os idiomas (PT -> EN -> ES)
    this.idiomaService.alternarIdioma();
  }

  voltarAoTopo(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.isMenuOpen = false;
  }
}