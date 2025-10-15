import { Title } from "../../domain/value objects/Title";

describe("Title Vo tests", () => {
  const errorMessage = "Titulo deve conter de 1 a 36 caracteres sem simbolos";

  it("should be able to validate a title", () => {
    const title = "This is a valid title";
    const validatedTitle = Title.validate(title);
    expect(validatedTitle).toBe(title);
  });

  it("should throw an error if title is invalid", () => {
    const invalidTitle = "a".repeat(37);
    expect(() => Title.validate(invalidTitle)).toThrow(errorMessage);
  });

  it("should throw an error if title has symbols", () => {
    const invalidTitle = "This is an invalid title @";
    expect(() => Title.validate(invalidTitle)).toThrow(errorMessage);
  });

  it("should normalize bad words", () => {
    const titleWithBadWords = "This is a shit title";
    const normalizedTitle = Title.validate(titleWithBadWords);
    expect(normalizedTitle).toBe("This is a **** title");
  });

  it("should be able to create a title", () => {
    const title = "This is a valid title";
    const createdTitle = Title.create(title);
    expect(createdTitle.getTitle()).toBe(title);
  });
});
