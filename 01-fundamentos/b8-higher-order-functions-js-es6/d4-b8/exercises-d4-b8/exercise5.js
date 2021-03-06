const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.reduce((accum, curEl) => {
    return accum + curEl.split('a').length;
  }, 0);
}

assert.deepStrictEqual(containsA(), 20);