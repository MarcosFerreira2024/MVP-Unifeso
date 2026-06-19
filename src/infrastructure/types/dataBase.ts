import { Providers, Roles, Audience } from "../../shared/enums";

export type RatingFromDB = {
  id: string;
  comment: string | null;
  rating: number;
  userId: string;
  outingId: string;
  createdAt: Date;
  updatedAt: Date;
};

export type RatingFromDBWithRelations = RatingFromDB & {
  user: {
    avatarUrl: string | null;
    name: string;
  };
};

export type BookingFromDB = {
  id: string;
  userId: string;
  outingId: string;
  startDate: Date;
  endDate: Date;
  startHour: Date;
  endHour: Date;
  createdAt: Date;
  updatedAt: Date;
};

export type UserFromDB = {
  id: string;
  name: string;
  email: string;
  hashedPassword: string;
  role: Roles;
  avatarUrl: string | null;
  provider: Providers | null;
  googleId: string | null;
  verified: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export type UserWithoutPasswordFromDB = Omit<UserFromDB, "hashedPassword">;
export type UserFromDBWithoutPassword = UserWithoutPasswordFromDB;

export type UserFromDBWithRelations = UserFromDB & {
  ratings: RatingFromDB[];
  bookings: BookingFromDB[];
};

export type PhotoFromDB = {
  id: string;
  alt: string;
  url: string;
  createdAt: Date;
  updatedAt: Date;
};

export type OpenHourFromDB = {
  id: string;
  dayOfWeek: number;
  openTime: string;
  closeTime: string;
  createdAt: Date;
  updatedAt: Date;
};

export type TrailFromDB = {
  id: string;
  difficulty: string;
  duration: number;
  distance: number;
  roundTrip: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export type ParkFromDB = {
  id: string;
  biodiversity: string;
  maximumCapacity: number;
  createdAt: Date;
  updatedAt: Date;
};

export type EventFromDB = {
  id: string;
  maximumCapacity: number;
  startDate: Date | null;
  endDate: Date | null;
  createdAt: Date;
  updatedAt: Date;
};

export type OutingFromDB = {
  id: string;
  title: string;
  content: string;
  price: number;
  slug: string;
  public: Audience;
  location: {
    latitude: number;
    longitude: number;
  };
  createdAt: Date;
  updatedAt: Date;
};

export type OutingFromDBWithRelations = OutingFromDB & {
  location: {
    latitude: number;
    longitude: number;
    city: {
      id: number;
      name: string;
      createdAt: Date;
      updatedAt: Date;
    };
  };
  photos: PhotoFromDB[];
  openHours: OpenHourFromDB[];
  trail: TrailFromDB | null;
  park: ParkFromDB | null;
  event: EventFromDB | null;
  ratings: RatingFromDB[];
};

type PhotoInput = {
  alt: string;
  url: string;
};

type OpenHourInput = {
  dayOfWeek: number; // 1 = Seg, 7 = Dom
  openTime: string; // Ex: "08:00"
  closeTime: string; // Ex: "18:00"
};

export type OutingBase = {
  title: string;
  content: string;
  price: number;
  slug: string;
  public: Audience;
  categoryId: number; // 1 = Evento, 2 = Parque, 3 = Trilha
  location: {
    latitude: number;
    longitude: number;
    cityId: number;
  };
  photos: PhotoInput[];
  openHours: OpenHourInput[];
};
