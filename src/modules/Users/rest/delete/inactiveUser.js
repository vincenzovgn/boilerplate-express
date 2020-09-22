const updateUser = require('../put/updateUser');

module.exports = query => updateUser(query, { active: false });
