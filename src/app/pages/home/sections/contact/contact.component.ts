import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import emailjs from '@emailjs/browser';
import { IdiomaService } from '../../../../services/idioma.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent {

  private idiomaService = inject(IdiomaService);
  private fb = inject(FormBuilder);
  get t() { return this.idiomaService.t(); }

  contactForm: FormGroup = this.fb.group({
    nome: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(80)]],
    email: ['', [Validators.required, Validators.email, Validators.maxLength(120)]],
    assunto: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(120)]],
    mensagem: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(2000)]]
  });
  enviando = false;
  enviado = false;
  erro = false;

  // IDs do EmailJS
  private SERVICE_ID = 'service_fxlphvd';
  private TEMPLATE_ID = 'template_y5f6tcm';
  private PUBLIC_KEY = 'M1DGtIboV8PVNNXVQ';

  isInvalid(campo: string): boolean {
    const control = this.contactForm.get(campo);
    return !!(control?.invalid && (control?.dirty || control?.touched));
  }

  async enviarEmail() {
    // Marca todos os campos como touched para exibir erros
    this.contactForm.markAllAsTouched();

    if (this.contactForm.invalid) return;

    this.enviando = true;
    this.enviado = false;
    this.erro = false;

    const { nome, email, assunto, mensagem } = this.contactForm.value;

    try {
      await emailjs.send(
        this.SERVICE_ID,
        this.TEMPLATE_ID,
        { nome, email, assunto, mensagem },
        this.PUBLIC_KEY
      );

      this.enviado = true;
      this.contactForm.reset();
      setTimeout(() => this.enviado = false, 4000);

    } catch (err) {
      console.error('Erro ao enviar:', err);
      this.erro = true;
      setTimeout(() => this.erro = false, 4000);

    } finally {
      this.enviando = false;
    }
  }
}