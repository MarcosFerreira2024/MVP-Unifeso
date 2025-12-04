import { container } from "tsyringe";

import { IUserRepository } from "../../domain/interfaces/IUserRepository";
import { UserRepository } from "../../infrastructure/repositories/UserRepository";

import { IHashProvider } from "../../domain/interfaces/IHashProvider";
import { HashProvider } from "../../infrastructure/provider/HashProvider";

import { ITokenProvider } from "../../domain/interfaces/ITokenProvider";
import { TokenProvider } from "../../infrastructure/provider/TokenProvider";

import { IVerificationCodeRepository } from "../../domain/interfaces/IVerificationCodeRepository";
import { VerificationCodeRepository } from "../../infrastructure/repositories/VerificationCodeRepository";

import { IEmailService } from "../../domain/interfaces/IEmailService";
import { EmailService } from "../../infrastructure/services/email/EmailService";

import { IVerificationCodeService } from "../../domain/interfaces/IVerificationCodeService";
import { VerificationCodeService } from "../../infrastructure/services/verificationCode/VerificationCodeService";

import { IRatingRepository } from "../../domain/interfaces/IRatingRepository";
import { RatingRepository } from "../../infrastructure/repositories/RatingRepository";

import { IOutingRepository } from "../../domain/interfaces/IOutingRepository";
import { OutingRepository } from "../../infrastructure/repositories/OutingRepository";
import { ITrailRepository } from "../../domain/interfaces/ITrailRepository";
import { TrailRepository } from "../../infrastructure/repositories/TrailRepository";
import { IParkRepository } from "../../domain/interfaces/IParkRepository";
import { ParkRepository } from "../../infrastructure/repositories/ParkRepository";
import { IEventRepository } from "../../domain/interfaces/IEventRepository";
import { EventRepository } from "../../infrastructure/repositories/EventRepository";

import { FindEventByIdUseCase } from "../../application/useCases/Event/FindEventByIdUseCase";
import { UpdateEventUseCase } from "../../application/useCases/Event/UpdateEventUseCase";
import { DeleteEventUseCase } from "../../application/useCases/Event/DeleteEventUseCase";

import { DeleteUserUseCase } from "../../application/useCases/User/DeleteUserUseCase";
import { FindUserByIdUseCase } from "../../application/useCases/User/FindUserByIdUseCase";
import { UpdateUserUseCase } from "../../application/useCases/User/UpdateUserUseCase";

import { UpdateOutingUseCase } from "../../application/useCases/Outing/UpdateOutingUseCase";
import { DeleteOutingUseCase } from "../../application/useCases/Outing/DeleteOutingUseCase";
import { AddTrailUseCase } from "../../application/useCases/Outing/AddTrailUseCase";
import { AddParkUseCase } from "../../application/useCases/Outing/AddParkUseCase";
import { AddEventUseCase } from "../../application/useCases/Outing/AddEventUseCase";
import { CreateTrailUseCase } from "../../application/useCases/Outing/CreateTrailUseCase";
import { CreateParkUseCase } from "../../application/useCases/Outing/CreateParkUseCase";
import { CreateEventUseCase } from "../../application/useCases/Outing/CreateEventUseCase";

container.registerSingleton<IUserRepository>("UserRepository", UserRepository);

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

container.registerSingleton<ITrailRepository>(
  "TrailRepository",
  TrailRepository
);

container.registerSingleton<IParkRepository>("ParkRepository", ParkRepository);

container.registerSingleton<IEventRepository>(
  "EventRepository",
  EventRepository
);

container.registerSingleton("FindEventByIdUseCase", FindEventByIdUseCase);

container.registerSingleton("UpdateEventUseCase", UpdateEventUseCase);

container.registerSingleton("DeleteEventUseCase", DeleteEventUseCase);

container.registerSingleton("UpdateOutingUseCase", UpdateOutingUseCase);

container.registerSingleton("DeleteOutingUseCase", DeleteOutingUseCase);

container.registerSingleton("AddTrailUseCase", AddTrailUseCase);

container.registerSingleton("AddParkUseCase", AddParkUseCase);

container.registerSingleton("AddEventUseCase", AddEventUseCase);

container.registerSingleton("CreateTrailUseCase", CreateTrailUseCase);

container.registerSingleton("CreateParkUseCase", CreateParkUseCase);

container.registerSingleton("CreateEventUseCase", CreateEventUseCase);
