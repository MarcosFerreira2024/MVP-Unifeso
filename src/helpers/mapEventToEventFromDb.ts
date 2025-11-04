import { Event } from "../domain/entities/Event";
import { EventFromDB } from "../infrastructure/types/database";

export function mapEventToEventFromDb(event: Event): EventFromDB {
  return {
    id: event.id,
    outingId: event.outingId,
    maximumCapacity: event.maximumCapacity,
    name: event.name,
    description: event.description,
    startDate: event.startDate,
    endDate: event.endDate,
    createdAt: event.createdAt,
    updatedAt: event.updatedAt,
  };
}