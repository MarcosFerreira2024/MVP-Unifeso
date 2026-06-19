import { inject, injectable } from "tsyringe";
import { IRatingRepository } from "../../../domain/interfaces/IRatingRepository.js";
import { RatingFromDBWithRelations } from "../../../infrastructure/types/database.js";

@injectable()
class FindAllRatingsByOutingIdUseCase {
  constructor(
    @inject("RatingRepository")
    private ratingRepository: IRatingRepository
  ) {}

  async execute(outingId: string): Promise<RatingFromDBWithRelations[] | null> {
    return this.ratingRepository.findAllByOutingId(outingId);
  }
}

export { FindAllRatingsByOutingIdUseCase };
