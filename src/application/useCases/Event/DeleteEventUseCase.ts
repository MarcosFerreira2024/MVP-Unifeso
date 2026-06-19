import { inject, injectable } from "tsyringe";
import { IEventRepository } from "../../../domain/interfaces/IEventRepository.js";
import { UseCaseResponse } from "../../../infrastructure/types/global.js";

@injectable()
class DeleteEventUseCase {
  constructor(
    @inject("EventRepository") private eventRepository: IEventRepository
  ) {}

  async execute(eventId: string): Promise<UseCaseResponse> {
    const existingEvent = await this.eventRepository.findById(eventId);

    if (!existingEvent) {
      throw new Error("Event not found.");
    }

    await this.eventRepository.delete(eventId);

    return {
      status: "success",
      message: "Evento Deletado com sucesso",
      data: null,
    };
  }
}
export { DeleteEventUseCase };
