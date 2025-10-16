import { validateValueOrThrow } from "../../helpers/validateValueOrThrow";

class Name {
  private static readonly regex =
    /^(?=.{2,80}$)[A-Za-zÀ-ú]+(?: [A-Za-zÀ-ú]+)*$/;
  private static readonly validationErrorMessage = "Nome Inválido";
  private static readonly equalsErrorMessage = "Nome idêntico ao anterior";

  private constructor(private value: string) {}

  static validate(name: string) {
    return validateValueOrThrow(name, this.regex, this.validationErrorMessage);
  }

  static create(name: string) {
    return new Name(this.validate(name));
  }

  public getName() {
    return this.value;
  }

  static isEquals(newName: string, name: string) {
    if (newName === name) throw new Error(this.equalsErrorMessage);

    return false;
  }
}

export { Name };
