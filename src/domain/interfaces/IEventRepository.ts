import { EventFromDB } from "../../infrastructure/types/database.js";

export interface IEventRepository {
  create(data: {
    outingId: string;
    maximumCapacity: number;
    startDate?: Date;
    endDate?: Date;
  }): Promise<EventFromDB>;
  findById(id: string): Promise<EventFromDB | null>;
  findByOutingId(outingId: string): Promise<EventFromDB | null>;
  update(
    eventId: string,
    data: {
      outingId: string;
      maximumCapacity?: number;
      startDate?: Date;
      endDate?: Date | null;
    }
  ): Promise<EventFromDB>;
  delete(id: string): Promise<void>;
  deleteByOutingId(outingId: string): Promise<void>;
}
