import { inject, injectable } from "tsyringe";
import { IRatingRepository } from "../../../domain/interfaces/IRatingRepository";
import { UseCaseResponse } from "../../../infrastructure/types/global";
import { Role } from "../../../domain/interfaces/IUserRepository";
import { AppError } from "../../../helpers/errorHandler";
import { Rating } from "../../../domain/entities/Rating";

@injectable()
class UpdateRatingUseCase {
  constructor(
    @inject("RatingRepository")
    private ratingRepository: IRatingRepository,
  ) {}

  async execute(
    ratingId: string,
    userId: string,
    role: Role,
    newRating: number,
    newContent?: string,
  ): Promise<UseCaseResponse> {
    const rating = await this.ratingRepository.findById(ratingId);
    if (!rating) {
      throw new AppError("Avaliação não encontrada", 404);
    }

    if (newRating < 1 || newRating > 5) {
      throw new AppError("Avaliação deve estar entre 1 e 5", 400);
    }

    const isOwner = rating.userId === userId;
    const isAdmin = role === "ADMIN";

    if (!isOwner && !isAdmin) {
      throw new AppError(
        "Você não tem permissão para editar esta avaliação",
        403,
      );
    }

    const { content, rating: validatedRating } = Rating.create(
      newRating,
      newContent,
    ).getDto();

    const updatedRating = await this.ratingRepository.update(
      ratingId,
      validatedRating,
      content,
    );

    return {
      message: "Avaliação atualizada com sucesso",
      status: "success",
      data: updatedRating,
    };
  }
}

export { UpdateRatingUseCase };
