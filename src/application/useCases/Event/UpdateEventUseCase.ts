import { de } from "zod/v4/locales";
import { Event } from "../../../domain/entities/Event";
import { IEventRepository } from "../../../domain/interfaces/IEventRepository";
import { EventFromDB } from "../../../infrastructure/types/database"; // Import the new type
import { UseCaseResponse } from "../../../infrastructure/types/global";
import { inject, injectable } from "tsyringe";

interface UpdateEventRequest {
  eventId: string;
  outingId: string;
  maximumCapacity?: number;
  name?: string;
  description?: string | null;
  startDate?: Date;
  endDate?: Date;
}

@injectable()
export class UpdateEventUseCase {
  constructor(
    @inject("EventRepository") private eventRepository: IEventRepository
  ) {}

  async execute({
    eventId,
    outingId,
    maximumCapacity,
    name,
    description,
    startDate,
    endDate,
  }: UpdateEventRequest): Promise<UseCaseResponse> {
    const existingEventFromDb = await this.eventRepository.findById(eventId);
    if (!existingEventFromDb) throw new Error("Evento não existe");

    const updatedEventFromDb = await this.eventRepository.update(
      eventId,
      outingId,
      maximumCapacity,
      name,
      description,
      startDate,
      endDate
    );

    return {
      status: "success",
      message: "Evento Atualizado com sucesso",
      data: updatedEventFromDb,
    };
  }
}
