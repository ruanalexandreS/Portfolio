import { Idioma, Textos } from './types';
import { PT_TEXTOS } from './pt';
import { EN_TEXTOS } from './en';
import { ES_TEXTOS } from './es';

export const TEXTOS: Record<Idioma, Textos> = {
    PT: PT_TEXTOS,
    EN: EN_TEXTOS,
    ES: ES_TEXTOS
} as const satisfies Record<Idioma, Textos>;

export * from './types';
