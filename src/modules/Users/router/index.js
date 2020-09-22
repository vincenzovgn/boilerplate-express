const express = require('express');
const authMiddleware = require('../../../interfaces/http/middlewares/auth');
const findProfile = require('../../Profiles/rest/get/findProfileByUserId');

const router = express.Router();
const jwt = require('../../../interfaces/jwt');

module.exports = ({ get, post, put, del }) => () => {
  router.post(
    '/login',
    async (req, res, next) => {
      try {
        const user = await get.findUser({
          where: { email: req.body.email, active: true },
        });
        const profile = await findProfile(user.id);

        if (user === null)
          return res.status(404).json({
            status: 404,
            error: true,
            response: `User ${__ERRORS.noExist}`,
          });

        const compare = get.checkPasswordUser(req.body.password, user.password);
        if (compare === false)
          return res.status(404).json({
            status: 404,
            error: true,
            response: __ERRORS.emailOrPassword,
          });

        req.payload = {
          user: user.id,
          email: user.email,
          name: profile ? profile.name : ' ',
        };
        next();
      } catch (error) {
        console.log(__dirname, error);
        return res
          .status(500)
          .json({ status: 500, error: true, response: 'Internal Sever Error' });
      }
    },
    (req, res) => {
      try {
        const expireIn = '24h';
        const token = jwt.encode(
          {
            user: req.payload.user,
            email: req.payload.email,
            name: req.payload.name,
          },
          expireIn,
        );
        return res.status(200).json({
          status: 200,
          error: false,
          response: { ...req.payload, token },
        });
      } catch (error) {
        console.log(__dirname, error);
        return res
          .status(500)
          .json({ status: 500, error: true, response: 'Internal Sever Error' });
      }
    },
  );

  /**
   * Recebe um token e verifica se é válido.
   */
  router.get('/auth/', authMiddleware, async (req, res) => {
    try {
      const authHeader = req.headers.authorization;

      if (!authHeader)
        return res.status(401).json({
          status: 401,
          error: true,
          message: __ERRORS.noProvided('token'),
        });

      const [, token] = authHeader.split(' ');

      const decodedToken = jwt.decode(token);
      if (!decodedToken) {
        return res.status(401).json({
          error: true,
          status: 401,
          message: 'Invalid Token',
        });
      }
      return res.status(200).json({
        status: 200,
        error: false,
        response: {
          isValidToken: true,
        },
      });
    } catch (error) {
      console.log(__dirname, error);
      return res.boom.badImplementation(`Internal Server Error`, {
        error: true,
      });
    }
  });

  // registrar usuário ou usuários
  router.post('/', authMiddleware, async (req, res) => {
    try {
      const data = await post.registerUsers(req.body);
      return res
        .status(200)
        .json({ status: 200, error: false, response: data });
      // return res.status([register.status]).json(register)
    } catch (error) {
      console.log(__dirname, error);
      return res.boom.badImplementation(`Internal Server Error`, {
        error: true,
      });
    }
  });

  // alterar senha do usuário
  router.put('/', authMiddleware, async (req, res) => {
    try {
      const user = await get.findUser({ where: { email: req.payload.email } });
      if (user === null)
        return res.status(401).json({
          status: 401,
          response: 'User not found or email or password invalid',
        });

      const compare = get.checkPasswordUser(req.body.password, user.password);
      if (compare === false)
        return res.status(401).json({
          status: 401,
          response: 'User not found or email or password invalid',
        });

      const data = await put.changePasswordUser(
        req.payload.email,
        req.body.newpassword,
      );
      return res
        .status(200)
        .json({ status: 200, error: false, response: data });
    } catch (error) {
      console.log(__dirname, error);
      return res.boom.badImplementation(`Internal Server Error`, {
        error: true,
      });
    }
  });

  // Ativar usuário
  router.put('/:id/active', async (req, res) => {
    try {
      const user = await get.findUserById(req.params.id);
      if (user === null)
        return res
          .status(404)
          .json({ status: 404, response: 'User not found or not exist' });

      const data = await put.activeUser({ where: { id: req.params.id } });
      return res
        .status(200)
        .json({ status: 200, error: false, response: data });
    } catch (error) {
      console.log(__dirname, error);
      return res.boom.badImplementation(`Internal Server Error`, {
        error: true,
      });
    }
  });

  // Inativar usuário
  router.delete('/:id', async (req, res) => {
    try {
      const user = await get.findUserById(req.params.id);
      if (user === null)
        return res
          .status(404)
          .json({ status: 404, response: 'User not found or not exist' });

      const data = await del.inactiveUser({ where: { id: req.params.id } });
      return res
        .status(200)
        .json({ status: 200, error: false, response: data });
    } catch (error) {
      console.log(__dirname, error);
      return res.boom.badImplementation(`Internal Server Error`, {
        error: true,
      });
    }
  });

  router.get('/', async (req, res) => {
    try {
      const data = await get.findUsers();
      return res
        .status(200)
        .json({ status: 200, error: false, response: data });
    } catch (error) {
      console.log(__dirname, error);
      return res.boom.badImplementation(`Internal Server Error`, {
        error: true,
      });
    }
  });

  return {
    router,
    endpoint: '/users',
  };
};
