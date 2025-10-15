import { Email } from "../../domain/value objects/Email";

describe("Email Vo tests", () => {
  const errorMessage = "Email Inválido";

  it("should be able to validate an email", () => {
    const email = "test@example.com";
    const validatedEmail = Email.validate(email);
    expect(validatedEmail).toBe(email);
  });

  it("should throw an error if email is invalid", () => {
    const invalidEmail = "invalid-email";
    expect(() => Email.validate(invalidEmail)).toThrow(errorMessage);
  });

  it("should be able to create an email", () => {
    const email = "test@example.com";
    const createdEmail = Email.create(email);
    expect(createdEmail.getEmail()).toBe(email);
  });

  it("should throw an error when creating an invalid email", () => {
    const invalidEmail = "invalid-email";
    expect(() => Email.create(invalidEmail)).toThrow(errorMessage);
  });
});
