import { $Enums, Roles } from "../infrastructure/libs/prisma/generated/index.js";

function mapPrismaRole(role: $Enums.Roles): Roles {
  switch (role) {
    case $Enums.Roles.USER:
      return Roles.USER;
    case $Enums.Roles.ADMIN:
      return Roles.ADMIN;
  }
}

export { mapPrismaRole };
