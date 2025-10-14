import { validateValueOrThrow } from "../../helpers/validateValueOrThrow";

class Email {
  private static readonly regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  private static readonly validationErrorMessage = "Email Inválido";

  private constructor(private value: string) {}

  static validateEmail(email: string) {
    return validateValueOrThrow(email, this.regex, this.validationErrorMessage);
  }

  static create(email: string) {
    return new Email(this.validateEmail(email));
  }

  public getEmail() {
    return this.value;
  }
}

export { Email };
