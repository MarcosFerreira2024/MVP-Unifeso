import {
  RatingFromDB,
  RatingFromDBWithRelations,
} from "../../infrastructure/types/database.js";

interface IRatingRepository {
  create(
    rating: number,
    userId: string,
    outingId: string,
    content?: string | null
  ): Promise<RatingFromDB>;

  findById(id: string): Promise<RatingFromDB | null>;
  update(id: string, rating: number, content?: string | null): Promise<RatingFromDB>;
  delete(id: string): Promise<void>;
  findAllByOutingId(id: string): Promise<RatingFromDBWithRelations[] | null>;
  findAllByUserId(userId: string): Promise<RatingFromDBWithRelations[] | null>;
}

export { IRatingRepository };
