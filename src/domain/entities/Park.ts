import { randomUUID } from "crypto";
import { Biodiversity } from "../value objects/Biodiversity";
import { Capacity } from "../value objects/Capacity";

export class Park {
  private constructor(biodiversity: Biodiversity, maximumCapacity: Capacity) {}

  public static create(biodiversity: string, maximumCapacity: number): Park {
    return new Park(
      Biodiversity.create(biodiversity),
      Capacity.create(maximumCapacity)
    );
  }
}
