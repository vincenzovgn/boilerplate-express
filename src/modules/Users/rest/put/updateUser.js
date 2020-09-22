const sequelize = require('../../../../interfaces/sequelize');

module.exports = (query, data) => sequelize(__MODEL.User).update(data, query);
