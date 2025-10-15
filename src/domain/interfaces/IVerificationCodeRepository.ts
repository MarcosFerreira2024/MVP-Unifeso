type VerificationCode = {
  id: string;
  code: string;
  userId: string;
  used: boolean;
  createdAt: Date;
  updatedAt: Date;
};

interface IVerificationCodeRepository {
  create(): Promise<string>;
  findByUserId(userId: string): Promise<VerificationCode | null>;
  delete(userId: string): Promise<void>;
}

export { IVerificationCodeRepository };
