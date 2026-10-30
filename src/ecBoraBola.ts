/**
 * Lógica pura de navegação, unidades e canais de contato do EC Bora Bola.
 * Mantida desacoplada para verificação determinística com testes unitários.
 */

export type SectionId = 'home' | 'unidades' | 'contato';

export const BACKGROUND_IMAGE_URL =
  '/assets/aistudio/WhatsApp_Image_2026-10-28_at_21.36.57_0903e5f6.jpeg';

export const CENTER_LOGO_URL = '/assets/aistudio/logo-ec-borabola.png';
export const CENTER_LOGO_SOURCE_URL = 'https://i.postimg.cc/tTnxzBZg/IMG-6476.jpg';

export const VALID_SECTIONS: readonly SectionId[] = ['home', 'unidades', 'contato'];

export interface UnidadeInfo {
  id: string;
  rotulo: string;
  nome: string;
  endereco: string;
  mapaUrl: string;
  fotos: readonly string[];
}

export interface ContatoInfo {
  whatsappExibicao: string;
  whatsappUrl: string;
  instagramExibicao: string;
  instagramUrl: string;
}

export const UNIDADES: readonly UnidadeInfo[] = [
  {
    id: 'santa-maria',
    rotulo: 'Unidade 1',
    nome: 'Unidade Santa Maria',
    endereco: 'Av. Santa Maria - Jardim Santa Maria, Jacareí - SP, 12328-350',
    mapaUrl:
      'https://www.google.com/maps/search/?api=1&query=Av.+Santa+Maria+-+Jardim+Santa+Maria%2C+Jacare%C3%AD+-+SP%2C+12328-350',
    fotos: [
      'https://i.postimg.cc/LXG0yQxc/IMG-6479.jpg',
      'https://i.postimg.cc/yd2rfpfC/IMG-6480.jpg',
      'https://i.postimg.cc/50DkPKsr/IMG-6481.jpg',
    ],
  },
  {
    id: 'sao-joao',
    rotulo: 'Unidade 2',
    nome: 'Unidade São João',
    endereco: 'Av. José Carlos Fernandes, 87 - Jardim Terras de Sao Joao, Jacareí - SP, 12324-784',
    mapaUrl:
      'https://www.google.com/maps/search/?api=1&query=Av.+Jos%C3%A9+Carlos+Fernandes%2C+87+-+Jardim+Terras+de+Sao+Joao%2C+Jacare%C3%AD+-+SP%2C+12324-784',
    fotos: [
      'https://i.postimg.cc/SsHtZ1gw/IMG-6482.jpg',
      'https://i.postimg.cc/qqnDWcFY/IMG-6483.jpg',
      'https://i.postimg.cc/nr7SNK5b/IMG-6484.jpg',
    ],
  },
];

export const CONTATO: ContatoInfo = {
  whatsappExibicao: '(12) 98831-7267',
  whatsappUrl: 'https://wa.me/5512988317267',
  instagramExibicao: '@ecborabola',
  instagramUrl: 'https://www.instagram.com/ecborabola/',
};

export function resolveSectionFromHash(hash: string): SectionId {
  const limpo = hash.replace(/^#/, '').trim().toLowerCase();
  if (limpo === 'unidades' || limpo === 'contato' || limpo === 'home') {
    return limpo;
  }
  return 'home';
}

export function isHomePhraseVisible(activeSection: SectionId): boolean {
  return activeSection === 'home';
}
