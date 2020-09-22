const sequelize = require('../../../../interfaces/sequelize');
/**
 * Criar um ou mais perfis de usuário
 *
 * @param {String} userId
 * @param {String} name
 * @param {String} document
 * @param {String} documentType
 * @param {String} nationality
 * @param {String} phone
 * @param {String} image
 * @param {boolean} active
 * @param {String} status
 * @param {String} payload
 */

module.exports = profiles =>
  sequelize(__MODEL.Profile).bulkCreate(
    Array.isArray(profiles) ? profiles : [profiles],
  );
