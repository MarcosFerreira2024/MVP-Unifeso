interface ITokenProvider {
  generate(
    userId: string,
    email: string,
    role: "Admin" | "User"
  ): Promise<string>;
  verify(token: string): Promise<{
    userId: string;
    role: "Admin" | "User";
    email: string;
    token: string;
  } | null>;
}
