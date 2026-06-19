import { inject, injectable } from "tsyringe";
import { IRatingRepository } from "../../../domain/interfaces/IRatingRepository.js";
import { UseCaseResponse } from "../../../infrastructure/types/global.js";
import { IOutingRepository } from "../../../domain/interfaces/IOutingRepository.js";
import { Rating } from "../../../domain/entities/Rating.js";

@injectable()
class CreateRatingUseCase {
  constructor(
    @inject("RatingRepository")
    private ratingRepository: IRatingRepository,
    @inject("OutingRepository")
    private outingRepository: IOutingRepository,
  ) {}

  async execute(
    rating: number,
    userId: string,
    outingId: string,
    comment?: string,
  ): Promise<UseCaseResponse> {
    const outing = await this.outingRepository.findById(outingId);

    if (!outing) {
      throw new Error("Passeio nao encontrado");
    }
    const ratings = await this.ratingRepository.findAllByOutingId(outingId);

    if (ratings?.some((rating) => rating.userId === userId)) {
      throw new Error("Você já avaliou essa atividade");
    }

    if (rating < 1 || rating > 5) {
      throw new Error("Avaliação deve estar entre 1 e 5");
    }
    const { content: newContent, rating: newRating } = Rating.create(
      rating,
      comment,
    ).getDto();

    const createdRating = await this.ratingRepository.create(
      newRating,
      userId,
      outingId,
      newContent,
    );

    return {
      message: "Avaliado com sucesso",
      status: "success",
      data: createdRating,
    };
  }
}

export { CreateRatingUseCase };
