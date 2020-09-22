/**
 * Normalização de estring
 * @param {String} str
 * @param {Object} options options handler string
 * @param {String} options.latterType upper, lower and deafault returns the same way you entered
 * @param {Boolean} options.removeAccents remove accents such as ÁÉÍÓÚáéíóúâêîôûàèìòùÇç
 * @param {Boolean} options.removeSpecialCaracteres remove special caracteres such as /.,~!@#$%&_-
 * @returns {String}
 */
module.exports = (
  str,
  { latterType, removeAccents, removeSpecialCaracteres },
) => {
  str = str
    .trim()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
  latterType = latterType || 'default';
  removeAccents = removeAccents || false;
  removeSpecialCaracteres || false;
  if (latterType === 'upper') {
    str = str.toUpperCase();
  } else if (latterType === 'lower') {
    str = str.toLowerCase();
  }
  // remove acentos especiais:ÁÉÍÓÚáéíóúâêîôûàèìòùÇç
  if (removeAccents) {
    str = str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }
  // remove caracteres especiais: /.,~!@#$%&_-
  if (removeSpecialCaracteres) {
    str.normalize('NFD').replace(/[^0-9a-zA-Z]/g, '');
  }
  return str;
};
