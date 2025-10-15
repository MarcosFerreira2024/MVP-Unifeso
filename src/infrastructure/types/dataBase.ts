import { Providers, RatingValues, Roles } from "./enums";

export type RatingFromDB = {
  id: string;
  comment: string | null;
  rating: RatingValues;
  userId: string;
  outingId: string;
  createdAt: Date;
  updatedAt: Date;
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

export type UserFromDBWithRelations = UserFromDB & {
  ratings: RatingFromDB[];
  bookings: BookingFromDB[];
};
