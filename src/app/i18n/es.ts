import { Textos } from './types';

export const ES_TEXTOS: Textos = {
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
        subtitulo: '.NET Backend Developer ·',
        subtituloStatus: 'C# · ASP.NET Core · SQL Server',
        frases: [
            'Transformando ideas en Software Real.',
            'Construyendo el futuro con .NET & Angular',
            'Transformando café en código limpio.'
        ],
        descricao: 'Estudiante de Ingeniería de Software con +2 años creando soluciones reales con .NET 8, EF Core y Angular. Enfocado en backend robusto, alto rendimiendo, limpio y escalable.',
        botaoProjetos: 'Ver Proyectos',
        botaoContato: 'Entrar en Contacto',
        botaoCV: 'Descargar CV',
        linkGithub: 'GitHub',
        linkLinkedin: 'LinkedIn'
    },
    sobre: {
        titulo: 'Sobre Mí',
        subtituloLinha1: 'Disciplina convertida en',
        subtituloLinha2: 'arquitectura .NET',
        paragrafo1: 'Desarrollador .NET Backend en formación, movido por un deseo genuino de crear soluciones que resuelven problemas reales. Hace más de 2 años escribiendo código todos los días, con foco en C#, ASP.NET Core y SQL Server.',
        paragrafo2: 'Hoy construyo APIs REST en .NET con Clean Architecture, EF Core y pruebas con xUnit. En el proyecto Korp apliqué microservicios e IHttpClientFactory; en KajitA, desarrollé un e-commerce full-stack de punta a punta.',
        paragrafo3: 'Curso Ingeniería de Software en UniCesumar y sigo la ruta .NET Backend Developer en Balta.io, con la certificación AZ-900 Azure en curso.',
        badgeBackend: '⚙ .NET Backend Developer',
        badgeAws: '☁ Azure en Formación',
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
        verMais: 'Ver más proyectos',
        lista: [
            { id: 1, titulo: 'Portafolio Personal', descricao: 'Portafolio desarrollado con Angular standalone, animaciones CSS personalizadas, sistema de i18n PT/EN/ES y formulario de contacto con EmailJS.', categoria: 'Frontend' },
            { id: 2, titulo: 'KajitA - E-commerce', descricao: 'E-commerce full-stack desarrollado para el mercado de Colombia.', categoria: 'Full Stack' },
            { id: 3, titulo: 'Korp — Sistema de Facturas', descricao: 'Prueba técnica con arquitectura de microservicios en .NET 8. Dos servicios independientes con EF Core, IHttpClientFactory, middleware global de errores, paginación y frontend Angular con RxJS reactivo.', categoria: 'Full Stack' },
            { id: 4, titulo: 'Latam Explorer', descricao: 'Plataforma de descubrimiento de destinos turísticos en América Latina, con conversor de monedas en tiempo real, búsqueda y filtro de 22 destinos, tema claro/oscuro persistido y formulario validado. Vanilla JS puro, sin frameworks: arquitectura en capas controllers/services con ES6 Modules nativos.', categoria: 'Frontend' }
        ]
    },
    habilidades: {
        backend: { titulo: 'Desarrollo Backend', itens: ['C#', 'ASP.NET Core', 'SQL Server', 'REST APIs'] },
        frontend: { titulo: 'Desarrollo Frontend', itens: ['Angular', 'TypeScript', 'HTML / CSS', 'TailwindCSS'] },
        devops: { titulo: 'Cloud & DevOps', itens: ['Azure (en formación)', 'Docker', 'Git / GitHub', 'CI/CD'] },
        banco: { titulo: 'Bases de Datos', itens: ['SQL Server', 'PostgreSQL', 'Entity Framework', 'Dapper'] },
        outros: { titulo: 'Soft Skills & Otros', itens: ['SOLID / Clean Code', 'Inglés', 'Español', 'Resolución de Problemas'] },
        tituloTagsAdicionais: 'Tecnologías y Herramientas Adicionales',
        tagsAdicionais: ['Git', 'Docker', 'Azure', 'SQL Server', 'PostgreSQL', 'Entity Framework', 'Dapper', 'Swagger', 'JWT', 'OAuth', 'xUnit', 'Linux', 'Redis', 'RabbitMQ', 'MediatR', 'FluentValidation', 'Hangfire', 'SignalR', 'GitHub Actions', 'Vercel']
    },
    carreira: {
        labelTecnologias: 'TECNOLOGÍAS USADAS',
        itens: [
            {
                cargo: 'Pasante de TI',
                empresa: 'Ayuntamiento de Pojuca — Oficina del Defensor del Pueblo',
                periodo: 'Jun 2025 – Dic 2025',
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
        aprendizadoDescricao: 'Actualmente me estoy preparando para certificaciones y profundizando conocimientos en .NET, Azure y buenas prácticas de ingeniería de software.',
        aprendizadoTags: ['AZ-900 Azure', 'Docker Certified'],
        itens: [
            { nome: 'C# Completo y Orientado a Objetos', emissor: 'Udemy', ano: '2024', status: 'Concluido', habilidades: ['C#', 'POO', 'SOLID', 'Collections'], credencial: 'Concluido', credencialUrl: 'https://www.udemy.com/', botaoAcao: 'Ver Más' },
            { nome: '.NET Backend Developer', emissor: 'Balta.io', ano: 'En curso', status: 'En Progreso', habilidades: ['ASP.NET Core', 'EF Core', 'SQL Server', 'Clean Architecture'], credencial: 'En curso', credencialUrl: 'https://balta.io', botaoAcao: 'Ver Curso' },
            { nome: 'AZ-900: Microsoft Azure Fundamentals', emissor: 'Microsoft', ano: 'Previsto 2026', status: 'En Preparación', habilidades: ['IaaS', 'PaaS', 'SaaS', 'Cloud Architecture'], credencial: 'En preparación', credencialUrl: 'https://learn.microsoft.com/es-es/credentials/certifications/azure-fundamentals/', botaoAcao: 'Ver Más' }
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
        taglineHighlight2: 'Azure en Formación'
    }
};
