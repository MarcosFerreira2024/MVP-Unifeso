class Difficulty {
  private constructor(private value: string) {}

  static create(difficulty: "Fácil" | "Médio" | "Difícil") {
    if (
      difficulty === "Difícil" ||
      difficulty === "Médio" ||
      difficulty === "Fácil"
    ) {
      return new Difficulty(difficulty);
    } else {
      throw new Error("Dificuldade inválida");
    }
  }
}
