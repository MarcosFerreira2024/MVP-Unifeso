import { normalizeBadWords } from "../../helpers/normalizeBadWords";
import { validateValueOrThrow } from "../../helpers/validateValueOrThrow";

class Content {
  private static readonly regex = /^.{0,300}$/;
  private static readonly validationErrorMessage =
    "Conteúdo deve conter no máximo 300 caracteres";

  private constructor(private value: string) {}

  static create(content: string) {
    return new Content(content);
  }

  static validate(content: string) {
    const value = validateValueOrThrow(
      content,
      this.regex,
      this.validationErrorMessage
    );
    return normalizeBadWords(value);
  }

  public getContent() {
    return this.value;
  }
}

export { Content };
