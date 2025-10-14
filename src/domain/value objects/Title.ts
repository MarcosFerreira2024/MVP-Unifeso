import { normalizeBadWords } from "../../helpers/normalizeBadWords";
import { validateValueOrThrow } from "../../helpers/validateValueOrThrow";

class Title {
  private static readonly regex = /^[A-Za-z0-9À-ÿ ]{1,36}$/;
  private static readonly validationErrorMessage =
    "Titulo deve conter de 1 a 36 caracteres sem simbolos";

  private constructor(private value: string) {}

  static create(title: string) {
    return new Title(title);
  }

  static validate(title: string) {
    const value = validateValueOrThrow(
      title,
      this.regex,
      this.validationErrorMessage
    );
    return normalizeBadWords(value);
  }

  public getTitle() {
    return this.value;
  }
}

export { Title };
