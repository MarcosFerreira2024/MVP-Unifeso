import { inject, injectable } from "tsyringe";
import {
  CreateOutingInput,
  IOutingRepository,
} from "../../../domain/interfaces/IOutingRepository.js";
import { IEventRepository } from "../../../domain/interfaces/IEventRepository.js";
import { OutingFromDBWithRelations } from "../../../infrastructure/types/database.js";
import { AppError } from "../../../helpers/errorHandler.js";
import { validateCityAndCreateLocation } from "./helpers/locationHelper.js";

@injectable()
class CreateEventUseCase {
  constructor(
    @inject("OutingRepository")
    private outingRepository: IOutingRepository,
    @inject("EventRepository")
    private eventRepository: IEventRepository
  ) {}

  async execute(
    outingData: Omit<CreateOutingInput, "locationId"> & {
      location: { latitude: number; longitude: number; cityId: number };
    },
    eventData: {
      maximumCapacity: number;
    }
  ): Promise<OutingFromDBWithRelations> {
    const slugExists = await this.outingRepository.findBySlug(outingData.slug);

    if (slugExists) {
      throw new AppError("Slug already exists", 400);
    }
    const locationId = await validateCityAndCreateLocation(outingData.location);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { location, ...outingFields } = outingData;
    const outing = await this.outingRepository.create({
      ...outingFields,
      locationId,
    });

    await this.eventRepository.create({
      outingId: outing.id,
      ...eventData,
    });

    const outingWithRelations = await this.outingRepository.findById(outing.id);

    return outingWithRelations as OutingFromDBWithRelations;
  }
}

export { CreateEventUseCase };
