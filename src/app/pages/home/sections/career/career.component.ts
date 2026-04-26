import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdiomaService, ExperienciaCarreira } from '../../../../services/idioma.service';

@Component({
  selector: 'app-career',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './career.component.html',
  styleUrl: './career.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CareerComponent {
  private idiomaService = inject(IdiomaService);
  get t() { return this.idiomaService.t(); }

  @Input() experiencias: readonly ExperienciaCarreira[] = [];
}
