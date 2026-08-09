import { Textos } from './types';

export const EN_TEXTOS: Textos = {
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
        subtitulo: '.NET Backend Developer ·',
        subtituloStatus: 'C# · ASP.NET Core · SQL Server',
        frases: [
            'Transforming ideas into Real Software.',
            'Building the future with .NET & Angular',
            'Turning coffee into clean code.'
        ],
        descricao: 'Software Engineering student with 2+ years building real-world .NET 8, EF Core and Angular solutions. Focused on clean, high-performance, robust and scalable backend systems.',
        botaoProjetos: 'View Projects',
        botaoContato: 'Get in Touch',
        botaoCV: 'Download Resume',
        linkGithub: 'GitHub',
        linkLinkedin: 'LinkedIn'
    },
    sobre: {
        titulo: 'About Me',
        subtituloLinha1: 'From Determination to Code:',
        subtituloLinha2: 'Building the Backend Future',
        paragrafo1: 'My tech journey was born from a genuine desire to build solutions that actually work. With 2+ years studying programming, I am now in the final stretch of transitioning to my first developer role, with a total focus on .NET Backend.',
        paragrafo2: "I'm a Software Engineering student at UniCesumar and I follow the .NET Backend Developer track at Balta.io — working by day and coding by night. Discipline is my differentiator.",
        paragrafo3: "Today I'm building a solid foundation in C#, ASP.NET, SQL and preparing for the AZ-900 Azure certification.",
        botaoCV: 'Download Resume',
        badgeBackend: '⚙ .NET Backend Developer',
        badgeAws: '☁ Azure in Training',
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
        verMais: 'See more projects',
        lista: [
            { id: 1, titulo: 'Personal Portfolio', descricao: 'Portfolio built with standalone Angular, custom CSS animations, PT/EN/ES i18n system, and a contact form powered by EmailJS.', categoria: 'Frontend' },
            { id: 2, titulo: 'KajitA - E-commerce', descricao: 'Full-stack e-commerce built for the Colombian market.', categoria: 'Full Stack' },
            { id: 3, titulo: 'Korp — Invoice System', descricao: 'Technical challenge featuring a .NET 8 microservices architecture. Two independent services with EF Core, IHttpClientFactory, global error middleware, pagination and a reactive RxJS Angular frontend.', categoria: 'Full Stack' },
            { id: 4, titulo: 'Latam Explorer', descricao: 'Discovery platform for tourist destinations across Latin America, featuring a real-time currency converter, search and filtering across 22 destinations, a persisted light/dark theme and a validated form. Pure vanilla JS, no frameworks: layered controllers/services architecture with native ES6 Modules.', categoria: 'Frontend' }
        ]
    },
    habilidades: {
        backend: { titulo: 'Backend Development', itens: ['C#', 'ASP.NET Core', 'SQL Server', 'REST APIs'] },
        frontend: { titulo: 'Frontend Development', itens: ['Angular', 'TypeScript', 'HTML / CSS', 'TailwindCSS'] },
        devops: { titulo: 'Cloud & DevOps', itens: ['Azure (in training)', 'Docker', 'Git / GitHub', 'CI/CD'] },
        banco: { titulo: 'Databases', itens: ['SQL Server', 'PostgreSQL', 'Entity Framework', 'Dapper'] },
        outros: { titulo: 'Soft Skills & Others', itens: ['SOLID / Clean Code', 'English', 'Spanish', 'Problem Solving'] },
        tituloTagsAdicionais: 'Additional Technologies & Tools',
        tagsAdicionais: ['Git', 'Docker', 'Azure', 'SQL Server', 'PostgreSQL', 'Entity Framework', 'Dapper', 'Swagger', 'JWT', 'OAuth', 'xUnit', 'Linux', 'Redis', 'RabbitMQ', 'MediatR', 'FluentValidation', 'Hangfire', 'SignalR', 'GitHub Actions', 'Vercel']
    },
    carreira: {
        labelTecnologias: 'TECHNOLOGIES USED',
        itens: [
            {
                cargo: 'IT Intern',
                empresa: 'Pojuca City Hall — Ombudsman Office',
                periodo: 'Jun 2025 – Dec 2025',
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
        aprendizadoDescricao: "I'm currently preparing for certifications and deepening my knowledge in .NET, Azure, and software engineering best practices.",
        aprendizadoTags: ['AZ-900 Azure', 'Docker Certified'],
        itens: [
            { nome: 'Complete C# and Object-Oriented Programming', emissor: 'Udemy', ano: '2024', status: 'Completed', habilidades: ['C#', 'OOP', 'SOLID', 'Collections'], credencial: 'UC-XXXXXXXX', botaoAcao: 'Verify' },
            { nome: '.NET Backend Developer', emissor: 'Balta.io', ano: 'In progress', status: 'In Progress', habilidades: ['ASP.NET Core', 'EF Core', 'SQL Server', 'Clean Architecture'], credencial: 'In progress', botaoAcao: 'View Course' },
            { nome: 'AZ-900: Microsoft Azure Fundamentals', emissor: 'Microsoft', ano: 'Expected 2026', status: 'In Preparation', habilidades: ['IaaS', 'PaaS', 'SaaS', 'Cloud Architecture'], credencial: 'In preparation', botaoAcao: 'Learn More' }
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
        taglineHighlight2: 'Azure in Training'
    }
};
