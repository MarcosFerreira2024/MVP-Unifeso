import { UserFromDBWithRelations } from "../infrastructure/types/database.js";
import { mapPrismaRole } from "./mapPrismaRole.js";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function mapPrismaUserToUserFromDB(user: any): UserFromDBWithRelations {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    hashedPassword: user.hashedPassword,
    role: mapPrismaRole(user.role),
    provider: user.provider,
    googleId: user.googleId,
    avatarUrl: user.avatarUrl,
    verified: user.verified,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
    bookings: user.bookings || [],
    ratings: user.ratings || [],
  };
}

export { mapPrismaUserToUserFromDB };
