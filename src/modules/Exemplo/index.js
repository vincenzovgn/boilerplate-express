const Router = require('./router');
const Rest = require('./rest');

/**
 * o segundo parametro de Router é um objeto os outros módulos
 * @param {Object} rest
 * @param {Object} modules importação dos outros módulos
 * @example
 * const Modulo = require('./../Modulo/rest)()
 * const router = Router(rest, { Modulo })
 */
const rest = Rest();
module.exports = {
  rest,
  router: Router(rest),
};
