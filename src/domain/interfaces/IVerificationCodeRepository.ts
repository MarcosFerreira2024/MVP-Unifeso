export type VerificationCodeFromDB = {
  id: string;
  code: string;
  userId: string;
  validUntil: Date;
  used: boolean;
  createdAt: Date;
  updatedAt: Date;
};

interface IVerificationCodeRepository {
  create(userId: string): Promise<string>;
  findByUserId(userId: string): Promise<VerificationCodeFromDB | null>;
  findCode(code: string): Promise<VerificationCodeFromDB | null>;
  delete(userId: string): Promise<void>;
}

export { IVerificationCodeRepository };
