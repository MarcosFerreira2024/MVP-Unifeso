import { inject, injectable } from "tsyringe";
import { IOutingRepository } from "../../../domain/interfaces/IOutingRepository";
import { OutingFromDBWithRelations } from "../../../infrastructure/types/database";
import { AppError } from "../../../helpers/errorHandler";

@injectable()
class FindOutingBySlugUseCase {
  constructor(
    @inject("OutingRepository")
    private outingRepository: IOutingRepository
  ) {}

  async execute(slug: string): Promise<OutingFromDBWithRelations> {
    const outing = await this.outingRepository.findBySlug(slug);

    if (!outing) {
      throw new AppError("Outing not found", 404);
    }

    return outing;
  }
}

export { FindOutingBySlugUseCase };
