import { container } from "tsyringe";

import { IUserRepository } from "../../domain/interfaces/IUserRepository.js";
import { UserRepository } from "../../infrastructure/repositories/UserRepository.js";

import { IHashProvider } from "../../domain/interfaces/IHashProvider.js";
import { HashProvider } from "../../infrastructure/provider/HashProvider.js";

import { ITokenProvider } from "../../domain/interfaces/ITokenProvider.js";
import { TokenProvider } from "../../infrastructure/provider/TokenProvider.js";

import { IVerificationCodeRepository } from "../../domain/interfaces/IVerificationCodeRepository.js";
import { VerificationCodeRepository } from "../../infrastructure/repositories/VerificationCodeRepository.js";

import { IEmailService } from "../../domain/interfaces/IEmailService.js";
import { EmailService } from "../../infrastructure/services/email/EmailService.js";

import { IVerificationCodeService } from "../../domain/interfaces/IVerificationCodeService.js";
import { VerificationCodeService } from "../../infrastructure/services/verificationCode/VerificationCodeService.js";

import { IRatingRepository } from "../../domain/interfaces/IRatingRepository.js";
import { RatingRepository } from "../../infrastructure/repositories/RatingRepository.js";

import { IOutingRepository } from "../../domain/interfaces/IOutingRepository.js";
import { OutingRepository } from "../../infrastructure/repositories/OutingRepository.js";
import { ITrailRepository } from "../../domain/interfaces/ITrailRepository.js";
import { TrailRepository } from "../../infrastructure/repositories/TrailRepository.js";
import { IParkRepository } from "../../domain/interfaces/IParkRepository.js";
import { ParkRepository } from "../../infrastructure/repositories/ParkRepository.js";
import { IEventRepository } from "../../domain/interfaces/IEventRepository.js";
import { EventRepository } from "../../infrastructure/repositories/EventRepository.js";

import { FindEventByIdUseCase } from "../../application/useCases/Event/FindEventByIdUseCase.js";
import { UpdateEventUseCase } from "../../application/useCases/Event/UpdateEventUseCase.js";
import { DeleteEventUseCase } from "../../application/useCases/Event/DeleteEventUseCase.js";

import { DeleteUserUseCase } from "../../application/useCases/User/DeleteUserUseCase.js";
import { FindUserByIdUseCase } from "../../application/useCases/User/FindUserByIdUseCase.js";
import { UpdateUserUseCase } from "../../application/useCases/User/UpdateUserUseCase.js";

import { UpdateOutingUseCase } from "../../application/useCases/Outing/UpdateOutingUseCase.js";
import { DeleteOutingUseCase } from "../../application/useCases/Outing/DeleteOutingUseCase.js";
import { AddTrailUseCase } from "../../application/useCases/Outing/AddTrailUseCase.js";
import { AddParkUseCase } from "../../application/useCases/Outing/AddParkUseCase.js";
import { AddEventUseCase } from "../../application/useCases/Outing/AddEventUseCase.js";
import { CreateTrailUseCase } from "../../application/useCases/Outing/CreateTrailUseCase.js";
import { CreateParkUseCase } from "../../application/useCases/Outing/CreateParkUseCase.js";
import { CreateEventUseCase } from "../../application/useCases/Outing/CreateEventUseCase.js";

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
