import { Router } from "express";
import { UserController } from "../Controllers/UserController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { requireAdmin } from "../middlewares/requireAdmin";
import { z } from "zod";
import { validationMiddleware } from "../middlewares/validationMiddleware";
import { updateUserSchema } from "../schemas/user.schema";

const userRoutes = Router();
const userController = new UserController();

const paramsSchema = z.object({
  params: z.object({
    id: z.string("Invalid user ID format"),
  }),
});

const updateUserRouteSchema = z.object({
  params: z.object({
    id: z.string("Invalid user ID format"),
  }),
  body: updateUserSchema,
});

userRoutes.use(ensureAuthenticated);

userRoutes.get(
  "/users/:id",
  validationMiddleware(paramsSchema),
  async (req, res) => {
    /* #swagger.path = '/users/{id}'
     #swagger.tags = ['User']
     #swagger.security = [{
       "bearerAuth": []
     }]
     #swagger.parameters['authorization'] = {
       in: 'header',
       description: 'Bearer token',
       required: true,
       type: 'string'
     }
     #swagger.parameters['id'] = {
       in: 'path',
       description: 'ID do usuário.',
       required: true,
       type: 'string'
     }
     #swagger.responses[200] = {
       description: 'Usuário retornado com sucesso.',
       schema: { $ref: '#/definitions/User' }
     }
     #swagger.responses[400] = { description: 'ID de usuário inválido.' }
     #swagger.responses[401] = { description: 'Não autorizado.' }
     #swagger.responses[404] = { description: 'Usuário não encontrado.' }
  */
    return userController.findById(req, res);
  }
);

userRoutes.get("/user", async (req, res) => {
  /* #swagger.path = '/user'
     #swagger.tags = ['User']
     #swagger.security = [{
       "bearerAuth": []
     }]
     #swagger.parameters['authorization'] = {
       in: 'header',
       description: 'Bearer token',
       required: true,
       type: 'string'
     }
     #swagger.responses[200] = {
       description: 'Usuário retornado com sucesso.',
       schema: { $ref: '#/definitions/User' }
     }
     #swagger.responses[401] = { description: 'Não autorizado.' }
     #swagger.responses[404] = { description: 'Usuário não encontrado.' }
  */
  return userController.getProfile(req, res);
});

userRoutes.get("/users", requireAdmin, async (req, res) => {
  /* #swagger.path = '/users'
   #swagger.tags = ['User']
   #swagger.description = 'Endpoint para listar todos os usuários.'
   #swagger.security = [{
     "bearerAuth": []
   }]
   #swagger.parameters['authorization'] = {
     in: 'header',
     description: 'Bearer token',
     required: true,
     type: 'string'
   }
   #swagger.responses[200] = {
     description: 'Lista de usuários retornada com sucesso.',
     schema: [{ $ref: '#/definitions/User' }]
   }
   #swagger.responses[401] = { description: 'Não autorizado.' }
   #swagger.responses[403] = { description: 'Acesso negado, requer privilégios de administrador.' }
  */
  return userController.list(req, res);
});

userRoutes.put(
  "/users/:id",
  requireAdmin,
  validationMiddleware(updateUserRouteSchema),
  async (req, res) => {
    /* #swagger.path = '/users/{id}'
     #swagger.tags = ['User']
     #swagger.description = 'Endpoint para atualizar um usuário.'
     #swagger.security = [{
       "bearerAuth": []
     }]
     #swagger.parameters['authorization'] = {
       in: 'header',
       description: 'Bearer token',
       required: true,
       type: 'string'
     }
     #swagger.parameters['id'] = {
       in: 'path',
       description: 'ID do usuário.',
       required: true,
       type: 'string'
     }
     #swagger.parameters['body'] = {
       in: 'body',
       description: 'Dados para atualizar o usuário.',
       required: true,
       schema: { $ref: '#/definitions/UpdateUser' }
     }
     #swagger.responses[200] = {
       description: 'Usuário atualizado com sucesso.',
       schema: { $ref: '#/definitions/User' }
     }
     #swagger.responses[400] = { description: 'ID de usuário inválido ou dados inválidos.' }
     #swagger.responses[401] = { description: 'Não autorizado.' }
     #swagger.responses[403] = { description: 'Acesso negado.' }
     #swagger.responses[404] = { description: 'Usuário não encontrado.' }
  */
    return userController.update(req, res);
  }
);

userRoutes.delete(
  "/users/:id",
  requireAdmin,
  validationMiddleware(paramsSchema),
  async (req, res) => {
    /* #swagger.path = '/users/{id}'
     #swagger.tags = ['User']
     #swagger.description = 'Endpoint para deletar um usuário.'
     #swagger.security = [{
       "bearerAuth": []
     }]
     #swagger.parameters['authorization'] = {
       in: 'header',
       description: 'Bearer token',
       required: true,
       type: 'string'
     }
     #swagger.parameters['id'] = {
       in: 'path',
       description: 'ID do usuário.',
       required: true,
       type: 'string'
     }
     #swagger.responses[204] = {
       description: 'Usuário deletado com sucesso.'
     }
     #swagger.responses[400] = { description: 'ID de usuário inválido.' }
     #swagger.responses[401] = { description: 'Não autorizado.' }
     #swagger.responses[403] = { description: 'Acesso negado.' }
     #swagger.responses[404] = { description: 'Usuário não encontrado.' }
  */
    return userController.delete(req, res);
  }
);

export { userRoutes };
