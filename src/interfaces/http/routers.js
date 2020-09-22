const express = require('express');

/**
 * Importe seus modulos aqui.
 */
const Exemplo = require('../../modules/Exemplo');
const Users = require('../../modules/Users');
const Profiles = require('../../modules/Profiles');

const router = express.Router();

/** Routes */

/**
 * Rota Exemplo
 */
const ExemploRouter = Exemplo.router();
router.use(ExemploRouter.endpoint, ExemploRouter.router);

/**
 * Rotas Modulo: Users
 */
const UsersRoters = Users.router();
router.use(UsersRoters.endpoint, UsersRoters.router);

/**
 * Rotas Modulo: Profiles
 */
const ProfilesRouter = Profiles.router();
router.use(ProfilesRouter.endpoint, ProfilesRouter.router);

module.exports = router;
