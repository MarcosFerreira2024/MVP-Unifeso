import { Park } from "../entities/Park";
import { ParkFromDB } from "../../infrastructure/types/database"; // Import the new type

export interface IParkRepository {
  create(park: Park): Promise<ParkFromDB>;
  findById(id: string): Promise<ParkFromDB | null>;
  findByOutingId(outingId: string): Promise<ParkFromDB | null>;
  update(park: Park): Promise<ParkFromDB>;
  delete(id: string): Promise<void>;
}
