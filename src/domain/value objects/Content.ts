import { normalizeBadWords } from "../../helpers/normalizeBadWords";
import { validateValueOrThrow } from "../../helpers/validateValueOrThrow";

class Content {
  private static readonly regex = /^.{0,300}$/;
  private static readonly validationErrorMessage =
    "Conteúdo deve conter no máximo 300 caracteres";

  private constructor(private content: string) {}

  static create(content?: string) {
    if (!content) return;
    content = Content.validate(content);
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
    if (!this.content) return null;
    return this.content;
  }
}

export { Content };
