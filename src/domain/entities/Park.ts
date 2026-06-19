import { Biodiversity } from "../value objects/Biodiversity.js";
import { Capacity } from "../value objects/Capacity.js";

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
