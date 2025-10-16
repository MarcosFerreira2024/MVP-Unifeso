class RatingValue {
  private constructor(private value: number) {}

  static create(value: number) {
    value = this.validate(value);

    return new RatingValue(value);
  }

  getValue() {
    return this.value;
  }

  static validate(value: number) {
    if (value < 1 || value > 5) {
      throw new Error("Rating must be between 1 and 5");
    }
    if (!Number.isInteger(value)) {
      throw new Error("Rating must be an integer");
    }

    return value;
  }
}

export { RatingValue };
