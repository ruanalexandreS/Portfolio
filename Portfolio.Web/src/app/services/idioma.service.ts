import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class IdiomaService {
    private idiomaAtual = new BehaviorSubject<'PT' | 'EN' | 'ES'>('PT');
    idioma$ = this.idiomaAtual.asObservable();

    alternarIdioma() {
        const atual = this.idiomaAtual.value;
        if (atual === 'PT') this.idiomaAtual.next('EN');
        else if (atual === 'EN') this.idiomaAtual.next('ES');
        else this.idiomaAtual.next('PT');
    }

    getIdioma() {
        return this.idiomaAtual.value;
    }

    textos = {
        PT: {
            menu: { inicio: 'Início', sobre: 'Sobre Mim', carreira: 'Carreira', projetos: 'Projetos', contato: 'Contato' },
            hero: {
                saudacao: 'OLÁ, EU SOU O RUAN',
                titulosAnimados: [
                    'Transformando ideias em Software Real.',
                    'Construindo o futuro com .NET & Angular'
                ],
                desc: 'Estudante de Engenharia de Software focado em criar soluções robustas, escaláveis e performáticas. Transformando café em código limpo. ☕',
                btnProjetos: 'Ver Projetos'
            },
            sobre: {
                titulo: 'Sobre mim',
                p1: 'Minha jornada na programação começou com a curiosidade de entender como as coisas funcionam. Hoje, me especializo no ecossistema Microsoft (.NET / C#) e em interfaces modernas com Angular.',
                p2: 'Busco sempre aplicar boas práticas como SOLID e Clean Code. Meu objetivo é entregar softwares que não sejam apenas bonitos, mas seguros, rápidos e fáceis de manter.'
            },
            titulos: {
                carreira: 'Carreira Profissional',
                carreiraSub: 'Minha trajetória acadêmica e profissional em desenvolvimento de software',
                projetos: 'Projetos Destacados',
                contato: 'Vamos Conversar?',
                contatoSub: 'Estou disponível para novas oportunidades. Se você tem uma vaga, um projeto ou apenas quer bater um papo sobre tecnologia, minha caixa de entrada está aberta!',
                btnContato: 'Mandar E-mail 📧',
                rodape: 'Construído com ❤️ usando Angular & TailwindCSS'
            }
        },
        EN: {
            menu: { inicio: 'Home', sobre: 'About Me', carreira: 'Career', projetos: 'Projects', contato: 'Contact' },
            hero: {
                saudacao: "HI, I'M RUAN",
                titulosAnimados: [
                    'Transforming ideas into Real Software.',
                    'Building the future with .NET & Angular'
                ],
                desc: 'Software Engineering student focused on creating robust, scalable, and high-performance solutions. Turning coffee into clean code. ☕',
                btnProjetos: 'View Projects'
            },
            sobre: {
                titulo: 'About me',
                p1: 'My programming journey began with a curiosity to understand how things work. Today, I specialize in the Microsoft ecosystem (.NET / C#) and modern interfaces with Angular.',
                p2: 'I always strive to apply best practices like SOLID and Clean Code. My goal is to deliver software that is not only beautiful but secure, fast, and easy to maintain.'
            },
            titulos: {
                carreira: 'Professional Career',
                carreiraSub: 'My academic and professional journey in software development',
                projetos: 'Featured Projects',
                contato: "Let's Talk?",
                contatoSub: "I'm available for new opportunities. If you have a job opening, a project, or just want to chat about tech, my inbox is open!",
                btnContato: 'Send Email 📧',
                rodape: 'Built with ❤️ using Angular & TailwindCSS'
            }
        },
        ES: {
            menu: { inicio: 'Inicio', sobre: 'Sobre Mí', carreira: 'Carrera', projetos: 'Proyectos', contato: 'Contacto' },
            hero: {
                saudacao: 'HOLA, SOY RUAN',
                titulosAnimados: [
                    'Transformando ideas en Software Real.',
                    'Construyendo el futuro con .NET & Angular'
                ],
                desc: 'Estudiante de Ingeniería de Software enfocado en crear soluciones robustas, escalables y de alto rendimiento. Transformando café en código limpio. ☕',
                btnProjetos: 'Ver Proyectos'
            },
            sobre: {
                titulo: 'Sobre mí',
                p1: 'Mi viaje en la programação comenzó con la curiosidad de entender como funcionan las cosas. Hoy me especializo en el ecosistema Microsoft (.NET / C#) y en interfaces modernas con Angular.',
                p2: 'Siempre busco aplicar buenas prácticas como SOLID y Clean Code. Mi objetivo es entregar software que no solo sea hermoso, sino seguro, rápido y fácil de mantener.'
            },
            titulos: {
                carreira: 'Carrera Profesional',
                carreiraSub: 'Mi trayectoria académica y profesional en desarrollo de software',
                projetos: 'Proyectos Destacados',
                contato: '¿Hablamos?',
                contatoSub: 'Estoy disponible para nuevas oportunidades. Si tienes una vacante, un proyecto o simplemente quieres hablar de tecnología, ¡mi bandeja de entrada está abierta!',
                btnContato: 'Enviar Correo 📧',
                rodape: 'Construido con ❤️ usando Angular & TailwindCSS'
            }
        }
    };
}