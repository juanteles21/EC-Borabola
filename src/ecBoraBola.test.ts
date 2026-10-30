import test from 'node:test';
import assert from 'node:assert/strict';
import {
  BACKGROUND_IMAGE_URL,
  CENTER_LOGO_SOURCE_URL,
  CENTER_LOGO_URL,
  CONTATO,
  UNIDADES,
  VALID_SECTIONS,
  isHomePhraseVisible,
  resolveSectionFromHash,
} from './ecBoraBola';

test('possui exatamente as 3 seções permitidas e os ativos de background e logotipo central', () => {
  assert.deepEqual(VALID_SECTIONS, ['home', 'unidades', 'contato']);
  assert.equal(
    BACKGROUND_IMAGE_URL,
    '/assets/aistudio/WhatsApp_Image_2026-10-28_at_21.36.57_0903e5f6.jpeg'
  );
  assert.equal(CENTER_LOGO_URL, '/assets/aistudio/logo-ec-borabola.png');
  assert.equal(CENTER_LOGO_SOURCE_URL, 'https://i.postimg.cc/tTnxzBZg/IMG-6476.jpg');
});

test('resolveSectionFromHash interpreta hashes válidos e usa home como padrão', () => {
  assert.equal(resolveSectionFromHash('#home'), 'home');
  assert.equal(resolveSectionFromHash('#unidades'), 'unidades');
  assert.equal(resolveSectionFromHash('#CONTATO'), 'contato');
  assert.equal(resolveSectionFromHash('#faq'), 'home');
  assert.equal(resolveSectionFromHash(''), 'home');
});

test('frases de impacto da Home ficam visíveis exclusivamente na seção home', () => {
  assert.equal(isHomePhraseVisible('home'), true);
  assert.equal(isHomePhraseVisible('unidades'), false);
  assert.equal(isHomePhraseVisible('contato'), false);
});

test('unidades possuem endereços exatos, 3 fotos reais cada e links do Google Maps', () => {
  assert.equal(UNIDADES.length, 2);
  assert.equal(UNIDADES[0].nome, 'Unidade Santa Maria');
  assert.equal(
    UNIDADES[0].endereco,
    'Av. Santa Maria - Jardim Santa Maria, Jacareí - SP, 12328-350'
  );
  assert.deepEqual(UNIDADES[0].fotos, [
    'https://i.postimg.cc/LXG0yQxc/IMG-6479.jpg',
    'https://i.postimg.cc/yd2rfpfC/IMG-6480.jpg',
    'https://i.postimg.cc/50DkPKsr/IMG-6481.jpg',
  ]);
  assert.ok(UNIDADES[0].mapaUrl.startsWith('https://www.google.com/maps/'));

  assert.equal(UNIDADES[1].nome, 'Unidade São João');
  assert.equal(
    UNIDADES[1].endereco,
    'Av. José Carlos Fernandes, 87 - Jardim Terras de Sao Joao, Jacareí - SP, 12324-784'
  );
  assert.deepEqual(UNIDADES[1].fotos, [
    'https://i.postimg.cc/SsHtZ1gw/IMG-6482.jpg',
    'https://i.postimg.cc/qqnDWcFY/IMG-6483.jpg',
    'https://i.postimg.cc/nr7SNK5b/IMG-6484.jpg',
  ]);
  assert.ok(UNIDADES[1].mapaUrl.startsWith('https://www.google.com/maps/'));
});

test('canais de contato apontam para os links oficiais de WhatsApp e Instagram', () => {
  assert.equal(CONTATO.whatsappExibicao, '(12) 98831-7267');
  assert.equal(CONTATO.whatsappUrl, 'https://wa.me/5512988317267');
  assert.equal(CONTATO.instagramExibicao, '@ecborabola');
  assert.equal(CONTATO.instagramUrl, 'https://www.instagram.com/ecborabola/');
});
