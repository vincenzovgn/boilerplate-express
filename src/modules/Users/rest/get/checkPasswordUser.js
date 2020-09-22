const bcrypt = require('../../../../helpers/bcrypt');

module.exports = (password, hash) => bcrypt.compare(password, hash);
