import { inject, injectable } from "tsyringe";
import { IOutingRepository } from "../../../domain/interfaces/IOutingRepository.js";
import { IParkRepository } from "../../../domain/interfaces/IParkRepository.js";
import { OutingFromDBWithRelations } from "../../../infrastructure/types/database.js";
import { AppError } from "../../../helpers/errorHandler.js";

@injectable()
class AddParkUseCase {
  constructor(
    @inject("OutingRepository")
    private outingRepository: IOutingRepository,
    @inject("ParkRepository")
    private parkRepository: IParkRepository
  ) {}

  async execute(
    outingId: string,
    data: {
      biodiversity: string;
      maximumCapacity: number;
    }
  ): Promise<OutingFromDBWithRelations> {
    const outing = await this.outingRepository.findById(outingId);

    if (!outing) {
      throw new AppError("Outing not found", 404);
    }

    if (outing.park) {
      throw new AppError("Park already exists for this outing", 400);
    }

    await this.parkRepository.create({
      outingId,
      ...data,
    });

    const updated = await this.outingRepository.findById(outingId);

    return updated as OutingFromDBWithRelations;
  }
}

export { AddParkUseCase };
