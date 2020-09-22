const jwt = require('../../jwt');

module.exports = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader)
      return res.status(401).json({
        status: 401,
        error: true,
        response: __ERRORS.noProvided('token '),
      });

    if (typeof authHeader !== 'string')
      return res.json({
        status: 400,
        error: true,
        response: __ERRORS.malformatted(),
        infoDev: __ERRORS.malformatted(),
      });

    const parts = authHeader.split(' ');
    if (!parts.length === 2) {
      return res.boom.badRequest(`${__ERRORS.invalid}error or invalid token`, {
        response: false,
      });
    }

    const [scheme, token] = parts;
    if (!/^Bearer$/i.test(scheme))
      return res.boom.badRequest(__ERRORS.malformatted(), { response: false });

    req.payload = await jwt.decode(token);
    if (req.payload === false)
      return res.status(401).json({
        status: 401,
        error: true,
        response: `Invalid token or not Unauthorized`,
      });

    next();
  } catch (error) {
    console.log(__dirname, error);
    return res.status(500).json({
      status: 500,
      error: false,
      response: 'Internal Sever Error.',
      infoDev: 'Internal Sever Error.',
    });
  }
};
