import { Trail } from "../domain/entities/Trail";
import { TrailFromDB } from "../infrastructure/types/database";

export function mapTrailToTrailFromDb(trail: Trail): TrailFromDB {
  return {
    id: trail.id,
    outingId: trail.outingId,
    difficulty: trail.difficulty,
    duration: trail.duration,
    distance: trail.distance,
    roundTrip: trail.roundTrip,
    createdAt: trail.createdAt,
    updatedAt: trail.updatedAt,
  };
}