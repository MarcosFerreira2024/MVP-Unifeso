import { inject, injectable } from "tsyringe";
import { IOutingRepository } from "../../../domain/interfaces/IOutingRepository";
import { IEventRepository } from "../../../domain/interfaces/IEventRepository";
import { OutingFromDBWithRelations } from "../../../infrastructure/types/database";
import { AppError } from "../../../helpers/errorHandler";

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
      name: string;
      description?: string;
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
