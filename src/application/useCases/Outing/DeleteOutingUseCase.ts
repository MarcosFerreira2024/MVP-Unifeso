import { inject, injectable } from "tsyringe";
import { IOutingRepository } from "../../../domain/interfaces/IOutingRepository.js";

@injectable()
class DeleteOutingUseCase {
  constructor(
    @inject("OutingRepository")
    private outingRepository: IOutingRepository
  ) {}

  async execute(id: string): Promise<void> {
    const outingExists = await this.outingRepository.findById(id);

    if (!outingExists) {
      throw new Error("Passeio não encontrado");
    }

    await this.outingRepository.delete(id);
  }
}

export { DeleteOutingUseCase };
