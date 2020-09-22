const bcrypt = require('bcryptjs');

module.exports = {
  crypto: value =>
    new Promise((resolve, reject) =>
      bcrypt.hash(value, 11, (err, hash) =>
        err ? reject(err) : resolve(hash),
      ),
    ),

  compare: (value, hash) => bcrypt.compareSync(value, hash),
};
