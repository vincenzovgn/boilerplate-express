const sequelize = require('../../../../interfaces/sequelize');

module.exports = async (profileId, data) => {
  const profile = await sequelize(__MODEL.Profile).update(data, {
    where: { id: profileId },
  });

  return profile;
};
