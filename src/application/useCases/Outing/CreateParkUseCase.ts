import { inject, injectable } from "tsyringe";
import {
  CreateOutingInput,
  IOutingRepository,
} from "../../../domain/interfaces/IOutingRepository";
import { IParkRepository } from "../../../domain/interfaces/IParkRepository";
import { OutingFromDBWithRelations } from "../../../infrastructure/types/database";
import { AppError } from "../../../helpers/errorHandler";
import { validateCityAndCreateLocation } from "./helpers/locationHelper";

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
