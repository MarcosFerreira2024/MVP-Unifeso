import { inject, injectable } from "tsyringe";
import { IRatingRepository } from "../../../domain/interfaces/IRatingRepository";
import { RatingFromDBWithRelations } from "../../../infrastructure/types/dataBase";

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
