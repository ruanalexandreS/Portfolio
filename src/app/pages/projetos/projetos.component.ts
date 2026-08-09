import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { ProjetoService } from '../../services/projeto.service';
import { ProjectsComponent } from '../home/sections/projects/projects.component';

@Component({
    selector: 'app-projetos-page',
    standalone: true,
    imports: [ProjectsComponent],
    templateUrl: './projetos.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjetosComponent {
    private projetoService = inject(ProjetoService);
    readonly categorias = ['Todos', 'Full Stack', 'Frontend', 'Backend'] as const;
    categoriaAtiva = signal('Todos');
    private todos = this.projetoService.projetos;
    projetosExibidos = computed(() => this.categoriaAtiva() === 'Todos'
        ? this.todos() : this.todos().filter(p => p.categoria === this.categoriaAtiva()));
    filtrarPor = (cat: string) => this.categoriaAtiva.set(cat);
}