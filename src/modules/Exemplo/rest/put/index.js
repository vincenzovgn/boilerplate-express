const path = require('path');
const readFileExportModules = require('../../../../helpers/readFileExportModules');

const caminho = path.basename(__dirname);
const dirname = path.dirname(__filename);
module.exports = () => readFileExportModules(dirname);
