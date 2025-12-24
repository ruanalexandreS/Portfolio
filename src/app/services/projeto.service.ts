import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

export interface Projeto {
  id?: number;
  titulo: string;
  descricaoPT: string;
  urlImagem: string;
  urlGithub: string;
  urlDeploy: string;
  tecnologias: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProjetoService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:5296/projetos';

  constructor() { }

  listarProjetos(): Observable<Projeto[]> {
    return this.http.get<Projeto[]>(this.apiUrl);
  }
}
