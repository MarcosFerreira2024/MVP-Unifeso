import { Audience } from "../../shared/enums.js";
import { OutingFromDBWithRelations } from "../../infrastructure/types/database.js";

export type CreateOutingInput = {
  title: string;
  content: string;
  price: number;
  slug: string;
  publicAudience: Audience;
  categoryId: number;
  locationId: number; // locationId já validado pelos UseCases
  photos?: { alt: string; url: string }[];
  openHours?: { dayOfWeek: number; openTime: string; closeTime: string }[];
};

export type UpdateOutingInput = Partial<
  Omit<CreateOutingInput, "locationId">
> & {
  locationId?: number;
  location?: { latitude: number; longitude: number; cityId: number };
  trail?: {
    difficulty: string;
    duration: number;
    distance: number;
    roundTrip: boolean;
  };
  park?: {
    biodiversity: string;
    maximumCapacity: number;
  };
  event?: {
    maximumCapacity: number;
    startDate?: Date;
    endDate?: Date;
  };
};

interface IOutingRepository {
  findById(id: string): Promise<OutingFromDBWithRelations | null>;
  findBySlug(slug: string): Promise<OutingFromDBWithRelations | null>;
  findAll(
    take?: number,
    skip?: number,
    name?: string,
    category?: string,
    sortBy?: "title" | "city",
    orderBy?: "asc" | "desc"
  ): Promise<OutingFromDBWithRelations[]>;
  findAllWithCount(
    take?: number,
    skip?: number,
    name?: string,
    category?: string,
    sortBy?: "title" | "city",
    orderBy?: "asc" | "desc"
  ): Promise<{ items: OutingFromDBWithRelations[]; totalItems: number }>;
  create(data: CreateOutingInput): Promise<OutingFromDBWithRelations>;
  update(
    id: string,
    data: UpdateOutingInput
  ): Promise<OutingFromDBWithRelations>;
  delete(id: string): Promise<void>;
}

export { IOutingRepository };
