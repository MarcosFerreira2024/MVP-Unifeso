import { Park } from "../domain/entities/Park";
import { ParkFromDB } from "../infrastructure/types/database";

export function mapParkToParkFromDb(park: Park): ParkFromDB {
  return {
    id: park.id,
    outingId: park.outingId,
    infrastructure: park.infrastructure,
    biodiversity: park.biodiversity,
    maximumCapacity: park.maximumCapacity,
    createdAt: park.createdAt,
    updatedAt: park.updatedAt,
  };
}