class VerificationCode {
  private readonly VERIFICATION_CODE_VALIDITY_MINUTES = 60;
  constructor(
    private readonly userId: string,
    private readonly code: string,
    private readonly createdAt: Date,
    private used = false
  ) {}

  public validate(inputCode: string, userId: string) {
    if (this.used) throw new Error("Código já utilizado");
    if (this.isExpired()) throw new Error("Código expirado");
    if (this.userId !== userId)
      throw new Error("Código não pertence a este usuário");
    if (this.code !== inputCode) throw new Error("Código inválido");

    this.used = true;
  }

  private isExpired() {
    const diffMinutes =
      (new Date().getTime() - this.createdAt.getTime()) / 60000;
    return diffMinutes > this.VERIFICATION_CODE_VALIDITY_MINUTES;
  }
}

export { VerificationCode };
