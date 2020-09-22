/**
 * Deve receber um userId e encontrar um pefil vinculado ao usuário.
 *
 * @param {String} userId
 */

const sequelize = require('../../../../interfaces/sequelize/index');

const User = require('../../../Users/models/user');

module.exports = async id => {
  const profile = await sequelize(__MODEL.Profile).findOne({
    where: { id },
    include: {
      model: __MODEL.User,
      attributes: {
        exclude: ['password', 'createdAt', 'updatedAt', 'payload'],
      },
    },
  });

  return profile;
};
