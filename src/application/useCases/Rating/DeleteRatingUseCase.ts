import { inject, injectable } from "tsyringe";
import { IRatingRepository } from "../../../domain/interfaces/IRatingRepository";
import { UseCaseResponse } from "../../../infrastructure/types/global";
import { IOutingRepository } from "../../../domain/interfaces/IOutingRepository";

@injectable()
class DeleteRatingUseCase {
  constructor(
    @inject("RatingRepository")
    private ratingRepository: IRatingRepository,
    @inject("OutingRepository")
    private outingRepository: IOutingRepository
  ) {}

  async execute(
    userId: string,
    outingId: string,
    ratingId: string,
    role: string
  ): Promise<UseCaseResponse> {
    const outing = await this.outingRepository.findById(outingId);

    if (!outing) {
      throw new Error("Passeio nao encontrado");
    }

    if (role === "Admin") {
      await this.ratingRepository.delete(userId, outingId, ratingId);

      return {
        message: "Avaliação Deletada com sucesso",
        status: "success",
        data: null,
      };
    }

    const ratings = await this.ratingRepository.findAllByOutingId(outingId);

    if (!ratings?.some((rating) => rating.userId === userId)) {
      throw new Error("Você não avaliou esse passeio");
    }

    await this.ratingRepository.delete(userId, outingId, ratingId);

    return {
      message: "Avaliação Deletada com sucesso",
      status: "success",
      data: null,
    };
  }
}

export { DeleteRatingUseCase };
