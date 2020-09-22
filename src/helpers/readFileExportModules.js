const fs = require('fs');
const path = require('path');
/**
 * Returna os recursos da pasta, onde cada arquivo retorna
 * um module.exports
 * @param {String} directory caminho dos modulos
 * @param {Boolean} excludeIndex exclui o arquivo index, padrão true
 * @returns {Object} retorna um objeto com o modulos
 */
module.exports = (directory, excludeIndex = true) => {
  const basename = path.basename(directory);
  directory = path.join(path.dirname(directory), basename);
  const files = fs.readdirSync(directory).filter(file => {
    if (excludeIndex)
      return (
        file.indexOf('.') !== 0 &&
        file !== basename &&
        file.slice(-3) === '.js' &&
        file !== 'index.js'
      );
    return (
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
    );
  });
  const resource = {};
  files.forEach(file => {
    const nameFile = file.slice(0, -3);
    resource[nameFile] = require(`${directory}/${file}`);
  });
  return resource;
};
