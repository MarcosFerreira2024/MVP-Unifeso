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
import { IOutingRepository } from "../../domain/interfaces/IOutingRepository";
import { OutingRepository } from "../../infrastructure/repositories/OutingRepository";

import { IParkRepository } from "../../domain/interfaces/IParkRepository";
import { ParkRepository } from "../../infrastructure/repositories/ParkRepository";
import { CreateParkUseCase } from "../../application/useCases/Park/CreateParkUseCase";
import { FindParkByIdUseCase } from "../../application/useCases/Park/FindParkByIdUseCase";
import { UpdateParkUseCase } from "../../application/useCases/Park/UpdateParkUseCase";
import { DeleteParkUseCase } from "../../application/useCases/Park/DeleteParkUseCase";

import { ITrailRepository } from "../../domain/interfaces/ITrailRepository";
import { TrailRepository } from "../../infrastructure/repositories/TrailRepository";
import { CreateTrailUseCase } from "../../application/useCases/Trail/CreateTrailUseCase";
import { FindTrailByIdUseCase } from "../../application/useCases/Trail/FindTrailByIdUseCase";
import { UpdateTrailUseCase } from "../../application/useCases/Trail/UpdateTrailUseCase";
import { DeleteTrailUseCase } from "../../application/useCases/Trail/DeleteTrailUseCase";

import { IEventRepository } from "../../domain/interfaces/IEventRepository";
import { EventRepository } from "../../infrastructure/repositories/EventRepository";
import { CreateEventUseCase } from "../../application/useCases/Event/CreateEventUseCase";
import { FindEventByIdUseCase } from "../../application/useCases/Event/FindEventByIdUseCase";
import { UpdateEventUseCase } from "../../application/useCases/Event/UpdateEventUseCase";
import { DeleteEventUseCase } from "../../application/useCases/Event/DeleteEventUseCase";
import { ITokenProvider } from "../../domain/interfaces/ITokenProvider";
import { FindUserByEmailUseCase } from "../../application/useCases/User/FindUserByEmailUseCase";
import { DeleteUserUseCase } from "../../application/useCases/User/DeleteUserUseCase";
import { FindUserByIdUseCase } from "../../application/useCases/User/FindUserByIdUseCase";
import { UpdateUserUseCase } from "../../application/useCases/User/UpdateUserUseCase";

container.registerSingleton<IUserRepository>("UserRepository", UserRepository);

container.registerSingleton("FindUserByEmailUseCase", FindUserByEmailUseCase);

container.registerSingleton("FindUserByIdUseCase", FindUserByIdUseCase);

container.registerSingleton("DeleteUserUseCase", DeleteUserUseCase);

container.registerSingleton("UpdateUserUseCase", UpdateUserUseCase);

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

container.registerSingleton<IRatingRepository>(
  "RatingRepository",
  RatingRepository
);

container.registerSingleton<IOutingRepository>(
  "OutingRepository",
  OutingRepository
);

container.registerSingleton<IParkRepository>("ParkRepository", ParkRepository);

container.registerSingleton("CreateParkUseCase", CreateParkUseCase);

container.registerSingleton("FindParkByIdUseCase", FindParkByIdUseCase);

container.registerSingleton("UpdateParkUseCase", UpdateParkUseCase);

container.registerSingleton("DeleteParkUseCase", DeleteParkUseCase);

container.registerSingleton<ITrailRepository>(
  "TrailRepository",
  TrailRepository
);

container.registerSingleton("CreateTrailUseCase", CreateTrailUseCase);

container.registerSingleton("FindTrailByIdUseCase", FindTrailByIdUseCase);

container.registerSingleton("UpdateTrailUseCase", UpdateTrailUseCase);

container.registerSingleton("DeleteTrailUseCase", DeleteTrailUseCase);

container.registerSingleton<IEventRepository>(
  "EventRepository",
  EventRepository
);

container.registerSingleton("CreateEventUseCase", CreateEventUseCase);

container.registerSingleton("FindEventByIdUseCase", FindEventByIdUseCase);

container.registerSingleton("UpdateEventUseCase", UpdateEventUseCase);

container.registerSingleton("DeleteEventUseCase", DeleteEventUseCase);
