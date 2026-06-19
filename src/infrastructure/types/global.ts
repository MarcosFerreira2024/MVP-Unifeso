export type UseCaseResponse<T = unknown> = {
  status:
    | "success"
    | "error"
    | "verification_required"
    | "unauthorized"
    | "login_required";
  message: string;
  data?: T;
};

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Express {
    interface Request {
      user: {
        id: string;
        email: string;
        role: "ADMIN" | "USER";
        token: string;
      };
    }
  }
}
