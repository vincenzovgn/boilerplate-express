const updateProfile = require('../put/updateProfile');

module.exports = async id => {
  const profile = await updateProfile(id, { active: true });

  return profile;
};
