const express = require('express');

const router = express.Router();

module.exports = ({ get, post, put, del }) => () => {
  router.get('/', (req, res) => {
    try {
      return res
        .status(200)
        .json({ status: 200, error: false, response: get.teste() });
    } catch (error) {
      console.log(__dirname, error);
      return res.boom.badImplementation(`Internal Server Error`, {
        error: true,
      });
    }
  });

  return {
    router,
    endpoint: '/exemplo',
  };
};
