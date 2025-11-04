import { OutingFromDbWithRelations } from "../../infrastructure/types/database";

export type CreateOutingInput = {
  title: string;
  content: string;
  price: number;
  slug: string;
  publicAudience: "ALL" | "PLUS12" | "PLUS16" | "PLUS18";
  categoryId: string;
  location: {
    latitude: number;
    longitude: number;
    cityId: number;
  };
};

export type UpdateOutingInput = Partial<CreateOutingInput>;

export type AddTrailInput = {
  difficulty: string;
  duration: number;
  distance: number;
  roundTrip: boolean;
};

export type AddParkInput = {
  infrastructure: string;
  biodiversity: string;
  maximumCapacity: number;
};

interface IOutingRepository {
  findById(id: string): Promise<OutingFromDbWithRelations | null>;
  findBySlug(slug: string): Promise<OutingFromDbWithRelations | null>;
  create(data: CreateOutingInput): Promise<OutingFromDbWithRelations>;
  update(
    id: string,
    data: UpdateOutingInput
  ): Promise<OutingFromDbWithRelations>;
  delete(id: string): Promise<void>;
  addTrail(
    outingId: string,
    data: AddTrailInput
  ): Promise<OutingFromDbWithRelations>;
  addPark(
    outingId: string,
    data: AddParkInput
  ): Promise<OutingFromDbWithRelations>;
}

export { IOutingRepository };
