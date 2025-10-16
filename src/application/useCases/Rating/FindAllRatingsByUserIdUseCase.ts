import { inject, injectable } from "tsyringe";
import { RatingFromDBWithRelations } from "../../../infrastructure/types/dataBase";
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
