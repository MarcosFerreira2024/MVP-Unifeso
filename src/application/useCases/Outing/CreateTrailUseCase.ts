import { inject, injectable } from "tsyringe";
import {
  CreateOutingInput,
  IOutingRepository,
} from "../../../domain/interfaces/IOutingRepository";
import { ITrailRepository } from "../../../domain/interfaces/ITrailRepository";
import { OutingFromDBWithRelations } from "../../../infrastructure/types/database";
import { AppError } from "../../../helpers/errorHandler";
import { validateCityAndCreateLocation } from "./helpers/locationHelper";


@injectable()
class CreateTrailUseCase {
  constructor(
    @inject("OutingRepository")
    private outingRepository: IOutingRepository,
    @inject("TrailRepository")
    private trailRepository: ITrailRepository
  ) {}

  async execute(
    outingData: Omit<CreateOutingInput, "locationId"> & {
      location: { latitude: number; longitude: number; cityId: number };
    },
    trailData: {
      difficulty: string;
      duration: number;
      distance: number;
      roundTrip: boolean;
    }
  ): Promise<OutingFromDBWithRelations> {
    const slugExists = await this.outingRepository.findBySlug(outingData.slug);

    if (slugExists) {
      throw new AppError("Slug already exists", 400);
    }
    const locationId = await validateCityAndCreateLocation(outingData.location);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { location, ...outingFields } = outingData;
    const outingDataWithLocationId = {
      ...outingFields,
      locationId,
      categoryId: 2, // Hardcoding for "Trail"
    };

    const outing = await this.outingRepository.create(outingDataWithLocationId);

    await this.trailRepository.create({
      outingId: outing.id,
      ...trailData,
    });

    const outingWithRelations = await this.outingRepository.findById(outing.id);

    return outingWithRelations as OutingFromDBWithRelations;
  }
}

export { CreateTrailUseCase };
