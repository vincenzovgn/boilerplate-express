const jwt = require('jsonwebtoken');

exports.encode = (params, expiresIn = null) => {
  if (expiresIn !== null)
    return jwt.sign(params, process.env.JWT_SECRET, { expiresIn });
  return jwt.sign(params, process.env.JWT_SECRET);
};

exports.decode = token => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    console.log('JWT ERROR', error.message);
    return false;
  }
};
