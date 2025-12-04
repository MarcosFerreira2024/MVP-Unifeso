import { Router } from "express";
import { VerificationCodeController } from "../Controllers/VerificationCodeController";
import { AuthenticationController } from "../Controllers/AuthenticationController";
import { TokenController } from "../Controllers/TokenController";

const authentication = Router();

authentication.post("/signup", (req, res) => {
  /* #swagger.path = '/authentication/signup'
     #swagger.tags = ['Authentication']
     #swagger.description = 'Endpoint para registrar um novo usuário.'
     #swagger.parameters['body'] = {
       in: 'body',
       description: 'Dados para registro do usuário.',
       required: true,
       schema: { $ref: '#/definitions/SignUp' }
     }
     #swagger.responses[201] = {
       description: 'Usuário registrado com sucesso. Verifique seu email para ativação.',
       schema: { message: 'Usuário criado, verifique seu email' }
     }
     #swagger.responses[400] = { description: 'Dados inválidos.' }
     #swagger.responses[409] = { description: 'Email já cadastrado.' }
  */
  return AuthenticationController.signUp(req, res);
});

authentication.post("/login", (req, res) => {
  /* #swagger.path = '/authentication/login'
     #swagger.tags = ['Authentication']
     #swagger.description = 'Endpoint para autenticar um usuário e obter um token de acesso.'
     #swagger.parameters['body'] = {
       in: 'body',
       description: 'Credenciais do usuário.',
       required: true,
       schema: { $ref: '#/definitions/Login' }
     }
     #swagger.responses[200] = {
       description: 'Autenticação bem-sucedida. Retorna o token de acesso.',
       schema: { token: 'string' }
     }
     #swagger.responses[400] = { description: 'Credenciais inválidas.' }
     #swagger.responses[401] = { description: 'Não autorizado.' }
  */
  return AuthenticationController.login(req, res);
});

authentication.post("/verify-code", (req, res) => {
  /* #swagger.path = '/authentication/verify-code'
     #swagger.tags = ['Authentication']
     #swagger.description = 'Endpoint para consumir um código de verificação.'
     #swagger.parameters['body'] = {
       in: 'body',
       description: 'Código de verificação.',
       required: true,
       schema: { code: 'string' }
     }
     #swagger.responses[200] = {
       description: 'Código verificado com sucesso.',
       schema: { message: 'Código verificado com sucesso' }
     }
     #swagger.responses[400] = { description: 'Código inválido ou expirado.' }
  */
  return VerificationCodeController.consume(req, res);
});

authentication.post("/token", (req, res) => {
  /* #swagger.path = '/authentication/token'
     #swagger.tags = ['Authentication']
     #swagger.description = 'Endpoint para verificar a validade de um token.'
     #swagger.parameters['body'] = {
       in: 'body',
       description: 'Token a ser verificado.',
       required: true,
       schema: { token: 'string' }
     }
     #swagger.responses[200] = {
       description: 'Token válido.',
       schema: { message: 'Token é válido', data: 'string', status: 'success' }
     }
     #swagger.responses[400] = { description: 'Token inválido.' }
     #swagger.responses[401] = { description: 'Não autorizado.' }
  */
  return TokenController.verify(req, res);
});

authentication.post("/forgot-password", (req, res) => {
  /* #swagger.path = '/authentication/forgot-password'
     #swagger.tags = ['Authentication']
     #swagger.description = 'Endpoint para solicitar a redefinição de senha (não implementado).'
     #swagger.responses[501] = { description: 'Não implementado.' }
  */
  res.status(501).send("Não Implementado");
});

export { authentication };
