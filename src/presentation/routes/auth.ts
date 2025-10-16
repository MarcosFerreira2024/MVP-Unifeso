import { Router } from "express";
import { AuthenticationController } from "../controllers/AuthenticationController";
import { VerificationCodeController } from "../controllers/VerificationCodeController";
import { TokenController } from "../controllers/TokenController";

const authentication = Router();

authentication.post("/signup", (req, res) =>
  AuthenticationController.signUp(req, res)
);

authentication.post("/login", (req, res) =>
  AuthenticationController.login(req, res)
);

authentication.post("/verify-code", (req, res) =>
  VerificationCodeController.consume(req, res)
);

authentication.post("/token", (req, res) => TokenController.verify(req, res));

authentication.post("/forgot-password", (req, res) => {}); // Todo

export { authentication };
