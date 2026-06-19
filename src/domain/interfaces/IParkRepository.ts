import { ParkFromDB } from "../../infrastructure/types/database.js";

export interface IParkRepository {
  create(data: {
    outingId: string;
    biodiversity: string;
    maximumCapacity: number;
  }): Promise<ParkFromDB>;
  findById(id: string): Promise<ParkFromDB | null>;
  findByOutingId(outingId: string): Promise<ParkFromDB | null>;
  update(
    id: string,
    data: { biodiversity?: string; maximumCapacity?: number }
  ): Promise<ParkFromDB>;
  delete(id: string): Promise<void>;
  deleteByOutingId(outingId: string): Promise<void>;
}
