import { inject, injectable } from "tsyringe";
import { IOutingRepository } from "../../../domain/interfaces/IOutingRepository.js";
import { IEventRepository } from "../../../domain/interfaces/IEventRepository.js";
import { OutingFromDBWithRelations } from "../../../infrastructure/types/database.js";
import { AppError } from "../../../helpers/errorHandler.js";

@injectable()
class AddEventUseCase {
  constructor(
    @inject("OutingRepository")
    private outingRepository: IOutingRepository,
    @inject("EventRepository")
    private eventRepository: IEventRepository
  ) {}

  async execute(
    outingId: string,
    data: {
      maximumCapacity: number;
      startDate?: Date;
      endDate?: Date;
    }
  ): Promise<OutingFromDBWithRelations> {
    const outing = await this.outingRepository.findById(outingId);

    if (!outing) {
      throw new AppError("Outing not found", 404);
    }

    await this.eventRepository.create({
      outingId,
      ...data,
    });

    const updated = await this.outingRepository.findById(outingId);

    return updated as OutingFromDBWithRelations;
  }
}

export { AddEventUseCase };
