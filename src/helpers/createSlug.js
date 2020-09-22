const strNormalize = require('./stringNormalize');

module.exports = name =>
  strNormalize(name, {
    latterType: 'lower',
    removeAccents: true,
    removeSpecialCaracteres: true,
  });
