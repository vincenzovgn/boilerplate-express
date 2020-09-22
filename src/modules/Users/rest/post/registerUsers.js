const sequelize = require('../../../../interfaces/sequelize');
// module.exports = (query = {}) => {
//   try {
//     throw { status: 404, error: true, message: 'retornou um error' }
//   } catch (error) {
//     return error
//   }
// }
/**
 * registrar um ou mais usuários
 * @param {Array|Object} users
 * @param {String} users.email
 * @param {String} users.password
 * @returns {Array|Object}
 */
module.exports = users =>
  sequelize(__MODEL.User).bulkCreate(Array.isArray(users) ? users : [users]);
