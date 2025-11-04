import { randomUUID } from "crypto";
import { Title } from "../value objects/Title";
import { Content } from "../value objects/Content";

export class Event {
  private constructor(
    private maximumCapacity: number,
    private name: Title,
    private description: Content,
    private startDate: Date,
    private endDate: Date | null,
    private outingId: string
  ) {}

  public static create(
    maximumCapacity: number,
    name: string,
    description: string,
    startDate: Date,
    endDate: Date | null,
    outingId: string
  ): Event {
    if (maximumCapacity <= 0) throw new Error("Invalid maximum capacity.");

    return new Event(
      maximumCapacity,
      Title.create(name),
      Content.create(description)!,
      startDate,
      endDate,
      outingId
    );
  }

  public getDto() {
    return {
      maximumCapacity: this.maximumCapacity,
      name: this.name.getTitle(),
      description: this.description.getContent(),
      startDate: this.startDate,
      endDate: this.endDate,
      outingId: this.outingId,
    };
  }
}
