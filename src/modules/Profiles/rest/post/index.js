const path = require('path');
const readFileExportModules = require('../../../../helpers/readFileExportModules');

const caminho = path.basename(__dirname);
const dirname = path.dirname(__filename);
// console.log(`${caminho} resources: `, readFileExportModules(dirname))
module.exports = () => readFileExportModules(dirname);
