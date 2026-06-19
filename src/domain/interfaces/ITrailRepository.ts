import { TrailFromDB } from "../../infrastructure/types/database.js";

export interface ITrailRepository {
  create(data: {
    outingId: string;
    difficulty: string;
    duration: number;
    distance: number;
    roundTrip: boolean;
  }): Promise<TrailFromDB>;
  findById(id: string): Promise<TrailFromDB | null>;
  findByOutingId(outingId: string): Promise<TrailFromDB | null>;
  update(
    id: string,
    data: {
      difficulty?: string;
      duration?: number;
      distance?: number;
      roundTrip?: boolean;
    }
  ): Promise<TrailFromDB>;
  delete(id: string): Promise<void>;
  deleteByOutingId(outingId: string): Promise<void>;
}
