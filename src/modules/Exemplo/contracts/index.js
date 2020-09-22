const Joi = require('joi');
/**
 * Contratos são regras baseadas no tipo de dados
 * aceito pelo serviço
 */

module.exports = {
  exemplo: data => {
    const result = Joi.validate(
      {
        user: data.user,
        param: data.params.value,
      },
      Joi.object().keys({
        user: Joi.number().required(),
        param: Joi.string(),
      }),
      { abortEarly: false },
    );

    if (result.error || result.error != null) {
      return __ERRORS.details(result.error.details);
    }

    return data;
  },
};
