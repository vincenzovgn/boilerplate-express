const path = require('path');

const directory = path.dirname(__filename);
// const basename = path.basename(__filename)
// console.log(`isAbsolute: ${path.isAbsolute(directory)} | directory: ${directory}`)

module.exports = () => {
  global.__BASE = path.resolve(directory);
  global.__HELPERS = path.join(__BASE, '/helpers');
  global.__ERRORS = require(path.join(__HELPERS, '/errors.js'));
  global.__INFRA = path.join(__BASE, '/infra');
  global.__INTERFACES = path.join(__BASE, '/interfaces');
  global.__MIDDLEWARES = path.join(__INTERFACES, '/http/middlewares');
  global.__MODULES = path.join(__BASE, '/modules');
  global.__MODEL = require(path.join(__INFRA, '/databases/sequelize/models'));
};
