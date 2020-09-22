const sequelize = require('../../../../interfaces/sequelize');

/**
 * buscar um unico usuário
 * @param {Object} query opcional, quando não informado busca o primeiro usuários
 * @returns {Object|null}
 */
module.exports = (query = {}) => sequelize(__MODEL.User).findOne(query);
