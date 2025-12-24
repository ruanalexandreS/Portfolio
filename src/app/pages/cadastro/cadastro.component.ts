import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importante para o formulário funcionar
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CommonModule, FormsModule], // Adicione o FormsModule aqui
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {

  // Objeto que guarda os dados do formulário
  projeto = {
    titulo: '',
    descricaoPT: '',
    tecnologias: '',
    urlImagem: '',
    urlGithub: '',
    urlDeploy: ''
  };

  constructor(private router: Router) {}

  salvar() {
    console.log('Projeto salvo:', this.projeto);
    
    // AQUI ENTRARIA A CHAMADA PARA O SEU BACK-END (API)
    // Por enquanto, vamos simular e voltar para a Home
    alert('Projeto cadastrado com sucesso! (Simulação)');
    this.router.navigate(['/']);
  }

  voltar() {
    this.router.navigate(['/']);
  }
}