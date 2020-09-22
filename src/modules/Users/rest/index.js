const get = require('./get');
const post = require('./post');
const put = require('./put');
const del = require('./delete');

const resources = {
  get: get(),
  post: post(),
  put: put(),
  del: del(),
};
// console.log('Exemplo resources: ', resources)
module.exports = () => resources;
