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

  delete(userId: string, id: string, ratingId: string): Promise<void>;
  findAllByOutingId(id: string): Promise<RatingFromDBWithRelations[] | null>;
  findAllByUserId(userId: string): Promise<RatingFromDBWithRelations[] | null>;
}

export { IRatingRepository };
