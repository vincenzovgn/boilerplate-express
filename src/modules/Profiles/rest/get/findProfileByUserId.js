/**
 * Deve receber um userId e encontrar um pefil vinculado ao usuário.
 *
 * @param {String} userId
 */

const sequelize = require('../../../../interfaces/sequelize/index');

module.exports = async userId => {
  const profile = await sequelize(__MODEL.Profile).findOne({
    where: { userId },
    include: {
      model: __MODEL.User,
      attributes: {
        exclude: ['password', 'createdAt', 'updatedAt', 'payload'],
      },
    },
  });

  return profile;
};
