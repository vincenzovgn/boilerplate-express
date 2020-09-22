const express = require('express');

const router = express.Router();

const authMiddleware = require('../../../interfaces/http/middlewares/auth');

module.exports = ({ get, post, put, del }) => () => {
  /**
   * Busca todos profiles
   */
  router.get('/profiles', async (req, res) => {
    try {
      const profiles = await get.findAll();

      return res.status(200).json({
        status: 200,
        error: false,
        response: profiles,
      });
    } catch (error) {
      console.log(__dirname, error);
      return res.boom.badImplementation(`Internal Server Error`, {
        error: true,
      });
    }
  });

  /**
   * Encontrar um perfil pelo id
   */

  router.get('/profiles/:userId', async (req, res) => {
    try {
      const { userId } = req.params;

      const profile = await get.findProfileByUserId(userId);

      if (!profile) {
        return res.boom.badRequest('Profile already exists', {
          error: true,
        });
      }

      return res.status(200).json({
        status: 200,
        error: false,
        response: profile,
      });
    } catch (err) {
      console.log(__dirname, error);
      return res.boom.badImplementation('Internal Server Error', {
        error: true,
      });
    }
  });

  /**
   * Criar um Perfil
   */
  router.post('/profiles', async (req, res) => {
    try {
      const profileExists = await get.findProfileByUserId(req.body.userId);

      if (profileExists) {
        return res.boom.badRequest('Profile already exists', { error: true });
      }
      const profile = await post.createProfile(req.body);

      return res.status(200).json({
        status: 200,
        error: false,
        response: profile,
      });
    } catch (error) {
      console.log(__dirname, error);
      return res.boom.badImplementation('Internal Server Error', {
        error: true,
      });
    }
  });
  /**
   * Atualizar um perfil.
   */
  router.put('/profiles/:userId', authMiddleware, async (req, res) => {
    try {
      const { userId } = req.params;
      const data = req.body;

      const profileExist = await get.findProfileByUserId(userId);

      if (!profileExist) {
        return res.boom.badRequest('Profile does not exists.', {
          error: true,
        });
      }
      if (profileExist.dataValues.userId !== req.payload.user) {
        return res.boom.badRequest(__ERRORS.accessDenied, { error: true });
      }

      const profile = await profileExist.update({
        ...data,
        userId,
      });

      return res.status(200).json({
        status: 200,
        error: false,
        response: profile,
      });
    } catch (error) {
      console.log(__dirname, error);
      return res.boom.badImplementation('Internal Server Error', {
        error: true,
      });
    }
  });

  /**
   * Desativar um perfil
   */

  router.delete('/profiles/:userId', async (req, res) => {
    try {
      const { userId } = req.params;

      const profile = await get.findProfileByUserId(userId);

      if (!profile) {
        return res.boom.badRequest('Profile not found', { error: true });
      }

      const deactivateProfile = await del.deactivateProfile(profile.id);

      const updateProfile = await get.findProfileById(deactivateProfile);

      return res
        .status(200)
        .json({ status: 200, error: false, response: updateProfile });
    } catch (error) {
      console.log(__dirname, error);
      return res.boom.badImplementation('Internal Server Error', {
        error: true,
      });
    }
  });

  /**
   * Ativar um perfil
   */
  router.post('/profiles/:userId', async (req, res) => {
    try {
      const { userId } = req.params;

      const profile = await get.findProfileByUserId(userId);

      if (!profile) {
        return res.boom.badRequest('Profile not found', { error: true });
      }

      const activateProfile = await post.activateProfile(profile.id);
      const updateProfile = await get.findProfileById(activateProfile);

      return res
        .status(200)
        .json({ status: 200, error: false, response: updateProfile });
    } catch (error) {
      console.log(__dirname, error);
      return res.boom.badImplementation('Internal Server Error', {
        error: true,
      });
    }
  });

  return {
    router,
    endpoint: '/users',
  };
};
