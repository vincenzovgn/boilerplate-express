const path = require('path');
const readFileExportModules = require('../../../../helpers/readFileExportModules');

const dirname = path.dirname(__filename);
module.exports = () => readFileExportModules(dirname);
