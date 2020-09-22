module.exports = {
  method: `threw an error when running default method`,
  unknown: `unknown error`,
  invalid: `contains an invalid value`,
  empty: `is not allowed to be empty`,
  noDefined: `Not defined`,
  required: `is required`,
  allowOnly: `must be one of valid`,
  noActive: `does not active`,
  accessDenied: `access denied`,
  exist: `data already exist`,
  noExist: 'data does not exist',
  expired: `data expired`,
  emailOrPassword: `email or password invalid`,
  array: `only receives array`,
  boolean: `only receives boolean`,
  binary: `only receives buffer or string`,
  date: `only receives a number of milliseconds or valid date string`,
  function: `must be a Function`,
  object: `only receives object`,
  number: `only receives number`,
  string: `only receives string`,
  email: `Invalid email`,
  sendEmail: `Error sending e-mail`,
  internalError: `Internal Server Error`,
  malformatted() {
    return arguments.length > 0
      ? `${Object.keys(arguments)
          .map(value => arguments[value])
          .join(', ')}malformatted`
      : `malformatted`;
  },
  default() {
    return arguments.length > 0
      ? Object.keys(arguments)
          .map(value => arguments[value])
          .join('\t')
      : this.method;
  },
  noProvided() {
    return arguments.length > 0
      ? `${Object.keys(arguments)
          .map(value => arguments[value])
          .join(', ')}no provided`
      : ` no provided`;
  },
  min: limit => `must be at least ${limit} bytes`,
  max: limit => `must be less than or equal to ${limit} bytes`,
  length: length => `must be ${length} bytes`,
  ref: ref => `references ${ref} which is not a positive integer`,
  details: params => params.map(({ message }) => message).join('\n'),
};
