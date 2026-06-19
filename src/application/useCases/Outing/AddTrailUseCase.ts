import { inject, injectable } from "tsyringe";
import { IOutingRepository } from "../../../domain/interfaces/IOutingRepository.js";
import { ITrailRepository } from "../../../domain/interfaces/ITrailRepository.js";
import { OutingFromDBWithRelations } from "../../../infrastructure/types/database.js";
import { AppError } from "../../../helpers/errorHandler.js";

@injectable()
class AddTrailUseCase {
  constructor(
    @inject("OutingRepository")
    private outingRepository: IOutingRepository,
    @inject("TrailRepository")
    private trailRepository: ITrailRepository
  ) {}

  async execute(
    outingId: string,
    data: {
      difficulty: string;
      duration: number;
      distance: number;
      roundTrip: boolean;
    }
  ): Promise<OutingFromDBWithRelations> {
    const outing = await this.outingRepository.findById(outingId);

    if (!outing) {
      throw new AppError("Outing not found", 404);
    }

    if (outing.trail) {
      throw new AppError("Trail already exists for this outing", 400);
    }

    await this.trailRepository.create({
      outingId,
      ...data,
    });

    const updated = await this.outingRepository.findById(outingId);

    return updated as OutingFromDBWithRelations;
  }
}

export { AddTrailUseCase };
