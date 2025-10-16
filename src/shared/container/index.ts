import { container } from "tsyringe";

import { IUserRepository } from "../../domain/interfaces/IUserRepository";
import { UserRepository } from "../../infrastructure/repositories/UserRepository";

import { HashProvider } from "../../infrastructure/provider/HashProvider";

import { TokenProvider } from "../../infrastructure/provider/TokenProvider";

import { IVerificationCodeRepository } from "../../domain/interfaces/IVerificationCodeRepository";
import { VerificationCodeRepository } from "../../infrastructure/repositories/VerificationCodeRepository";

import { EmailService } from "../../infrastructure/services/email/EmailService";

import { IVerificationCodeService } from "../../domain/interfaces/IVerificationCodeService";
import { VerificationCodeService } from "../../infrastructure/services/verificationCode/VerificationCodeService";
import { IRatingRepository } from "../../domain/interfaces/IRatingRepository";
import { RatingRepository } from "../../infrastructure/repositories/RatingRepository";

container.registerSingleton<IUserRepository>("UserRepository", UserRepository);

container.registerSingleton<IHashProvider>("HashProvider", HashProvider);

container.registerSingleton<ITokenProvider>("TokenProvider", TokenProvider);

container.registerSingleton<IVerificationCodeRepository>(
  "VerificationCodeRepository",
  VerificationCodeRepository
);

container.registerSingleton<IEmailService>("EmailService", EmailService);

container.registerSingleton<IVerificationCodeService>(
  "VerificationCodeService",
  VerificationCodeService
);

container.registerSingleton<IRatingRepository>("RatingRepository", RatingRepository);
