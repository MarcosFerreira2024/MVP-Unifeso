class Capacity {
  private constructor(private value: number) {}

  getValue() {
    return this.value;
  }

  static create(value: number) {
    this.validate(value);
    return new Capacity(value);
  }

  private static validate(value: number) {
    if (value < 0) throw new Error("Capacidade deve ser maior que 0");

    return value;
  }
} // ainda ta bem simples esse VO mas no futuro caso haja um contador de pessoas no Outing ele será crucial para verificar se esta lotado ou nao e impedir o fluxo

export { Capacity };
