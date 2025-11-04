class Biodiversity {
  private constructor(private value: string) {}

  getValue() {
    return this.value;
  }

  static create(value: string) {
    this.validate(value);
    return new Biodiversity(value);
  }

  private static validate(value: string) {
    if (!value || value.trim().length < 10) {
      throw new Error(
        "A descrição de biodiversidade deve ter pelo menos 30 caracteres. Admin, coloque um texto maior e mais detalhado."
      );
    }
    return value.trim();
  }
}

export { Biodiversity };
