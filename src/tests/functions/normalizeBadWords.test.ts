import { normalizeBadWords } from "../../helpers/normalizeBadWords";

describe("normalize bad words", () => {
  it("should return a normalized string", () => {
    const text = "Que merda, filho da puta"; // caso esteja lendo isso aqui, é necessario ter bad words para o teste funcionar então perdão pelo baixo calão.

    const normalizedText = normalizeBadWords(text);

    expect(normalizedText).toBe("Que *****, filho da ****");
  });
});
