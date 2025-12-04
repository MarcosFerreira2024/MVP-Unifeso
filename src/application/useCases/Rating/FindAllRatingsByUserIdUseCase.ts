import { inject, injectable } from "tsyringe";
import { RatingFromDBWithRelations } from "../../../infrastructure/types/database";
import { IRatingRepository } from "../../../domain/interfaces/IRatingRepository";

@injectable()
class FindAllRatingsByUserIdUseCase {
  constructor(
    @inject("RatingRepository")
    private ratingRepository: IRatingRepository
  ) {}

  async execute(userId: string): Promise<RatingFromDBWithRelations[] | null> {
    return this.ratingRepository.findAllByUserId(userId);
  }
}

export { FindAllRatingsByUserIdUseCase };
