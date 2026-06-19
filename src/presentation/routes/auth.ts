import { Router } from "express";
import { AuthenticationController } from "../controllers/AuthenticationController.js";
import { VerificationCodeController } from "../controllers/VerificationCodeController.js";
import { TokenController } from "../controllers/TokenController.js";
import { authLimiter, authVerifyLimiter } from "../middlewares/rateLimiter.js";

const authentication = Router();

authentication.post("/signup", authLimiter, (req, res) => {
  return AuthenticationController.signUp(req, res);
});

authentication.post("/login", authLimiter, (req, res) => {
  return AuthenticationController.login(req, res);
});

authentication.post("/verify-code", authVerifyLimiter, (req, res) => {
  return VerificationCodeController.consume(req, res);
});

authentication.post("/token", authVerifyLimiter, (req, res) => {
  return TokenController.verify(req, res);
});

authentication.post("/forgot-password", (req, res) => {
  res.status(501).send("Não Implementado");
});

export { authentication };
