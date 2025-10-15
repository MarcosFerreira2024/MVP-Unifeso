import { Password } from "../../domain/value objects/Password";

describe("Password Vo tests", () => {
  const errorMessage =
    "Senha inválida: deve ter pelo menos 8 caracteres, incluindo uma letra maiúscula, uma letra minúscula, um número e um caractere especial (@$!%*?&).";
  it("should be able to validate a password", () => {
    const password = "Password123@";
    const validatedPassword = Password.validate(password);
    expect(validatedPassword).toBe(password);
  });

  it("should throw an error if password is less than 8 characters", () => {
    const invalidPassword = "1234567";
    expect(() => Password.validate(invalidPassword)).toThrow(errorMessage);
  });

  it("should throw an error if password does not have an uppercase letter", () => {
    const invalidPassword = "password123@";
    expect(() => Password.validate(invalidPassword)).toThrow(errorMessage);
  });

  it("should throw an error if password does not have a lowercase letter", () => {
    const invalidPassword = "PASSWORD123@";
    expect(() => Password.validate(invalidPassword)).toThrow(errorMessage);
  });

  it("should throw an error if password does not have a number", () => {
    const invalidPassword = "Password@";
    expect(() => Password.validate(invalidPassword)).toThrow(errorMessage);
  });

  it("should throw an error if password does not have a special character", () => {
    const invalidPassword = "Password123";
    expect(() => Password.validate(invalidPassword)).toThrow(errorMessage);
  });
});
