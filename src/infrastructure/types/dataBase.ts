import {
  Providers,
  Roles,
  CategoryType,
  Audience,
  OutingStatus,
} from "./enums";

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
    email: string;
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

export type UserFromDBWithRelations = UserFromDB & {
  ratings: RatingFromDB[];
  bookings: BookingFromDB[];
};

export type OutingFromDB = {
  id: string;
  title: string;
  content: string;
  price: number;
  mainPhoto: string;
  photos: any;
  category: CategoryType;
  local: ,
  public: Audience;
  startDate: Date;
  endDate: Date;
  startHour: Date;
  endHour: Date;
  slug: string;
  categoryId: string;
  createdAt: Date;
  updatedAt: Date;
  status: OutingStatus;
};

export type OutingFromDBWithRelations = OutingFromDB & {
  categoryRel: {
    name: string;
    type: CategoryType;
  };
  events: any[];
  ratings: RatingFromDB[];
  bookings: BookingFromDB[];
};
