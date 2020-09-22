const updateProfile = require('../put/updateProfile');

module.exports = async id => {
  const profile = await updateProfile(id, { active: false });

  return profile;
};
