/**
 * Exemplo de leitura de arquivo e carregamento de modules ou arquivos separados
 */
const fs = require('fs');
const path = require('path');

// fs.readdirSync(path.dirname)
const directory = path.dirname(__filename);
const basename = path.basename(__filename);
const files = fs.readdirSync(directory).filter(file => {
  return (
    file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
  );
});
const modules = {};
files.forEach(file => {
  const nameFile = file.slice(0, -3);
  modules[nameFile] = require(`${directory}/${file}`);
});
console.log('Modules Accounts: ', modules);

module.exports = modules;
