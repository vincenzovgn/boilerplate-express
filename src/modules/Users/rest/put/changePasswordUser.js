const updateUser = require('./updateUser');
const bcrypt = require('../../../../helpers/bcrypt');

module.exports = async (email, password) =>
  updateUser({ where: { email } }, { password: await bcrypt.crypto(password) });
