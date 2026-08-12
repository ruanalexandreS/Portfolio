import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdiomaService } from '../../../../services/idioma.service';

@Component({
  selector: 'app-certificates',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CertificatesComponent {
  private idiomaService = inject(IdiomaService);
  get t() { return this.idiomaService.t(); }

  /* Decoração puramente posicional: as cores não descrevem o certificado,
     só alternam pela posição no grid. Ficam aqui, não no i18n.
     O módulo garante que nunca retornem undefined, independente de quantos
     certificados a lista tiver. */
  private readonly badges = ['cert-badge-blue', 'cert-badge-teal', 'cert-badge-yellow'];
  private readonly statuses = ['cert-status-done', 'cert-status-progress', 'cert-status-preparation'];

  badgeClasse(i: number): string {
    return this.badges[i % this.badges.length];
  }

  statusClasse(i: number): string {
    return this.statuses[i % this.statuses.length];
  }
}
