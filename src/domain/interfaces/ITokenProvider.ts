interface ITokenProvider {
  generate(userId: string, email: string, role: string): Promise<string>;
  verify(
    token: string
  ): Promise<{
    userId: string;
    role: string;
    email: string;
    token: string;
  } | null>;
}
