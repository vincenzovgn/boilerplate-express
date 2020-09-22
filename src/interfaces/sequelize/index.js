const moment = require('moment');

module.exports = model => {
  return {
    /**
     * @param {object} data
     *
     * @returns {Object}
     */
    create: data => {
      try {
        if (data === '' || typeof data !== 'object') {
          return false;
        }

        return new Promise((resolve, reject) =>
          model
            .create(data)
            .then(result => resolve(result))
            .catch(error => {
              console.log(error);
              console.log('Error ', model.getTableName());
              resolve(error.errors[0].message);
            }),
        );
      } catch (error) {
        return error;
      }
    },

    bulkCreate: data => {
      try {
        if (data === '' || typeof data !== 'object') {
          return false;
        }
        return new Promise((resolve, reject) =>
          model
            .bulkCreate(data)
            .then(result => resolve(result))
            .catch(error => {
              console.log(error);
              console.log('Error ', model.getTableName());
              resolve(error.errors[0].message);
            }),
        );
      } catch (error) {
        return error;
      }
    },

    findAll: (query = {}) => {
      try {
        return new Promise((resolve, reject) =>
          model
            .findAll(query)
            .then(result => resolve(result))
            .catch(error => {
              console.log(error);
              console.log('Error ', model.getTableName());
              resolve(error.errors[0].message);
            }),
        );
      } catch (error) {
        return error;
      }
    },

    findById: query => {
      try {
        return new Promise((resolve, reject) =>
          model
            .findByPk(query)
            .then(result => resolve(result))
            .catch(error => {
              console.log(error);
              console.log('Error ', model.getTableName());
              resolve(error.errors[0].message);
            }),
        );
      } catch (error) {
        return error;
      }
    },

    findOne: (query = {}) => {
      try {
        return new Promise((resolve, reject) =>
          model
            .findOne(query)
            .then(result => resolve(result))
            .catch(error => {
              console.log(error);
              console.log('Error ', model.getTableName());
              resolve(error.errors[0].message);
            }),
        );
      } catch (error) {
        return error;
      }
    },

    findAndCountAll: (query = {}) => {
      try {
        return new Promise((resolve, reject) =>
          model
            .findAndCountAll(query)
            .then(result => resolve(result))
            .catch(error => {
              console.log(error);
              console.log('Error ', model.getTableName());
              resolve(error.errors[0].message);
            }),
        );
      } catch (error) {
        return error;
      }
    },

    update: (data, query) => {
      try {
        return new Promise((resolve, reject) =>
          model
            .update(data, query)
            .then(result => resolve(result[0]))
            .catch(error => {
              console.log(error);
              console.log('Error ', model.getTableName());
              resolve(error.errors[0].message);
            }),
        );
      } catch (error) {
        return error;
      }
    },

    upsert: async (data, query) => {
      try {
        return new Promise((resolve, reject) =>
          model
            .delete(query)
            .then(response => {
              return model
                .create(data)
                .then(result => resolve(result))
                .catch(error => {
                  console.log(error);
                  console.log('Error ', model.getTableName());
                  resolve(error.errors[0].message);
                });
            })
            .catch(error => {
              console.log(error);
              console.log('Error ', model.getTableName());
              resolve(error.errors[0].message);
            }),
        );
      } catch (error) {
        return error;
      }
    },

    delete: query => {
      try {
        return new Promise((resolve, reject) =>
          model
            .destroy(query)
            .then(result => resolve(result))
            .catch(error => {
              console.log(error);
              console.log('Error ', model.getTableName());
              resolve(error.errors[0].message);
            }),
        );
      } catch (error) {
        return error;
      }
    },

    sum: (field, query = {}) => {
      try {
        return new Promise((resolve, reject) =>
          model
            .sum(field, query)
            .then(result => resolve(result))
            .catch(error => {
              console.log(error);
              console.log('Error ', model.getTableName());
              resolve(error.errors[0].message);
            }),
        );
      } catch (error) {
        return error;
      }
    },

    count: (query = {}) => {
      // if (query != null)
      //   return model.count(query);
      // return model.count()
      try {
        return new Promise((resolve, reject) =>
          model
            .count(query)
            .then(result => resolve(result))
            .catch(error => {
              console.log(error);
              console.log('Error ', model.getTableName());
              resolve(error.errors[0].message);
            }),
        );
      } catch (error) {
        return error;
      }
    },
  };
};
