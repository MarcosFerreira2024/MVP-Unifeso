import { Content } from "../../domain/value objects/Content";

describe("Content Vo tests", () => {
  it("should be able to validate a content", () => {
    const content = "This is a valid content";
    const validatedContent = Content.validate(content);
    expect(validatedContent).toBe(content);
  });

  it("should throw an error if content is invalid", () => {
    const invalidContent = "a".repeat(301);
    expect(() => Content.validate(invalidContent)).toThrow(
      "Conteúdo deve conter no máximo 300 caracteres"
    );
  });

  it("should normalize bad words", () => {
    const contentWithBadWords = "This is a shit content";
    const normalizedContent = Content.validate(contentWithBadWords);
    expect(normalizedContent).toBe("This is a **** content");
  });

  it("should be able to create a content", () => {
    const content = "This is a valid content";
    const createdContent = Content.create(content);
    expect(createdContent.getContent()).toBe(content);
  });
});
