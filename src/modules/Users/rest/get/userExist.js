const findUser = require('./findUser');

/**
 * Verificar se o usuário existe ou não
 * @param {Object} query opcional, quando não informado busca o primeiro usuários
 * @returns {Boolean}
 */
module.exports = (query = {}) => findUser(query).then(res => res !== null);
