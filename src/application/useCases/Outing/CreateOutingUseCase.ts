import { inject, injectable } from "tsyringe";
import {
  CreateOutingInput,
  IOutingRepository,
} from "../../../domain/interfaces/IOutingRepository";
import { OutingFromDbWithRelations } from "../../../infrastructure/types/database";

@injectable()
class CreateOutingUseCase {
  constructor(
    @inject("OutingRepository")
    private outingRepository: IOutingRepository
  ) {}

  async execute(data: CreateOutingInput): Promise<OutingFromDbWithRelations> {
    const outing = await this.outingRepository.create(data);
    return outing;
  }
}

export { CreateOutingUseCase };
