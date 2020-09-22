const sequelize = require('../../../../interfaces/sequelize');
const User = require('../../../Users/models/user');

/**
 * Lista todos os perfis na aplicação
 */

module.exports = async (query = {}) => {
  const profiles = await sequelize(__MODEL.Profile).findAll({
    ...query,
    include: {
      model: __MODEL.User,
      attributes: {
        exclude: ['password'],
      },
    },
  });

  return profiles;
};
