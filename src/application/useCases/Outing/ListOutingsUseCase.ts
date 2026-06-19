import { inject, injectable } from "tsyringe";
import { IOutingRepository } from "../../../domain/interfaces/IOutingRepository.js";
import { OutingFromDBWithRelations } from "../../../infrastructure/types/database.js";

@injectable()
class ListOutingsUseCase {
  constructor(
    @inject("OutingRepository")
    private outingRepository: IOutingRepository
  ) {}

  async execute(
    take: number = 10,
    page: number = 1,
    title?: string,
    category?: string,
    sortBy?: "title" | "city",
    orderBy?: "asc" | "desc"
  ): Promise<{ items: OutingFromDBWithRelations[]; totalItems: number }> {
    const skip = (page - 1) * take;
    const result = await this.outingRepository.findAllWithCount(
      take,
      skip,
      title,
      category,
      sortBy,
      orderBy
    );
    return result;
  }
}

export { ListOutingsUseCase };
