const sequelize = require('../../../../interfaces/sequelize');

/**
 * buscar usuário por id
 * @param {Object} query opcional, quando não informado busca o primeiro usuários
 * @returns {Object|null}
 */
module.exports = id => sequelize(__MODEL.User).findById(id);
