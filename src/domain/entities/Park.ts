import { Biodiversity } from "../value objects/Biodiversity";
import { Capacity } from "../value objects/Capacity";

export class Park {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  private constructor(biodiversity: Biodiversity, maximumCapacity: Capacity) {}

  public static create(biodiversity: string, maximumCapacity: number): Park {
    return new Park(
      Biodiversity.create(biodiversity),
      Capacity.create(maximumCapacity)
    );
  }
}
