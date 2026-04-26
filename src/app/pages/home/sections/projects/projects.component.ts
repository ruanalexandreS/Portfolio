import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Projeto } from '../../../../services/projeto.service';
import { IdiomaService } from '../../../../services/idioma.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsComponent {
  private idiomaService = inject(IdiomaService);
  get t() { return this.idiomaService.t(); }

  @Input() categorias: readonly string[] = [];
  @Input() categoriaAtiva: string = '';
  @Input() projetosExibidos: Projeto[] = [];
  @Input() filtrarPor!: (cat: string) => void;
}
