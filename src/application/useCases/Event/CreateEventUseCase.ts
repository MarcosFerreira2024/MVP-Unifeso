import { inject, injectable } from "tsyringe";
import { Event } from "../../../domain/entities/Event";
import { IEventRepository } from "../../../domain/interfaces/IEventRepository";
import { EventFromDB } from "../../../infrastructure/types/database"; // Import the new type
import { UseCaseResponse } from "../../../infrastructure/types/global";

interface CreateEventRequest {
  outingId: string;
  maximumCapacity: number;
  name: string;
  description: string | null;
  startDate: Date;
  endDate: Date | null;
}

@injectable()
class CreateEventUseCase {
  constructor(
    @inject("EventRepository") private eventRepository: IEventRepository
  ) {}

  async execute({
    maximumCapacity,
    name,
    description,
    startDate,
    endDate,
  }: CreateEventRequest): Promise<UseCaseResponse> {
    const event = Event.create(
      maximumCapacity,
      name,
      description,
      startDate,
      endDate
    );
    const createdEventFromDb = await this.eventRepository.create(event);

    return {
      status: "success",
      message: "Evento criado com sucesso.",
      data: createdEventFromDb,
    };
  }
}

export { CreateEventUseCase };
