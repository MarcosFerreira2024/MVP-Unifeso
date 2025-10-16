import { inject, injectable } from "tsyringe";
import { IRatingRepository } from "../../../domain/interfaces/IRatingRepository";
import { UseCaseResponse } from "../../../infrastructure/types/global";
import { IOutingRepository } from "../../../domain/interfaces/IOutingRepository";
import { Rating } from "../../../domain/entities/Rating";

@injectable()
class CreateRatingUseCase {
  constructor(
    @inject("RatingRepository")
    private ratingRepository: IRatingRepository,
    @inject("OutingRepository")
    private outingRepository: IOutingRepository
  ) {}

  async execute(
    rating: number,
    userId: string,
    outingId: string,
    content?: string
  ): Promise<UseCaseResponse> {
    const outing = await this.outingRepository.findById(outingId);

    if (!outing) {
      throw new Error("Passeio nao encontrado");
    }
    const ratings = await this.ratingRepository.findAllByOutingId(outingId);

    if (ratings?.some((rating) => rating.userId === userId)) {
      throw new Error("Você já avaliou essa atividade");
    }

    const { content: newContent, rating: newRating } = Rating.create(
      rating,
      content
    ).getDto();

    const createdRating = await this.ratingRepository.create(
      newRating,
      userId,
      outingId,
      newContent
    );

    return {
      message: "Avaliado com sucesso",
      status: "success",
      data: createdRating,
    };
  }
}

export { CreateRatingUseCase };
