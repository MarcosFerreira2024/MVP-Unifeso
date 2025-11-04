import { Trail } from "../entities/Trail";
import { TrailFromDB } from "../../infrastructure/types/database"; // Import the new type

export interface ITrailRepository {
  create(trail: Trail): Promise<TrailFromDB>; // Changed return type
  findById(id: string): Promise<TrailFromDB | null>; // Changed return type
  findByOutingId(outingId: string): Promise<TrailFromDB | null>; // Changed return type
  update(trail: Trail): Promise<TrailFromDB>; // Changed return type
  delete(id: string): Promise<void>;
}