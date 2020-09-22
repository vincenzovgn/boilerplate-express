const updateUser = require('./updateUser');

module.exports = query => updateUser(query, { active: true });
