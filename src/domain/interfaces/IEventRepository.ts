import { Event } from "../entities/Event";
import { EventFromDB } from "../../infrastructure/types/database";

export interface IEventRepository {
  create(event: Event): Promise<EventFromDB>;
  findById(id: string): Promise<EventFromDB | null>;
  update(
    eventId: string,
    outingId: string,
    maximumCapacity?: number,
    name?: string,
    description?: string | null,
    startDate?: Date,
    endDate?: Date
  ): Promise<EventFromDB>;
  delete(id: string): Promise<void>;
}
