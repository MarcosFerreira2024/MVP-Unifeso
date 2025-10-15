import { Name } from "../../domain/value objects/Name";

describe("Name Vo tests", () => {
  it("should be able to validate a name", () => {
    const name = "John Doe";
    const validatedName = Name.validate(name);
    expect(validatedName).toBe(name);
  });

  it("should throw an error if name is invalid", () => {
    const invalidName = "John Doe123";
    expect(() => Name.validate(invalidName)).toThrow("Nome Inválido");
  });

  it("should be able to create a name", () => {
    const name = "John Doe";
    const createdName = Name.create(name);
    expect(createdName.getName()).toBe(name);
  });

  it("should throw an error when creating an invalid name", () => {
    const invalidName = "John Doe123";
    expect(() => Name.create(invalidName)).toThrow("Nome Inválido");
  });

  it("should throw an error if names are equal", () => {
    const name1 = "John Doe";
    const name2 = "John Doe";
    expect(() => Name.isEquals(name1, name2)).toThrow(
      "Nome idêntico ao anterior"
    );
  });

  it("should return false if names are different", () => {
    const name1 = "John Doe";
    const name2 = "Jane Doe";
    const result = Name.isEquals(name1, name2);
    expect(result).toBe(false);
  });
});
