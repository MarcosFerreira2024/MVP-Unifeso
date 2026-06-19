import { IEventRepository } from "../../../domain/interfaces/IEventRepository";
import { UseCaseResponse } from "../../../infrastructure/types/global";
import { inject, injectable } from "tsyringe";

interface UpdateEventRequest {
  eventId: string;
  data: {
    outingId: string;
    maximumCapacity?: number;
    name?: string;
    description?: string | null;
    startDate?: Date;
    endDate?: Date;
  };
}

@injectable()
export class UpdateEventUseCase {
  constructor(
    @inject("EventRepository") private eventRepository: IEventRepository
  ) {}

  async execute({
    eventId,
    data,
  }: UpdateEventRequest): Promise<UseCaseResponse> {
    const existingEventFromDb = await this.eventRepository.findById(eventId);
    if (!existingEventFromDb) throw new Error("Evento não existe");

    const updatedEventFromDb = await this.eventRepository.update(eventId, data);

    return {
      status: "success",
      message: "Evento Atualizado com sucesso",
      data: updatedEventFromDb,
    };
  }
}
