class VerificationCode {
  private readonly VERIFICATION_CODE_VALIDITY_MINUTES = 60;
  constructor(
    private readonly code: string,
    private readonly validUntil: Date,

    private used = false
  ) {}

  public validate(inputCode: string) {
    if (this.used) throw new Error("Código já utilizado");
    if (this.isExpired()) throw new Error("Código expirado");
    if (this.code !== inputCode) throw new Error("Código inválido");
  }

  private isExpired() {
    const diffMinutes =
      (this.validUntil.getTime() - new Date().getTime()) / 1000 / 60;
    return diffMinutes > this.VERIFICATION_CODE_VALIDITY_MINUTES;
  }
}

export { VerificationCode };
