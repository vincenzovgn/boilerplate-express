const userExist = require('./userExist');

module.exports = user => userExist({ where: { id: user, active: true } });
