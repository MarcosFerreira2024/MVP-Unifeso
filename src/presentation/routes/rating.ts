import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { RatingController } from "../Controllers/RatingController";

const rating = Router();

rating.post("/", ensureAuthenticated, (req, res) => {
  /* #swagger.path = '/rating'
     #swagger.tags = ['Rating']
     #swagger.description = 'Endpoint para criar uma nova avaliação.'
     #swagger.security = [{
       "bearerAuth": []
     }]
     #swagger.parameters['body'] = {
       in: 'body',
       description: 'Dados da avaliação.',
       required: true,
       schema: { $ref: '#/definitions/Rating' }
     }
     #swagger.responses[201] = {
       description: 'Avaliação criada com sucesso.',
       schema: { $ref: '#/definitions/Rating' }
     }
     #swagger.responses[400] = { description: 'Dados inválidos.' }
     #swagger.responses[401] = { description: 'Não autorizado.' }
  */
  return RatingController.create(req, res);
});

rating.get("/user/:userId", (req, res) => {
  /* #swagger.path = '/rating/user/{userId}'
     #swagger.tags = ['Rating']
     #swagger.description = 'Endpoint para buscar todas as avaliações de um usuário.'
     #swagger.parameters['userId'] = {
       in: 'path',
       description: 'ID do usuário.',
       required: true,
       type: 'string'
     }
     #swagger.responses[200] = {
       description: 'Lista de avaliações do usuário.',
       schema: [{ $ref: '#/definitions/Rating' }]
     }
     #swagger.responses[400] = { description: 'ID de usuário inválido.' }
  */
  return RatingController.findAllByUserId(req, res);
});

rating.get("/outing/:outingId", (req, res) => {
  /* #swagger.path = '/rating/outing/{outingId}'
     #swagger.tags = ['Rating']
     #swagger.description = 'Endpoint para buscar todas as avaliações de um passeio.'
     #swagger.parameters['outingId'] = {
       in: 'path',
       description: 'ID do passeio.',
       required: true,
       type: 'string'
     }
     #swagger.responses[200] = {
       description: 'Lista de avaliações do passeio.',
       schema: [{ $ref: '#/definitions/Rating' }]
     }
     #swagger.responses[400] = { description: 'ID de passeio inválido.' }
  */
  return RatingController.findAllByOutingId(req, res);
});

rating.delete("/", ensureAuthenticated, (req, res) => {
  /* #swagger.path = '/rating'
     #swagger.tags = ['Rating']
     #swagger.description = 'Endpoint para deletar uma avaliação.'
     #swagger.security = [{
       "bearerAuth": []
     }]
     #swagger.parameters['body'] = {
       in: 'body',
       description: 'IDs da avaliação e do passeio.',
       required: true,
       schema: { ratingId: 'string', outingId: 'string' }
     }
     #swagger.responses[204] = { description: 'Avaliação deletada com sucesso.' }
     #swagger.responses[400] = { description: 'Dados inválidos.' }
     #swagger.responses[401] = { description: 'Não autorizado.' }
     #swagger.responses[403] = { description: 'Acesso negado.' }
     #swagger.responses[404] = { description: 'Avaliação não encontrada.' }
  */
  return RatingController.delete(req, res);
});

export { rating };
