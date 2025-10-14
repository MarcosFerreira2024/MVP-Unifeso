/**
 * Validates a value using a regex.
 * Throws an error if the validation fails.
 *
 * @param value - The value to be validated.
 * @param regex - The regular expression used for validation.
 * @param onErrorMessage - The error message to throw if validation fails.
 * @throws {Error} - Thrown when the value does not match the regex.
 * @returns {string} - The validated and trimmed value.
 */
function validateValueOrThrow(
  value: string,
  regex: RegExp,
  onErrorMessage: string
): string {
  const isValid = regex.test(value);
  if (!isValid) throw new Error(onErrorMessage);
  return value.trim();
}

export { validateValueOrThrow };
