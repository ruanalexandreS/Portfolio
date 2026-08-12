import { Textos } from './types';

export const PT_TEXTOS: Textos = {
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
        subtitulo: '.NET Backend Developer ·',
        subtituloStatus: 'C# · ASP.NET Core · SQL Server',
        frases: [
            'Transformando ideias em Software Real.',
            'Construindo o futuro com .NET & Angular',
            'Transformando café em código limpo.'
        ],
        descricao: 'Estudante de Engenharia de Software, com +2 anos construindo soluções reais em .NET 8, EF Core e Angular. Focado em backend robusto, performático, limpo e escalável.',
        botaoProjetos: 'Ver Projetos',
        botaoContato: 'Entrar em Contato',
        botaoCV: 'Baixar Currículo',
        linkGithub: 'GitHub',
        linkLinkedin: 'LinkedIn'
    },
    sobre: {
        titulo: 'Sobre Mim',
        subtituloLinha1: 'Disciplina virando',
        subtituloLinha2: 'arquitetura .NET',
        paragrafo1: 'Desenvolvedor .NET Backend em formação, movido por uma vontade genuína de criar soluções que resolvem problemas reais. Há mais de 2 anos escrevendo código todos os dias, com foco em C#, ASP.NET Core e SQL Server.',
        paragrafo2: 'Hoje construo APIs REST em .NET com Clean Architecture, EF Core e testes com xUnit. No projeto Korp apliquei microsserviços e IHttpClientFactory; no KajitA, desenvolvi um e-commerce full-stack de ponta a ponta.',
        paragrafo3: 'Curso Engenharia de Software na UniCesumar e sigo a trilha .NET Backend Developer no Balta.io, com a certificação AZ-900 Azure em andamento.',
        badgeBackend: '⚙ .NET Backend Developer',
        badgeAws: '☁ Azure em Formação',
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
        verMais: 'Ver mais projetos',
        lista: [
            { id: 1, titulo: 'Portfólio Pessoal', descricao: 'Portfólio desenvolvido com Angular standalone, animações CSS customizadas, sistema de i18n PT/EN/ES e formulário de contato com EmailJS.', categoria: 'Frontend' },
            { id: 2, titulo: 'KajitA - E-commerce', descricao: 'E-commerce full-stack desenvolvido para o mercado da Colômbia.', categoria: 'Full Stack' },
            { id: 3, titulo: 'Korp — Sistema de Notas Fiscais', descricao: 'Teste técnico com arquitetura de microsserviços em .NET 8. Dois serviços independentes com EF Core, IHttpClientFactory, middleware global de erros, paginação e frontend Angular com RxJS reativo.', categoria: 'Full Stack' },
            { id: 4, titulo: 'Latam Explorer', descricao: 'Plataforma de descoberta de destinos turísticos na América Latina, com conversor de moedas em tempo real, busca e filtro de 22 destinos, tema claro/escuro persistido e formulário validado. Vanilla JS puro, sem frameworks: arquitetura em camadas controllers/services com ES6 Modules nativos.', categoria: 'Frontend' }
        ]
    },
    habilidades: {
        backend: { titulo: 'Desenvolvimento Backend', itens: ['C#', 'ASP.NET Core', 'SQL Server', 'REST APIs'] },
        frontend: { titulo: 'Desenvolvimento Frontend', itens: ['Angular', 'TypeScript', 'HTML / CSS', 'TailwindCSS'] },
        devops: { titulo: 'Cloud & DevOps', itens: ['Azure (em formação)', 'Docker', 'Git / GitHub', 'CI/CD'] },
        banco: { titulo: 'Banco de Dados', itens: ['SQL Server', 'PostgreSQL', 'Entity Framework', 'Dapper'] },
        outros: { titulo: 'Soft Skills & Outros', itens: ['SOLID / Clean Code', 'Inglês', 'Espanhol', 'Resolução de Problemas'] },
        tituloTagsAdicionais: 'Tecnologias & Ferramentas Adicionais',
        tagsAdicionais: ['Git', 'Docker', 'Azure', 'SQL Server', 'PostgreSQL', 'Entity Framework', 'Dapper', 'Swagger', 'JWT', 'OAuth', 'xUnit', 'Linux', 'Redis', 'RabbitMQ', 'MediatR', 'FluentValidation', 'Hangfire', 'SignalR', 'GitHub Actions', 'Vercel']
    },
    carreira: {
        labelTecnologias: 'TECNOLOGIAS USADAS',
        itens: [
            {
                cargo: 'Estagiário de TI',
                empresa: 'Prefeitura Municipal de Pojuca — Ouvidoria',
                periodo: 'jun 2025 – Dez 2025',
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
        aprendizadoDescricao: 'Atualmente me preparando para certificações e aprofundando conhecimentos em .NET, Azure e boas práticas de engenharia de software.',
        aprendizadoTags: ['AZ-900 Azure', 'Docker Certified'],
        itens: [
            { nome: 'C# Completo e Orientado a Objetos', emissor: 'Udemy', ano: '2024', status: 'Concluído', habilidades: ['C#', 'POO', 'SOLID', 'Collections'], credencial: 'Concluído', credencialUrl: 'https://www.udemy.com/', botaoAcao: 'Ver Mais' },
            { nome: '.NET Backend Developer', emissor: 'Balta.io', ano: 'Em andamento', status: 'Em Progresso', habilidades: ['ASP.NET Core', 'EF Core', 'SQL Server', 'Clean Architecture'], credencial: 'Em andamento', credencialUrl: 'https://balta.io', botaoAcao: 'Ver Curso' },
            { nome: 'AZ-900: Microsoft Azure Fundamentals', emissor: 'Microsoft', ano: 'Previsto 2026', status: 'Em Preparação', habilidades: ['IaaS', 'PaaS', 'SaaS', 'Cloud Architecture'], credencial: 'Em preparação', credencialUrl: 'https://learn.microsoft.com/pt-br/credentials/certifications/azure-fundamentals/', botaoAcao: 'Ver Mais' }
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
        taglineHighlight2: 'Azure em Formação'
    }
};
