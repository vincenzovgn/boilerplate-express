/**
 * Carregamento das models sequelize
 */

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require('../config')[env];

const db = {};

// console.log('config: ', config)
let sequelize = null;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config,
  );
}
// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('connected to DB');
//   });

/**
 * Busca as models dentro dos serviços
 */
const modules = fs.readdirSync(path.resolve(__MODULES));
if (modules.length > 0) {
  console.log('Modules:');
  modules.map(dirs => {
    const dirsOnModules = path.join(path.resolve(__MODULES), dirs);
    if (fs.readdirSync(dirsOnModules).includes('models')) {
      let models = fs.readdirSync(
        path.join(path.resolve(__MODULES), dirs, 'models'),
      );
      models = models
        .filter(
          file =>
            file.indexOf('.') !== 0 &&
            file !== basename &&
            file.slice(-3) === '.js',
        )
        .map(file => {
          const model = require(path.join(
            path.resolve(__MODULES),
            dirs,
            'models',
            file,
          ))(sequelize, Sequelize.DataTypes);
          db[model.name] = model;
          return model;
        });
      console.log(`→ ${dirs} has the models available: `, models);
    }
  });
}

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
