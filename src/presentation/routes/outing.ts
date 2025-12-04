import { Router } from "express";
import { OutingController } from "../Controllers/OutingController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { requireAdmin } from "../middlewares/requireAdmin";
import { validationMiddleware } from "../middlewares/validationMiddleware";
import { z } from "zod";
import {
  updateOutingSchema,
  addTrailSchema,
  addParkSchema,
  addEventSchema,
  createTrailSchema,
  createParkSchema,
  createEventSchema,
  outingParamsSchema,
} from "../schemas/outing.schema";

const outingRoutes = Router();
const outingController = new OutingController();

const queryOutingSchema = z.object({
  query: z.object({
    take: z.preprocess(
      (a) => parseInt(z.string().parse(a), 10),
      z.number().min(1).default(10)
    ),
    page: z.preprocess(
      (a) => parseInt(z.string().parse(a), 10),
      z.number().min(1).default(1)
    ),
    name: z.string().optional(),
    category: z.preprocess(
      (val) =>
        typeof val === "string" ? val.split(",").map((s) => s.trim()) : val,
      z.array(z.enum(["Trail", "Park", "Event", "all"])).optional()
    ),
    sortBy: z.preprocess((val) => {
      if (typeof val === "string" && ["title", "city"].includes(val)) {
        return val;
      }
      return undefined;
    }, z.enum(["title", "city"]).optional()),
    orderBy: z.enum(["asc", "desc"]).optional(),
  }),
});

outingRoutes.get(
  "/",
  validationMiddleware(queryOutingSchema),
  async (req, res) => {
    /* #swagger.path = '/outing'
       #swagger.tags = ['Outing']
       #swagger.description = 'Endpoint para listar todos os passeios com filtros e paginação.'
       #swagger.parameters['take'] = {
         in: 'query',
         description: 'Número de itens por página.',
         required: false,
         type: 'integer',
         default: 10
       }
       #swagger.parameters['page'] = {
         in: 'query',
         description: 'Número da página.',
         required: false,
         type: 'integer',
         default: 1
       }
       #swagger.parameters['name'] = {
         in: 'query',
         description: 'Filtrar passeios pelo nome.',
         required: false,
         type: 'string'
       }
       #swagger.parameters['category'] = {
         in: 'query',
         description: 'Filtrar passeios por categoria (Trail, Park, Event). Pode ser uma lista separada por vírgulas.',
         required: false,
         type: 'string'
       }
       #swagger.parameters['sortBy'] = {
         in: 'query',
         description: 'Ordenar resultados por (title, city).',
         required: false,
         type: 'string'
       }
       #swagger.parameters['orderBy'] = {
         in: 'query',
         description: 'Ordem de classificação (asc, desc).',
         required: false,
         type: 'string'
       }
       #swagger.responses[200] = {
         description: 'Lista de passeios retornada com sucesso.',
         schema: {
           type: 'object',
           properties: {
             outings: {
               type: 'array',
               items: { $ref: '#/definitions/OutingResponse' }
             },
             total: {
               type: 'integer',
               example: 100
             },
             page: {
               type: 'integer',
               example: 1
             },
             pages: {
               type: 'integer',
               example: 10
             }
           }
         }
       }
       #swagger.responses[500] = { description: 'Erro interno do servidor.' }
    */
    return outingController.findAllOutings(req, res);
  }
);

outingRoutes.get("/:slug", async (req, res) => {
  /* #swagger.path = '/outing/{slug}'
       #swagger.tags = ['Outing']
       #swagger.description = 'Endpoint para buscar um passeio específico pelo slug.'
       #swagger.parameters['slug'] = {
         in: 'path',
         description: 'Slug do passeio.',
         required: true,
         type: 'string'
       }
       #swagger.responses[200] = {
         description: 'Passeio retornado com sucesso.',
         schema: { $ref: '#/definitions/OutingResponse' }
       }
       #swagger.responses[404] = { description: 'Passeio não encontrado.' }
       #swagger.responses[500] = { description: 'Erro interno do servidor.' }
    */
  return outingController.findBySlug(req, res);
});

const updateOutingRouteSchema = z.object({
  params: outingParamsSchema,
  body: updateOutingSchema,
});

const deleteOutingRouteSchema = z.object({
  params: outingParamsSchema,
});

const addTrailRouteSchema = z.object({
  params: outingParamsSchema,
  body: addTrailSchema,
});

const addParkRouteSchema = z.object({
  params: outingParamsSchema,
  body: addParkSchema,
});

const addEventRouteSchema = z.object({
  params: outingParamsSchema,
  body: addEventSchema,
});

const createTrailRouteSchema = z.object({
  body: createTrailSchema,
});

const createParkRouteSchema = z.object({
  body: createParkSchema,
});

const createEventRouteSchema = z.object({
  body: createEventSchema,
});

outingRoutes.put(
  "/:id",
  ensureAuthenticated,
  requireAdmin,
  validationMiddleware(updateOutingRouteSchema),
  async (req, res) => {
    /* #swagger.path = '/outing/{id}'
       #swagger.tags = ['Outing']
       #swagger.description = 'Endpoint para atualizar um passeio existente.'
       #swagger.security = [{
         "bearerAuth": []
       }]
       #swagger.parameters['id'] = {
         in: 'path',
         description: 'ID do passeio.',
         required: true,
         type: 'string'
       }
       #swagger.parameters['body'] = {
         in: 'body',
         description: 'Dados para atualizar o passeio.',
         required: true,
         schema: { $ref: '#/definitions/UpdateOuting' }
       }
       #swagger.responses[200] = {
         description: 'Passeio atualizado com sucesso.',
         schema: { $ref: '#/definitions/CreateOuting' }
       }
       #swagger.responses[400] = { description: 'ID de passeio inválido ou dados inválidos.' }
       #swagger.responses[401] = { description: 'Não autorizado.' }
       #swagger.responses[403] = { description: 'Acesso negado.' }
       #swagger.responses[404] = { description: 'Passeio não encontrado.' }
    */
    return outingController.update(req, res);
  }
);

outingRoutes.delete(
  "/:id",
  ensureAuthenticated,
  requireAdmin,
  validationMiddleware(deleteOutingRouteSchema),
  async (req, res) => {
    /* #swagger.path = '/outing/{id}'
       #swagger.tags = ['Outing']
       #swagger.description = 'Endpoint para deletar um passeio existente.'
       #swagger.security = [{
         "bearerAuth": []
       }]
       #swagger.parameters['id'] = {
         in: 'path',
         description: 'ID do passeio.',
         required: true,
         type: 'string'
       }
       #swagger.responses[204] = {
         description: 'Passeio deletado com sucesso.'
       }
       #swagger.responses[400] = { description: 'ID de passeio inválido.' }
       #swagger.responses[401] = { description: 'Não autorizado.' }
       #swagger.responses[403] = { description: 'Acesso negado.' }
       #swagger.responses[404] = { description: 'Passeio não encontrado.' }
    */
    return outingController.delete(req, res);
  }
);

// Trail routes
outingRoutes.post(
  "/:id/trail",
  ensureAuthenticated,
  requireAdmin,
  validationMiddleware(addTrailRouteSchema),
  async (req, res) => {
    /* #swagger.path = '/outing/{id}/trail'
       #swagger.tags = ['Outing']
       #swagger.description = 'Endpoint para adicionar uma trilha a um passeio existente.'
       #swagger.security = [{
         "bearerAuth": []
       }]
       #swagger.parameters['id'] = {
         in: 'path',
         description: 'ID do passeio.',
         required: true,
         type: 'string'
       }
       #swagger.parameters['body'] = {
         in: 'body',
         description: 'Dados da trilha a ser adicionada.',
         required: true,
         schema: { $ref: '#/definitions/AddTrail' }
       }
       #swagger.responses[200] = {
         description: 'Trilha adicionada ao passeio com sucesso.',
         schema: { $ref: '#/definitions/CreateOuting' }
       }
       #swagger.responses[400] = { description: 'ID de passeio inválido ou dados inválidos.' }
       #swagger.responses[401] = { description: 'Não autorizado.' }
       #swagger.responses[403] = { description: 'Acesso negado.' }
       #swagger.responses[404] = { description: 'Passeio não encontrado.' }
    */
    return outingController.addTrail(req, res);
  }
);

// Park routes
outingRoutes.post(
  "/:id/park",
  ensureAuthenticated,
  requireAdmin,
  validationMiddleware(addParkRouteSchema),
  async (req, res) => {
    /* #swagger.path = '/outing/{id}/park'
       #swagger.tags = ['Outing']
       #swagger.description = 'Endpoint para adicionar um parque a um passeio existente.'
       #swagger.security = [{
         "bearerAuth": []
       }]
       #swagger.parameters['id'] = {
         in: 'path',
         description: 'ID do passeio.',
         required: true,
         type: 'string'
       }
       #swagger.parameters['body'] = {
         in: 'body',
         description: 'Dados do parque a ser adicionado.',
         required: true,
         schema: { $ref: '#/definitions/AddPark' }
       }
       #swagger.responses[200] = {
         description: 'Parque adicionado ao passeio com sucesso.',
         schema: { $ref: '#/definitions/CreateOuting' }
       }
       #swagger.responses[400] = { description: 'ID de passeio inválido ou dados inválidos.' }
       #swagger.responses[401] = { description: 'Não autorizado.' }
       #swagger.responses[403] = { description: 'Acesso negado.' }
       #swagger.responses[404] = { description: 'Passeio não encontrado.' }
    */
    return outingController.addPark(req, res);
  }
);

// Event routes
outingRoutes.post(
  "/:id/event",
  ensureAuthenticated,
  requireAdmin,
  validationMiddleware(addEventRouteSchema),
  async (req, res) => {
    /* #swagger.path = '/outing/{id}/event'
       #swagger.tags = ['Outing']
       #swagger.description = 'Endpoint para adicionar um evento a um passeio existente.'
       #swagger.security = [{
         "bearerAuth": []
       }]
       #swagger.parameters['id'] = {
         in: 'path',
         description: 'ID do passeio.',
         required: true,
         type: 'string'
       }
       #swagger.parameters['body'] = {
         in: 'body',
         description: 'Dados do evento a ser adicionado.',
         required: true,
         schema: { $ref: '#/definitions/AddEvent' }
       }
       #swagger.responses[200] = {
         description: 'Evento adicionado ao passeio com sucesso.',
         schema: { $ref: '#/definitions/CreateOuting' }
       }
       #swagger.responses[400] = { description: 'ID de passeio inválido ou dados inválidos.' }
       #swagger.responses[401] = { description: 'Não autorizado.' }
       #swagger.responses[403] = { description: 'Acesso negado.' }
       #swagger.responses[404] = { description: 'Passeio não encontrado.' }
    */
    return outingController.addEvent(req, res);
  }
);

// Create routes (create outing with trail/park/event)
outingRoutes.post(
  "/trail",
  ensureAuthenticated,
  requireAdmin,
  validationMiddleware(createTrailRouteSchema),
  async (req, res) => {
    /* #swagger.path = '/outing/trail'
       #swagger.tags = ['Outing']
       #swagger.description = 'Endpoint para criar um novo passeio do tipo trilha.'
       #swagger.security = [{
         "bearerAuth": []
       }]
       #swagger.parameters['body'] = {
         in: 'body',
         description: 'Dados para criar o passeio de trilha.',
         required: true,
         schema: { $ref: '#/definitions/CreateTrailOuting' }
       }
       #swagger.responses[201] = {
         description: 'Passeio de trilha criado com sucesso.',
         schema: { $ref: '#/definitions/CreateOuting' }
       }
       #swagger.responses[400] = { description: 'Dados inválidos.' }
       #swagger.responses[401] = { description: 'Não autorizado.' }
       #swagger.responses[403] = { description: 'Acesso negado.' }
    */
    return outingController.createTrail(req, res);
  }
);

outingRoutes.post(
  "/park",
  ensureAuthenticated,
  requireAdmin,
  validationMiddleware(createParkRouteSchema),
  async (req, res) => {
    /* #swagger.path = '/outing/park'
       #swagger.tags = ['Outing']
       #swagger.description = 'Endpoint para criar um novo passeio do tipo parque.'
       #swagger.security = [{
         "bearerAuth": []
       }]
       #swagger.parameters['body'] = {
         in: 'body',
         description: 'Dados para criar o passeio de parque.',
         required: true,
         schema: { $ref: '#/definitions/CreateParkOuting' }
       }
       #swagger.responses[201] = {
         description: 'Passeio de parque criado com sucesso.',
         schema: { $ref: '#/definitions/CreateOuting' }
       }
       #swagger.responses[400] = { description: 'Dados inválidos.' }
       #swagger.responses[401] = { description: 'Não autorizado.' }
       #swagger.responses[403] = { description: 'Acesso negado.' }
    */
    return outingController.createPark(req, res);
  }
);

outingRoutes.post(
  "/event",
  ensureAuthenticated,
  requireAdmin,
  validationMiddleware(createEventRouteSchema),
  async (req, res) => {
    /* #swagger.path = '/outing/event'
       #swagger.tags = ['Outing']
       #swagger.description = 'Endpoint para criar um novo passeio do tipo evento.'
       #swagger.security = [{
         "bearerAuth": []
       }]
       #swagger.parameters['body'] = {
         in: 'body',
         description: 'Dados para criar o passeio de evento.',
         required: true,
         schema: { $ref: '#/definitions/CreateEventOuting' }
       }
       #swagger.responses[201] = {
         description: 'Passeio de evento criado com sucesso.',
         schema: { $ref: '#/definitions/CreateOuting' }
       }
       #swagger.responses[400] = { description: 'Dados inválidos.' }
       #swagger.responses[401] = { description: 'Não autorizado.' }
       #swagger.responses[403] = { description: 'Acesso negado.' }
    */
    return outingController.createEvent(req, res);
  }
);

export { outingRoutes };
