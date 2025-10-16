import { injectable } from "tsyringe";
import {
  IVerificationCodeRepository,
  VerificationCodeFromDB,
} from "../../domain/interfaces/IVerificationCodeRepository";
import { prisma } from "../libs/prisma/prisma";

@injectable()
class VerificationCodeRepository implements IVerificationCodeRepository {
  private readonly VERIFICATION_CODE_VALIDITY =
    parseInt(process.env.VERIFICATION_CODE_VALIDITY as string) ??
    60 * 60 * 1000;

  async create(userId: string): Promise<string> {
    const { code } = await prisma.verificationCodes.create({
      data: {
        validUntil: new Date(Date.now() + this.VERIFICATION_CODE_VALIDITY),
        userId,
      },
    });

    return code;
  }
  async delete(userId: string): Promise<void> {
    await prisma.verificationCodes.deleteMany({
      where: { userId },
    });
  }
  async findByUserId(userId: string): Promise<VerificationCodeFromDB | null> {
    return await prisma.verificationCodes.findFirst({
      where: { userId },
    });
  }
  async findCode(code: string): Promise<VerificationCodeFromDB | null> {
    return prisma.verificationCodes.findFirst({
      where: { code },
    });
  }
}

export { VerificationCodeRepository };
