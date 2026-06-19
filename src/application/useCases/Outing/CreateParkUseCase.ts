import { inject, injectable } from "tsyringe";
import {
  CreateOutingInput,
  IOutingRepository,
} from "../../../domain/interfaces/IOutingRepository.js";
import { IParkRepository } from "../../../domain/interfaces/IParkRepository.js";
import { OutingFromDBWithRelations } from "../../../infrastructure/types/database.js";
import { AppError } from "../../../helpers/errorHandler.js";
import { validateCityAndCreateLocation } from "./helpers/locationHelper.js";

@injectable()
class CreateParkUseCase {
  constructor(
    @inject("OutingRepository")
    private outingRepository: IOutingRepository,
    @inject("ParkRepository")
    private parkRepository: IParkRepository
  ) {}

  async execute(
    outingData: Omit<CreateOutingInput, "locationId"> & {
      location: { latitude: number; longitude: number; cityId: number };
    },
    parkData: {
      biodiversity: string;
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

    await this.parkRepository.create({
      outingId: outing.id,
      ...parkData,
    });

    const outingWithRelations = await this.outingRepository.findById(outing.id);

    return outingWithRelations as OutingFromDBWithRelations;
  }
}

export { CreateParkUseCase };
