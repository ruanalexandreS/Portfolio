import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Projeto } from '../../../../services/projeto.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  @Input() t: any;
  @Input() categorias: string[] = [];
  @Input() categoriaAtiva: string = 'Todos';
  @Input() projetosExibidos: Projeto[] = [];
  @Input() filtrarPor!: (cat: string) => void;
}
