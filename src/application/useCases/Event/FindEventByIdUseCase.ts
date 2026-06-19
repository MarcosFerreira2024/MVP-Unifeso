import { inject, injectable } from "tsyringe";
import { IEventRepository } from "../../../domain/interfaces/IEventRepository.js";
import { UseCaseResponse } from "../../../infrastructure/types/global.js";

@injectable()
class FindEventByIdUseCase {
  constructor(
    @inject("EventRepository") private eventRepository: IEventRepository
  ) {}

  async execute(eventId: string): Promise<UseCaseResponse> {
    const eventFromDb = await this.eventRepository.findById(eventId);

    return {
      status: "success",
      message: "Eventos Encontrados",
      data: eventFromDb,
    };
  }
}
export { FindEventByIdUseCase };
