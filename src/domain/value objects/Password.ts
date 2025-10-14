import { validateValueOrThrow } from "../../helpers/validateValueOrThrow";

class Password {
  private static readonly regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  private static readonly validationErrorMessage =
    "Senha inválida: deve ter pelo menos 8 caracteres, incluindo uma letra maiúscula, uma letra minúscula, um número e um caractere especial (@$!%*?&).";

  static validate(password: string) {
    return validateValueOrThrow(
      password,
      this.regex,
      this.validationErrorMessage
    );
  }
}

export { Password };
