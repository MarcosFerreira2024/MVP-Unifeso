import { $Enums } from "../infrastructure/libs/prisma/generated";
import { Roles } from "../infrastructure/types/enums";

function mapPrismaRole(role: $Enums.Roles): Roles {
  switch (role) {
    case $Enums.Roles.USER:
      return Roles.USER;
    case $Enums.Roles.ADMIN:
      return Roles.ADMIN;
  }
}

export { mapPrismaRole };
