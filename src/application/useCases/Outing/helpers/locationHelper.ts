import { prisma } from "../../../../infrastructure/libs/prisma/prisma";
import { AppError } from "../../../../helpers/errorHandler";

export async function validateCityAndCreateLocation(location: {
  latitude: number;
  longitude: number;
  cityId: number;
}): Promise<number> {
  const city = await prisma.city.findUnique({
    where: { id: location.cityId },
  });

  if (!city) {
    throw new AppError(`City with id ${location.cityId} not found`, 404);
  }

  let existingLocation = await prisma.location.findFirst({
    where: {
      cityId: location.cityId,
      latitude: location.latitude,
      longitude: location.longitude,
    },
  });

  if (!existingLocation) {
    existingLocation = await prisma.location.create({
      data: {
        latitude: location.latitude,
        longitude: location.longitude,
        cityId: location.cityId,
      },
    });
  }

  return existingLocation.id;
}
