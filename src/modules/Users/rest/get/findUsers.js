const sequelize = require('../../../../interfaces/sequelize');

/**
 * buscar um unico usuário
 * @param {Object} query opcional, quando não informado busca o primeiro usuários
 * @returns {Array|[]}
 */
module.exports = (query = {}) =>
  sequelize(__MODEL.User).findAll({
    ...query,
    attributes: { exclude: ['password'] },
    include: { model: __MODEL.Profile },
  });
