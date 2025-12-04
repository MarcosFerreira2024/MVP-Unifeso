import { inject, injectable } from "tsyringe";
import {
  IOutingRepository,
  UpdateOutingInput,
} from "../../../domain/interfaces/IOutingRepository";
import { OutingFromDBWithRelations } from "../../../infrastructure/types/database";
import { AppError } from "../../../helpers/errorHandler";
import { validateCityAndCreateLocation } from "./helpers/locationHelper";

@injectable()
class UpdateOutingUseCase {
  constructor(
    @inject("OutingRepository")
    private outingRepository: IOutingRepository
  ) {}

  async execute(
    outingId: string,
    data: UpdateOutingInput
  ): Promise<OutingFromDBWithRelations> {
    const outingExists = await this.outingRepository.findById(outingId);

    if (!outingExists) {
      throw new AppError("Outing not found", 404);
    }

    let updateData = { ...data };
    if (data.location) {
      const locationId = await validateCityAndCreateLocation(data.location);
      const { location, ...rest } = updateData;
      updateData = {
        ...rest,
        locationId,
      };
    }

    const updatedOuting = await this.outingRepository.update(
      outingId,
      updateData
    );

    return updatedOuting;
  }
}

export { UpdateOutingUseCase };
