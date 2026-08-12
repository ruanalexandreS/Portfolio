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
    readonly botaoCV: string;
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
    readonly verMais: string;
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
    /** URL da credencial. '#' quando ainda não há o que verificar.
        Vive aqui, e não em array paralelo no .ts, para sobreviver a
        reordenação e remoção de certificados. */
    readonly credencialUrl: string;
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
