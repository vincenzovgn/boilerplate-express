const Joi = require('joi');

/**
 * Verify extesion of file
 * @param originalname @type <string>
 */
module.exports = originalname => {
  const verify = Joi.validate(originalname, Joi.string().required());
  if (verify.error !== null) {
    return false;
  }

  const lastIndex = originalname.lastIndexOf('.');
  const { length } = originalname;
  const ext = originalname.slice(lastIndex + 1, length);
  if (
    ext !== 'xls' &&
    ext !== 'xlsx' &&
    ext !== 'jpg' &&
    ext !== 'jpeg' &&
    ext !== 'png' &&
    ext !== 'ico'
  ) {
    return false;
  }

  // returns the distinguished name of the extension
  return [ext, originalname.slice(0, lastIndex)];
};
