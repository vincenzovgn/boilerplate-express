const Router = require('./router');
const Rest = require('./rest');

const rest = Rest();

module.exports = {
  rest,
  router: Router(rest),
};
