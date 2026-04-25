import { Injectable, computed, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type Idioma = 'PT' | 'EN' | 'ES';

export interface MenuTextos {
    readonly inicio: string;
    readonly sobre: string;
    readonly projetos: string;
    readonly habilidades: string;
    readonly carreira: string;
    readonly educacao: string;
    readonly certificados: string;
    readonly contato: string;
    readonly labelIdioma: string;
}

export interface HeroTextos {
    readonly saudacao: string;
    readonly subtitulo: string;
    readonly subtituloStatus: string;
    readonly frases: readonly string[];
    readonly descricao: string;
    readonly botaoProjetos: string;
    readonly botaoContato: string;
    readonly linkGithub: string;
    readonly linkLinkedin: string;
}

export interface SobreTextos {
    readonly titulo: string;
    readonly subtituloLinha1: string;
    readonly subtituloLinha2: string;
    readonly paragrafo1: string;
    readonly paragrafo2: string;
    readonly paragrafo3: string;
    readonly botaoCV: string;
    readonly badgeBackend: string;
    readonly badgeAws: string;
    readonly badgeJunior: string;
}

export interface TitulosTextos {
    readonly projetos: string;
    readonly projetosSub: string;
    readonly habilidades: string;
    readonly habilidadesSub: string;
    readonly carreira: string;
    readonly carreiraSub: string;
    readonly educacao: string;
    readonly educacaoSub: string;
    readonly certificados: string;
    readonly certificadosSub: string;
    readonly contato: string;
    readonly contatoSub: string;
}

export interface ItemProjetoI18n {
    readonly id: number;
    readonly titulo: string;
    readonly descricao: string;
    readonly categoria: string;
}

export interface ProjetosTextos {
    readonly filtros: readonly string[];
    readonly verGithub: string;
    readonly verDeploy: string;
    readonly semProjetos: string;
    readonly lista: readonly ItemProjetoI18n[];
}

export interface CategoriaHabilidade {
    readonly titulo: string;
    readonly itens: readonly string[];
}

export interface HabilidadesTextos {
    readonly backend: CategoriaHabilidade;
    readonly frontend: CategoriaHabilidade;
    readonly devops: CategoriaHabilidade;
    readonly banco: CategoriaHabilidade;
    readonly outros: CategoriaHabilidade;
    readonly tituloTagsAdicionais: string;
    readonly tagsAdicionais: readonly string[];
}

export interface ExperienciaCarreira {
    readonly cargo: string;
    readonly empresa: string;
    readonly periodo: string;
    readonly descricao: string;
    readonly bullets: readonly string[];
    readonly tecnologias: readonly string[];
}

export interface CarreiraTextos {
    readonly itens: readonly ExperienciaCarreira[];
    readonly labelTecnologias: string;
}

export interface ItemEducacao {
    readonly curso: string;
    readonly instituicao: string;
    readonly periodo: string;
    readonly status: string;
    readonly descricao: string;
    readonly tags: readonly string[];
}

export interface EducacaoTextos {
    readonly itens: readonly ItemEducacao[];
}

export interface ItemCertificado {
    readonly nome: string;
    readonly emissor: string;
    readonly ano: string;
    readonly status: string;
    readonly habilidades: readonly string[];
    readonly credencial: string;
    readonly botaoAcao: string;
}

export interface CertificadosTextos {
    readonly itens: readonly ItemCertificado[];
    readonly labelHabilidades: string;
    readonly labelCredencial: string;
    readonly aprendizadoTitulo: string;
    readonly aprendizadoDescricao: string;
    readonly aprendizadoTags: readonly string[];
}

export interface ContatoTextos {
    readonly tituloLeft: string;
    readonly descricaoLeft: string;
    readonly labelEmail: string;
    readonly valorEmail: string;
    readonly labelLocalizacao: string;
    readonly valorLocalizacao: string;
    readonly labelTempoResposta: string;
    readonly valorTempoResposta: string;
    readonly labelRedes: string;
    readonly tituloForm: string;
    readonly labelNome: string;
    readonly labelEmailForm: string;
    readonly labelAssunto: string;
    readonly labelMensagem: string;
    readonly placeholderNome: string;
    readonly placeholderEmail: string;
    readonly placeholderAssunto: string;
    readonly placeholderMensagem: string;
    readonly botaoEnviar: string;
    readonly enviando: string;
    readonly enviado: string;
    readonly erro: string;
    readonly erroNome: string;
    readonly erroEmail: string;
    readonly erroEmailInvalido: string;
    readonly erroAssunto: string;
    readonly erroMensagem: string;
    readonly tituloGithub: string;
    readonly tituloLinkedin: string;
    readonly tituloEmailBtn: string;
}

export interface FooterTextos {
    readonly direitos: string;
    readonly feito: string;
    readonly navSobre: string;
    readonly navProjetos: string;
    readonly navCarreira: string;
    readonly navContato: string;
    readonly taglineLinha1: string;
    readonly taglineLinha2: string;
    readonly taglineHighlight1: string;
    readonly taglineHighlight2: string;
}

export interface Textos {
    readonly menu: MenuTextos;
    readonly hero: HeroTextos;
    readonly sobre: SobreTextos;
    readonly titulos: TitulosTextos;
    readonly projetos: ProjetosTextos;
    readonly habilidades: HabilidadesTextos;
    readonly carreira: CarreiraTextos;
    readonly educacao: EducacaoTextos;
    readonly certificados: CertificadosTextos;
    readonly contato: ContatoTextos;
    readonly footer: FooterTextos;
}

// TODO: DomSanitizer — se, no futuro, algum campo abaixo passar a conter HTML, sanitizar
// antes de usar [innerHTML]: sobre.paragrafo1/2/3, carreira.itens[].descricao,
// educacao.itens[].descricao, certificados.aprendizadoDescricao e projetos.lista[].descricao.
const TEXTOS = {
    PT: {
        menu: {
            inicio: 'Início',
            sobre: 'Sobre Mim',
            projetos: 'Projetos',
            habilidades: 'Habilidades',
            carreira: 'Carreira',
            educacao: 'Formação',
            certificados: 'Certificados',
            contato: 'Contato',
            labelIdioma: 'Idioma'
        },
        hero: {
            saudacao: 'OLÁ, EU SOU O RUAN',
            subtitulo: '.NET Backend Developer',
            subtituloStatus: 'em Formação',
            frases: [
                'Transformando ideias em Software Real.',
                'Construindo o futuro com .NET & Angular',
                'Transformando café em código limpo.'
            ],
            descricao: 'Estudante de Engenharia de Software focado em criar soluções robustas, escaláveis e performáticas. Transformando café em código limpo. ☕',
            botaoProjetos: 'Ver Projetos',
            botaoContato: 'Entrar em Contato',
            linkGithub: 'GitHub',
            linkLinkedin: 'LinkedIn'
        },
        sobre: {
            titulo: 'Sobre Mim',
            subtituloLinha1: 'Da Determinação ao Código:',
            subtituloLinha2: 'Construindo o Futuro Backend',
            paragrafo1: 'Minha jornada na tecnologia nasceu de uma vontade genuína de criar soluções que realmente funcionam. Com +3 anos estudando programação, hoje estou na reta final da transição para minha primeira vaga como desenvolvedor, com foco total em .NET Backend.',
            paragrafo2: 'Sou estudante de Engenharia de Software na UniCesumar e sigo a trilha .NET Backend Developer no Balta.io — enquanto trabalho de dia e codifico de noite. Disciplina é meu diferencial.',
            paragrafo3: 'Hoje estou construindo minha base sólida em C#, ASP.NET, SQL e me preparando para a certificação AWS.',
            botaoCV: 'Baixar Currículo',
            badgeBackend: '⚙ .NET Backend Developer',
            badgeAws: '☁ AWS em Formação',
            badgeJunior: '◈ Full-Stack Junior'
        },
        titulos: {
            projetos: 'Projetos Destacados',
            projetosSub: 'Uma seleção dos projetos que construí durante minha jornada',
            habilidades: 'Habilidades Técnicas',
            habilidadesSub: 'Tecnologias e ferramentas que uso no dia a dia',
            carreira: 'Carreira Profissional',
            carreiraSub: 'Minha trajetória acadêmica e profissional em desenvolvimento de software',
            educacao: 'Formação Acadêmica',
            educacaoSub: 'Minha base educacional em tecnologia',
            certificados: 'Meus Certificados',
            certificadosSub: 'Formações e cursos que validam minha jornada',
            contato: 'Vamos Conversar?',
            contatoSub: 'Estou disponível para novas oportunidades. Se você tem uma vaga, um projeto ou apenas quer bater um papo sobre tecnologia, minha caixa de entrada está aberta!'
        },
        projetos: {
            filtros: ['Todos', 'Full Stack', 'Frontend', 'Backend'],
            verGithub: 'Ver Código',
            verDeploy: 'Ver Demo',
            semProjetos: 'Nenhum projeto nesta categoria.',
            lista: [
                { id: 1, titulo: 'Portfólio Pessoal', descricao: 'Portfólio desenvolvido com Angular standalone, animações CSS customizadas, sistema de i18n PT/EN/ES e formulário de contato com EmailJS.', categoria: 'Frontend' },
                { id: 2, titulo: 'KajitA - E-commerce', descricao: 'E-commerce full-stack desenvolvido para o mercado da Colômbia.', categoria: 'Full Stack' },
                { id: 3, titulo: 'Korp — Sistema de Notas Fiscais', descricao: 'Teste técnico com arquitetura de microsserviços em .NET 8. Dois serviços independentes com EF Core, IHttpClientFactory, middleware global de erros, paginação e frontend Angular com RxJS reativo.', categoria: 'Full Stack' }
            ]
        },
        habilidades: {
            backend: { titulo: 'Desenvolvimento Backend', itens: ['C#', 'ASP.NET Core', 'SQL Server', 'REST APIs'] },
            frontend: { titulo: 'Desenvolvimento Frontend', itens: ['Angular', 'TypeScript', 'HTML / CSS', 'TailwindCSS'] },
            devops: { titulo: 'Cloud & DevOps', itens: ['AWS (em formação)', 'Docker', 'Git / GitHub', 'CI/CD'] },
            banco: { titulo: 'Banco de Dados', itens: ['SQL Server', 'PostgreSQL', 'Entity Framework', 'Dapper'] },
            outros: { titulo: 'Soft Skills & Outros', itens: ['SOLID / Clean Code', 'Inglês', 'Espanhol', 'Resolução de Problemas'] },
            tituloTagsAdicionais: 'Tecnologias & Ferramentas Adicionais',
            tagsAdicionais: ['Git', 'Docker', 'AWS', 'SQL Server', 'PostgreSQL', 'Entity Framework', 'Dapper', 'Swagger', 'JWT', 'OAuth', 'xUnit', 'Linux']
        },
        carreira: {
            labelTecnologias: 'TECNOLOGIAS USADAS',
            itens: [
                {
                    cargo: 'Estagiário de TI',
                    empresa: 'Prefeitura Municipal de Pojuca — Ouvidoria',
                    periodo: 'Set 2025 – Dez 2025',
                    descricao: 'Contribuí com análise e automação de dados na Ouvidoria Municipal, apoiando a tomada de decisão da gestão pública.',
                    bullets: [
                        'Desenvolvi consultas SQL e relatórios no Excel para extração e análise de dados operacionais da secretaria.',
                        'Automatizei tratamentos de dados com scripts Python, reduzindo retrabalho manual em processos recorrentes.',
                        'Construí dashboards interativos no Power BI para monitoramento de indicadores internos.',
                        'Integrei sistemas internos via consumo de APIs REST, conectando fontes de dados distintas.'
                    ],
                    tecnologias: ['SQL Server', 'Python', 'Power BI', 'APIs REST', 'Excel']
                }
            ]
        },
        educacao: {
            itens: [
                {
                    curso: 'Bacharelado em Engenharia de Software',
                    instituicao: 'UniCesumar',
                    periodo: 'Jan 2025 – Dez 2028',
                    status: 'Em Andamento',
                    descricao: 'Bacharelado focado na formação prática de Engenheiros de Software, cobrindo todas as etapas do desenvolvimento. Grade curricular projetada para construir soluções de ponta a ponta, incluindo Análise de Requisitos, Arquitetura de Software, Programação Orientada a Objetos e Banco de Dados.',
                    tags: ['POO', 'Estruturas de Dados', 'Banco de Dados', 'Engenharia de Requisitos', 'Metodologias Ágeis', 'Qualidade de Software']
                },
                {
                    curso: 'Trilha .NET Backend Developer',
                    instituicao: 'Balta.io',
                    periodo: '2024 – Atual',
                    status: 'Em Andamento',
                    descricao: 'Trilha especializada em desenvolvimento Backend com .NET 8 e C#, com foco em arquitetura limpa, boas práticas e padrões de projeto amplamente usados no mercado.',
                    tags: ['.NET 8', 'C#', 'ASP.NET Core', 'EF Core', 'Arquitetura Limpa', 'SQL Server']
                }
            ]
        },
        certificados: {
            labelHabilidades: 'Habilidades Cobertas:',
            labelCredencial: 'ID de Credencial:',
            aprendizadoTitulo: 'Contínuo Aprendizado',
            aprendizadoDescricao: 'Atualmente me preparando para certificações e aprofundando conhecimentos em .NET, AWS e boas práticas de engenharia de software.',
            aprendizadoTags: ['AWS Cloud Practitioner', 'AZ-900 Azure', 'Docker Certified'],
            itens: [
                { nome: 'C# Completo e Orientado a Objetos', emissor: 'Udemy', ano: '2024', status: 'Concluído', habilidades: ['C#', 'POO', 'SOLID', 'Collections'], credencial: 'UC-XXXXXXXX', botaoAcao: 'Verificar' },
                { nome: '.NET Backend Developer', emissor: 'Balta.io', ano: 'Em andamento', status: 'Em Progresso', habilidades: ['ASP.NET Core', 'EF Core', 'SQL Server', 'Clean Architecture'], credencial: 'Em andamento', botaoAcao: 'Ver Curso' },
                { nome: 'AWS Cloud Practitioner', emissor: 'Amazon Web Services', ano: 'Previsto 2025', status: 'Em Preparação', habilidades: ['EC2', 'S3', 'Lambda', 'Cloud Architecture'], credencial: 'Em preparação', botaoAcao: 'Ver Mais' }
            ]
        },
        contato: {
            tituloLeft: 'Vamos Conversar',
            descricaoLeft: 'Seja para uma vaga de desenvolvedor, um projeto freelance ou apenas para trocar ideias sobre tecnologia — estou aqui. Respondo em até 24 horas.',
            labelEmail: 'EMAIL',
            valorEmail: 'ruanalexandre625@gmail.com',
            labelLocalizacao: 'LOCALIZAÇÃO',
            valorLocalizacao: 'BA — Disponível Remoto',
            labelTempoResposta: 'TEMPO DE RESPOSTA',
            valorTempoResposta: 'Dentro de 24 horas',
            labelRedes: 'CONECTE-SE COMIGO',
            tituloForm: 'Envie uma Mensagem',
            labelNome: 'Seu Nome',
            labelEmailForm: 'Seu Email',
            labelAssunto: 'Assunto',
            labelMensagem: 'Sua Mensagem',
            placeholderNome: 'Seu Nome',
            placeholderEmail: 'seu@email.com',
            placeholderAssunto: 'Oportunidade de trabalho / Projeto / etc.',
            placeholderMensagem: 'Conte sobre a oportunidade ou projeto...',
            botaoEnviar: 'Enviar Mensagem',
            enviando: 'Enviando...',
            enviado: 'Mensagem Enviada!',
            erro: 'Erro — Tente novamente',
            erroNome: 'Nome é obrigatório',
            erroEmail: 'Email é obrigatório',
            erroEmailInvalido: 'Email inválido',
            erroAssunto: 'Assunto é obrigatório',
            erroMensagem: 'Mensagem é obrigatória',
            tituloGithub: 'GitHub',
            tituloLinkedin: 'LinkedIn',
            tituloEmailBtn: 'Email'
        },
        footer: {
            direitos: 'Feito em 2025 · Todos os direitos reservados.',
            feito: 'Construído com ❤️ usando Angular & TailwindCSS',
            navSobre: 'Sobre Mim',
            navProjetos: 'Projetos',
            navCarreira: 'Carreira',
            navContato: 'Contato',
            taglineLinha1: 'Construindo soluções robustas',
            taglineLinha2: 'Aprendendo todos os dias',
            taglineHighlight1: '.NET Backend Development',
            taglineHighlight2: 'AWS em Formação'
        }
    },
    EN: {
        menu: {
            inicio: 'Home',
            sobre: 'About',
            projetos: 'Projects',
            habilidades: 'Skills',
            carreira: 'Career',
            educacao: 'Education',
            certificados: 'Certificates',
            contato: 'Contact',
            labelIdioma: 'Language'
        },
        hero: {
            saudacao: "HI, I'M RUAN",
            subtitulo: '.NET Backend Developer',
            subtituloStatus: 'in Training',
            frases: [
                'Transforming ideas into Real Software.',
                'Building the future with .NET & Angular',
                'Turning coffee into clean code.'
            ],
            descricao: 'Software Engineering student focused on creating robust, scalable, and high-performance solutions. Turning coffee into clean code. ☕',
            botaoProjetos: 'View Projects',
            botaoContato: 'Get in Touch',
            linkGithub: 'GitHub',
            linkLinkedin: 'LinkedIn'
        },
        sobre: {
            titulo: 'About Me',
            subtituloLinha1: 'From Determination to Code:',
            subtituloLinha2: 'Building the Backend Future',
            paragrafo1: 'My tech journey was born from a genuine desire to build solutions that actually work. With 3+ years studying programming, I am now in the final stretch of transitioning to my first developer role, with a total focus on .NET Backend.',
            paragrafo2: "I'm a Software Engineering student at UniCesumar and I follow the .NET Backend Developer track at Balta.io — working by day and coding by night. Discipline is my differentiator.",
            paragrafo3: "Today I'm building a solid foundation in C#, ASP.NET, SQL and preparing for the AWS certification.",
            botaoCV: 'Download Resume',
            badgeBackend: '⚙ .NET Backend Developer',
            badgeAws: '☁ AWS in Training',
            badgeJunior: '◈ Full-Stack Junior'
        },
        titulos: {
            projetos: 'Featured Projects',
            projetosSub: 'A selection of projects I built during my journey',
            habilidades: 'Technical Skills',
            habilidadesSub: 'Technologies and tools I use every day',
            carreira: 'Professional Career',
            carreiraSub: 'My academic and professional journey in software development',
            educacao: 'Academic Background',
            educacaoSub: 'My educational foundation in technology',
            certificados: 'My Certificates',
            certificadosSub: 'Courses and programs that validate my journey',
            contato: "Let's Talk?",
            contatoSub: "I'm available for new opportunities. If you have a job opening, a project, or just want to chat about tech, my inbox is open!"
        },
        projetos: {
            filtros: ['All', 'Full Stack', 'Frontend', 'Backend'],
            verGithub: 'View Code',
            verDeploy: 'View Demo',
            semProjetos: 'No projects in this category.',
            lista: [
                { id: 1, titulo: 'Personal Portfolio', descricao: 'Portfolio built with standalone Angular, custom CSS animations, PT/EN/ES i18n system, and a contact form powered by EmailJS.', categoria: 'Frontend' },
                { id: 2, titulo: 'KajitA - E-commerce', descricao: 'Full-stack e-commerce built for the Colombian market.', categoria: 'Full Stack' },
                { id: 3, titulo: 'Korp — Invoice System', descricao: 'Technical challenge featuring a .NET 8 microservices architecture. Two independent services with EF Core, IHttpClientFactory, global error middleware, pagination and a reactive RxJS Angular frontend.', categoria: 'Full Stack' }
            ]
        },
        habilidades: {
            backend: { titulo: 'Backend Development', itens: ['C#', 'ASP.NET Core', 'SQL Server', 'REST APIs'] },
            frontend: { titulo: 'Frontend Development', itens: ['Angular', 'TypeScript', 'HTML / CSS', 'TailwindCSS'] },
            devops: { titulo: 'Cloud & DevOps', itens: ['AWS (in training)', 'Docker', 'Git / GitHub', 'CI/CD'] },
            banco: { titulo: 'Databases', itens: ['SQL Server', 'PostgreSQL', 'Entity Framework', 'Dapper'] },
            outros: { titulo: 'Soft Skills & Others', itens: ['SOLID / Clean Code', 'English', 'Spanish', 'Problem Solving'] },
            tituloTagsAdicionais: 'Additional Technologies & Tools',
            tagsAdicionais: ['Git', 'Docker', 'AWS', 'SQL Server', 'PostgreSQL', 'Entity Framework', 'Dapper', 'Swagger', 'JWT', 'OAuth', 'xUnit', 'Linux']
        },
        carreira: {
            labelTecnologias: 'TECHNOLOGIES USED',
            itens: [
                {
                    cargo: 'IT Intern',
                    empresa: 'Pojuca City Hall — Ombudsman Office',
                    periodo: 'Sep 2025 – Dec 2025',
                    descricao: 'Contributed to data analysis and automation at the Municipal Ombudsman Office, supporting decision-making for public management.',
                    bullets: [
                        'Developed SQL queries and Excel reports to extract and analyze operational data from the department.',
                        'Automated data processing with Python scripts, reducing manual rework in recurring processes.',
                        'Built interactive Power BI dashboards to monitor internal KPIs.',
                        'Integrated internal systems by consuming REST APIs, connecting distinct data sources.'
                    ],
                    tecnologias: ['SQL Server', 'Python', 'Power BI', 'REST APIs', 'Excel']
                }
            ]
        },
        educacao: {
            itens: [
                {
                    curso: "Bachelor's in Software Engineering",
                    instituicao: 'UniCesumar',
                    periodo: 'Jan 2025 – Dec 2028',
                    status: 'In Progress',
                    descricao: "Bachelor's degree focused on the practical training of Software Engineers, covering every stage of development. Curriculum designed to build end-to-end solutions, including Requirements Analysis, Software Architecture, Object-Oriented Programming, and Databases.",
                    tags: ['OOP', 'Data Structures', 'Databases', 'Requirements Engineering', 'Agile Methodologies', 'Software Quality']
                },
                {
                    curso: '.NET Backend Developer Track',
                    instituicao: 'Balta.io',
                    periodo: '2024 – Present',
                    status: 'In Progress',
                    descricao: 'Specialized track in Backend development with .NET 8 and C#, focused on clean architecture, best practices, and design patterns widely used in the industry.',
                    tags: ['.NET 8', 'C#', 'ASP.NET Core', 'EF Core', 'Clean Architecture', 'SQL Server']
                }
            ]
        },
        certificados: {
            labelHabilidades: 'Skills Covered:',
            labelCredencial: 'Credential ID:',
            aprendizadoTitulo: 'Continuous Learning',
            aprendizadoDescricao: "I'm currently preparing for certifications and deepening my knowledge in .NET, AWS, and software engineering best practices.",
            aprendizadoTags: ['AWS Cloud Practitioner', 'AZ-900 Azure', 'Docker Certified'],
            itens: [
                { nome: 'Complete C# and Object-Oriented Programming', emissor: 'Udemy', ano: '2024', status: 'Completed', habilidades: ['C#', 'OOP', 'SOLID', 'Collections'], credencial: 'UC-XXXXXXXX', botaoAcao: 'Verify' },
                { nome: '.NET Backend Developer', emissor: 'Balta.io', ano: 'In progress', status: 'In Progress', habilidades: ['ASP.NET Core', 'EF Core', 'SQL Server', 'Clean Architecture'], credencial: 'In progress', botaoAcao: 'View Course' },
                { nome: 'AWS Cloud Practitioner', emissor: 'Amazon Web Services', ano: 'Expected 2025', status: 'In Preparation', habilidades: ['EC2', 'S3', 'Lambda', 'Cloud Architecture'], credencial: 'In preparation', botaoAcao: 'Learn More' }
            ]
        },
        contato: {
            tituloLeft: "Let's Talk",
            descricaoLeft: 'Whether for a developer job, a freelance project, or just to exchange tech ideas — I am here. I respond within 24 hours.',
            labelEmail: 'EMAIL',
            valorEmail: 'ruanalexandre625@gmail.com',
            labelLocalizacao: 'LOCATION',
            valorLocalizacao: 'BA — Remote Available',
            labelTempoResposta: 'RESPONSE TIME',
            valorTempoResposta: 'Within 24 hours',
            labelRedes: 'CONNECT WITH ME',
            tituloForm: 'Send a Message',
            labelNome: 'Your Name',
            labelEmailForm: 'Your Email',
            labelAssunto: 'Subject',
            labelMensagem: 'Your Message',
            placeholderNome: 'Your Name',
            placeholderEmail: 'your@email.com',
            placeholderAssunto: 'Job opportunity / Project / etc.',
            placeholderMensagem: 'Tell me about the opportunity or project...',
            botaoEnviar: 'Send Message',
            enviando: 'Sending...',
            enviado: 'Message Sent!',
            erro: 'Error — Try again',
            erroNome: 'Name is required',
            erroEmail: 'Email is required',
            erroEmailInvalido: 'Invalid email',
            erroAssunto: 'Subject is required',
            erroMensagem: 'Message is required',
            tituloGithub: 'GitHub',
            tituloLinkedin: 'LinkedIn',
            tituloEmailBtn: 'Email'
        },
        footer: {
            direitos: 'Made in 2025 · All rights reserved.',
            feito: 'Built with ❤️ using Angular & TailwindCSS',
            navSobre: 'About',
            navProjetos: 'Projects',
            navCarreira: 'Career',
            navContato: 'Contact',
            taglineLinha1: 'Building robust solutions',
            taglineLinha2: 'Learning every day',
            taglineHighlight1: '.NET Backend Development',
            taglineHighlight2: 'AWS in Training'
        }
    },
    ES: {
        menu: {
            inicio: 'Inicio',
            sobre: 'Sobre Mí',
            projetos: 'Proyectos',
            habilidades: 'Habilidades',
            carreira: 'Carrera',
            educacao: 'Formación',
            certificados: 'Certificados',
            contato: 'Contacto',
            labelIdioma: 'Idioma'
        },
        hero: {
            saudacao: 'HOLA, SOY RUAN',
            subtitulo: '.NET Backend Developer',
            subtituloStatus: 'en Formación',
            frases: [
                'Transformando ideas en Software Real.',
                'Construyendo el futuro con .NET & Angular',
                'Transformando café en código limpio.'
            ],
            descricao: 'Estudiante de Ingeniería de Software enfocado en crear soluciones robustas, escalables y de alto rendimiento. Transformando café en código limpio. ☕',
            botaoProjetos: 'Ver Proyectos',
            botaoContato: 'Entrar en Contacto',
            linkGithub: 'GitHub',
            linkLinkedin: 'LinkedIn'
        },
        sobre: {
            titulo: 'Sobre Mí',
            subtituloLinha1: 'De la Determinación al Código:',
            subtituloLinha2: 'Construyendo el Futuro Backend',
            paragrafo1: 'Mi viaje en la tecnología nació de un deseo genuino de crear soluciones que realmente funcionan. Con +3 años estudiando programación, hoy estoy en la recta final de la transición hacia mi primera vacante como desarrollador, con foco total en .NET Backend.',
            paragrafo2: 'Soy estudiante de Ingeniería de Software en UniCesumar y sigo la ruta .NET Backend Developer en Balta.io — mientras trabajo de día y programo de noche. La disciplina es mi diferencial.',
            paragrafo3: 'Hoy estoy construyendo mi base sólida en C#, ASP.NET, SQL y preparándome para la certificación AWS.',
            botaoCV: 'Descargar CV',
            badgeBackend: '⚙ .NET Backend Developer',
            badgeAws: '☁ AWS en Formación',
            badgeJunior: '◈ Full-Stack Junior'
        },
        titulos: {
            projetos: 'Proyectos Destacados',
            projetosSub: 'Una selección de los proyectos que construí durante mi viaje',
            habilidades: 'Habilidades Técnicas',
            habilidadesSub: 'Tecnologías y herramientas que uso día a día',
            carreira: 'Carrera Profesional',
            carreiraSub: 'Mi trayectoria académica y profesional en desarrollo de software',
            educacao: 'Formación Académica',
            educacaoSub: 'Mi base educativa en tecnología',
            certificados: 'Mis Certificados',
            certificadosSub: 'Cursos y formaciones que validan mi viaje',
            contato: '¿Hablamos?',
            contatoSub: 'Estoy disponible para nuevas oportunidades. Si tienes una vacante, un proyecto o simplemente quieres hablar de tecnología, ¡mi bandeja de entrada está abierta!'
        },
        projetos: {
            filtros: ['Todos', 'Full Stack', 'Frontend', 'Backend'],
            verGithub: 'Ver Código',
            verDeploy: 'Ver Demo',
            semProjetos: 'No hay proyectos en esta categoría.',
            lista: [
                { id: 1, titulo: 'Portafolio Personal', descricao: 'Portafolio desarrollado con Angular standalone, animaciones CSS personalizadas, sistema de i18n PT/EN/ES y formulario de contacto con EmailJS.', categoria: 'Frontend' },
                { id: 2, titulo: 'KajitA - E-commerce', descricao: 'E-commerce full-stack desarrollado para el mercado de Colombia.', categoria: 'Full Stack' },
                { id: 3, titulo: 'Korp — Sistema de Facturas', descricao: 'Prueba técnica con arquitectura de microservicios en .NET 8. Dos servicios independientes con EF Core, IHttpClientFactory, middleware global de errores, paginación y frontend Angular con RxJS reactivo.', categoria: 'Full Stack' }
            ]
        },
        habilidades: {
            backend: { titulo: 'Desarrollo Backend', itens: ['C#', 'ASP.NET Core', 'SQL Server', 'REST APIs'] },
            frontend: { titulo: 'Desarrollo Frontend', itens: ['Angular', 'TypeScript', 'HTML / CSS', 'TailwindCSS'] },
            devops: { titulo: 'Cloud & DevOps', itens: ['AWS (en formación)', 'Docker', 'Git / GitHub', 'CI/CD'] },
            banco: { titulo: 'Bases de Datos', itens: ['SQL Server', 'PostgreSQL', 'Entity Framework', 'Dapper'] },
            outros: { titulo: 'Soft Skills & Otros', itens: ['SOLID / Clean Code', 'Inglés', 'Español', 'Resolución de Problemas'] },
            tituloTagsAdicionais: 'Tecnologías y Herramientas Adicionales',
            tagsAdicionais: ['Git', 'Docker', 'AWS', 'SQL Server', 'PostgreSQL', 'Entity Framework', 'Dapper', 'Swagger', 'JWT', 'OAuth', 'xUnit', 'Linux']
        },
        carreira: {
            labelTecnologias: 'TECNOLOGÍAS USADAS',
            itens: [
                {
                    cargo: 'Pasante de TI',
                    empresa: 'Ayuntamiento de Pojuca — Oficina del Defensor del Pueblo',
                    periodo: 'Sep 2025 – Dic 2025',
                    descricao: 'Contribuí al análisis y automatización de datos en la Defensoría Municipal, apoyando la toma de decisiones de la gestión pública.',
                    bullets: [
                        'Desarrollé consultas SQL e informes en Excel para la extracción y análisis de datos operativos de la secretaría.',
                        'Automaticé el tratamiento de datos con scripts Python, reduciendo el retrabajo manual en procesos recurrentes.',
                        'Construí dashboards interactivos en Power BI para el monitoreo de indicadores internos.',
                        'Integré sistemas internos mediante el consumo de APIs REST, conectando fuentes de datos distintas.'
                    ],
                    tecnologias: ['SQL Server', 'Python', 'Power BI', 'APIs REST', 'Excel']
                }
            ]
        },
        educacao: {
            itens: [
                {
                    curso: 'Licenciatura en Ingeniería de Software',
                    instituicao: 'UniCesumar',
                    periodo: 'Ene 2025 – Dic 2028',
                    status: 'En Curso',
                    descricao: 'Licenciatura enfocada en la formación práctica de Ingenieros de Software, cubriendo todas las etapas del desarrollo. Plan de estudios diseñado para construir soluciones de punta a punta, incluyendo Análisis de Requisitos, Arquitectura de Software, Programación Orientada a Objetos y Bases de Datos.',
                    tags: ['POO', 'Estructuras de Datos', 'Bases de Datos', 'Ingeniería de Requisitos', 'Metodologías Ágiles', 'Calidad de Software']
                },
                {
                    curso: 'Ruta .NET Backend Developer',
                    instituicao: 'Balta.io',
                    periodo: '2024 – Actualidad',
                    status: 'En Curso',
                    descricao: 'Ruta especializada en desarrollo Backend con .NET 8 y C#, con foco en arquitectura limpia, buenas prácticas y patrones de diseño ampliamente usados en el mercado.',
                    tags: ['.NET 8', 'C#', 'ASP.NET Core', 'EF Core', 'Arquitectura Limpia', 'SQL Server']
                }
            ]
        },
        certificados: {
            labelHabilidades: 'Habilidades Cubiertas:',
            labelCredencial: 'ID de Credencial:',
            aprendizadoTitulo: 'Aprendizaje Continuo',
            aprendizadoDescricao: 'Actualmente me estoy preparando para certificaciones y profundizando conocimientos en .NET, AWS y buenas prácticas de ingeniería de software.',
            aprendizadoTags: ['AWS Cloud Practitioner', 'AZ-900 Azure', 'Docker Certified'],
            itens: [
                { nome: 'C# Completo y Orientado a Objetos', emissor: 'Udemy', ano: '2024', status: 'Concluido', habilidades: ['C#', 'POO', 'SOLID', 'Collections'], credencial: 'UC-XXXXXXXX', botaoAcao: 'Verificar' },
                { nome: '.NET Backend Developer', emissor: 'Balta.io', ano: 'En curso', status: 'En Progreso', habilidades: ['ASP.NET Core', 'EF Core', 'SQL Server', 'Clean Architecture'], credencial: 'En curso', botaoAcao: 'Ver Curso' },
                { nome: 'AWS Cloud Practitioner', emissor: 'Amazon Web Services', ano: 'Previsto 2025', status: 'En Preparación', habilidades: ['EC2', 'S3', 'Lambda', 'Cloud Architecture'], credencial: 'En preparación', botaoAcao: 'Ver Más' }
            ]
        },
        contato: {
            tituloLeft: 'Hablemos',
            descricaoLeft: 'Ya sea para una vacante de desarrollador, un proyecto freelance o solo para intercambiar ideas sobre tecnología — aquí estoy. Respondo en menos de 24 horas.',
            labelEmail: 'EMAIL',
            valorEmail: 'ruanalexandre625@gmail.com',
            labelLocalizacao: 'UBICACIÓN',
            valorLocalizacao: 'BA — Remoto Disponible',
            labelTempoResposta: 'TIEMPO DE RESPUESTA',
            valorTempoResposta: 'Dentro de 24 horas',
            labelRedes: 'CONÉCTATE CONMIGO',
            tituloForm: 'Envía un Mensaje',
            labelNome: 'Tu Nombre',
            labelEmailForm: 'Tu Email',
            labelAssunto: 'Asunto',
            labelMensagem: 'Tu Mensaje',
            placeholderNome: 'Tu Nombre',
            placeholderEmail: 'tu@email.com',
            placeholderAssunto: 'Oportunidad de trabajo / Proyecto / etc.',
            placeholderMensagem: 'Cuéntame sobre la oportunidad o proyecto...',
            botaoEnviar: 'Enviar Mensaje',
            enviando: 'Enviando...',
            enviado: '¡Mensaje Enviado!',
            erro: 'Error — Inténtalo de nuevo',
            erroNome: 'El nombre es obligatorio',
            erroEmail: 'El email es obligatorio',
            erroEmailInvalido: 'Email inválido',
            erroAssunto: 'El asunto es obligatorio',
            erroMensagem: 'El mensaje es obligatorio',
            tituloGithub: 'GitHub',
            tituloLinkedin: 'LinkedIn',
            tituloEmailBtn: 'Email'
        },
        footer: {
            direitos: 'Hecho en 2025 · Todos los derechos reservados.',
            feito: 'Construido con ❤️ usando Angular & TailwindCSS',
            navSobre: 'Sobre Mí',
            navProjetos: 'Proyectos',
            navCarreira: 'Carrera',
            navContato: 'Contacto',
            taglineLinha1: 'Construyendo soluciones robustas',
            taglineLinha2: 'Aprendiendo todos los días',
            taglineHighlight1: '.NET Backend Development',
            taglineHighlight2: 'AWS en Formación'
        }
    }
} as const satisfies Record<Idioma, Textos>;

@Injectable({
    providedIn: 'root'
})
export class IdiomaService {
    private idiomaAtual = new BehaviorSubject<Idioma>('PT');
    idioma$ = this.idiomaAtual.asObservable();

    private readonly idiomaSignal = signal<Idioma>('PT');

    readonly textos: Readonly<Record<Idioma, Textos>> = TEXTOS;
    readonly t = computed<Textos>(() => TEXTOS[this.idiomaSignal()]);

    alternarIdioma() {
        const atual = this.idiomaAtual.value;
        const proximo: Idioma = atual === 'PT' ? 'EN' : atual === 'EN' ? 'ES' : 'PT';
        // Atualiza signal antes do BehaviorSubject para que subscribers de idioma$
        // já encontrem t() com o idioma novo ao serem notificados.
        this.idiomaSignal.set(proximo);
        this.idiomaAtual.next(proximo);
    }

    getIdioma(): Idioma {
        return this.idiomaAtual.value;
    }
}
