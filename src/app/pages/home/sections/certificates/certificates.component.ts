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

  readonly badgeClasses = ['cert-badge-blue', 'cert-badge-teal', 'cert-badge-yellow'];
  readonly statusClasses = ['cert-status-done', 'cert-status-progress', 'cert-status-progress'];
  readonly verifyLinks = ['#', 'https://balta.io', 'https://aws.amazon.com/certification/'];
}
