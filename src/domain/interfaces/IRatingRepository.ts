import {
  RatingFromDB,
  RatingFromDBWithRelations,
} from "../../infrastructure/types/database";

interface IRatingRepository {
  create(
    rating: number,
    userId: string,
    outingId: string,
    content?: string | null
  ): Promise<RatingFromDB>;

  findById(id: string): Promise<RatingFromDB | null>;
  delete(id: string): Promise<void>;
  findAllByOutingId(id: string): Promise<RatingFromDBWithRelations[] | null>;
  findAllByUserId(userId: string): Promise<RatingFromDBWithRelations[] | null>;
}

export { IRatingRepository };
