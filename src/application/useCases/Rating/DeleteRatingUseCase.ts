import { inject, injectable } from "tsyringe";
import { IRatingRepository } from "../../../domain/interfaces/IRatingRepository.js";
import { UseCaseResponse } from "../../../infrastructure/types/global.js";
import { IOutingRepository } from "../../../domain/interfaces/IOutingRepository.js";
import { Role } from "../../../domain/interfaces/IUserRepository.js";
import { AppError } from "../../../helpers/errorHandler.js";

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
    role: Role
  ): Promise<UseCaseResponse> {
    const outing = await this.outingRepository.findById(outingId);
    if (!outing) {
      throw new AppError("Passeio nao encontrado", 404);
    }

    const rating = await this.ratingRepository.findById(ratingId);
    if (!rating) {
      throw new AppError("Avaliação não encontrada", 404);
    }

    if (rating.outingId !== outingId) {
        throw new AppError("Avaliação não pertence a este passeio", 400);
    }

    const isOwner = rating.userId === userId;
    const isAdmin = role === "ADMIN";

    if (!isOwner && !isAdmin) {
      throw new AppError("Você não tem permissão para deletar esta avaliação", 403);
    }

    await this.ratingRepository.delete(ratingId);

    return {
      message: "Avaliação Deletada com sucesso",
      status: "success",
      data: null,
    };
  }
}

export { DeleteRatingUseCase };